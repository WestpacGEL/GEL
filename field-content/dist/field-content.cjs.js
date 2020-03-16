'use strict';

var _join = require("path").join;

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var fields = require('@keystonejs/fields');

var getByPath = _interopDefault(require('lodash.get'));

var utils = require('@keystonejs/utils');

require('../Block/dist/field-content.cjs.js');

var fieldContent$1 = require('../blocks/dist/field-content.cjs.js');

var slateWalker = require('./slate-walker-e3c5ec1f.cjs.js');

const GQL_TYPE_PREFIX = '_ContentType';
const DEFAULT_BLOCKS = [[fieldContent$1.paragraph, {}]];
/**
 * @param data Object For example:
 * {
 *   document: [
 *     { object: 'block', type: 'cloudinaryImage', data: { _mutationPath: 'cloudinaryImages.create[0]' },
 *     { object: 'block', type: 'cloudinaryImage', data: { _mutationPath: 'cloudinaryImages.create[1]' },
 *     { object: 'block', type: 'relationshipUser', data: { _mutationPath: 'relationshipUsers.create[0]' } }
 *     { object: 'block', type: 'relationshipUser', data: { _mutationPath: 'relationshipUsers.connect[0]' } }
 *   ],
 *   cloudinaryImages: {
 *     create: [
 *       { data: { image: <FileObject>, align: 'center' } },
 *       { data: { image: <FileObject>, align: 'center' } }
 *     ]
 *   },
 *   relationshipUsers: {
 *     create: [{ data: { id: 'abc123' } }],
 *     connect: [{ id: 'xyz789' }],
 *   },
 * }
 */

async function processSerialised(document, blocks, graphQlArgs) {
  // Each block retrieves its mutations
  const resolvedMutations = blocks.reduce((mutations, block) => ({ ...mutations,
    ...block.getMutationOperationResults(graphQlArgs)
  }), {});
  const result = {
    document: slateWalker.walkSlateNode(document, {
      visitBlock(node) {
        if (!node.data || !node.data._mutationPaths) {
          // A regular slate.js node - pass it through
          return node;
        }

        const block = blocks.find(({
          type
        }) => type === node.type);

        if (!block) {
          throw new Error("Received mutation for ".concat(node.type, ", but no block types can handle it."));
        }

        const _joinIds = node.data._mutationPaths.map(mutationPath => {
          const joinId = getByPath(resolvedMutations, mutationPath);

          if (!joinId) {
            throw new Error("Slate document refers to unknown mutation '".concat(mutationPath, "'."));
          }

          return joinId;
        }); // NOTE: We don't recurse on the children; we only process the outer
        // most block, any child blocks are left as-is.


        return { ...node,
          data: {
            _joinIds
          }
        };
      },

      defaultVisitor(node, visitNode) {
        if (node.nodes) {
          // Recurse into the child nodes array
          node.nodes = node.nodes.map(childNode => visitNode(childNode));
        }

        return node;
      }

    })
  };
  return result;
}

class Content extends fields.Relationship.implementation {
  constructor(path, {
    blocks: inputBlocks,
    ...fieldConfig
  }, listConfig) {
    // To maintain consistency with other types, we grab the sanitised name
    // directly from the list.
    const {
      itemQueryName
    } = listConfig.getListByKey(listConfig.listKey).gqlNames; // We prefix with `_` here to avoid any possible conflict with a list called
    // `ContentType`.
    // Including the list name + path to make sure these input types are unique
    // to this list+field and don't collide.

    const type = "".concat(GQL_TYPE_PREFIX, "_").concat(itemQueryName, "_").concat(path); // Normalise blocks to always be a tuple with a config object

    let blocks = (Array.isArray(inputBlocks) ? inputBlocks : []).map(block => Array.isArray(block) ? block : [block, {}]);
    blocks.push(...DEFAULT_BLOCKS);
    const blockInstances = blocks.map(([block, blockConfig]) => new block(blockConfig, {
      fromList: listConfig.listKey,
      joinList: type,
      ...listConfig
    })); // Checking for duplicate block types

    for (let currentIndex = 0; currentIndex < blockInstances.length; currentIndex++) {
      const {
        type: currentType
      } = blockInstances[currentIndex];

      for (let checkIndex = currentIndex + 1; checkIndex < blockInstances.length; checkIndex++) {
        const {
          type: checkType
        } = blockInstances[checkIndex];

        if (currentType === checkType) {
          throw new Error("Encountered duplicate Content block type '".concat(currentType, "'."));
        }
      }
    } // Ensure the list is only instantiated once per server instance.


    let auxList = listConfig.getListByKey(type);

    if (!auxList) {
      auxList = listConfig.createAuxList(type, {
        fields: {
          // TODO: Change to a native JSON type
          document: {
            type: fields.Text,
            schemaDoc: 'The serialized Slate.js Document structure'
          },
          // Used to do reverse lookups of Document -> Original Item
          from: {
            type: fields.Relationship,
            ref: "".concat(listConfig.listKey, ".").concat(path),
            schemaDoc: 'A reference back to the item this document belongs to'
          },
          // Gather up all the fields which blocks want to specify
          // (note: They may be Relationships to Aux Lists themselves!)
          ...utils.objMerge(blockInstances.map(block => block.getFieldDefinitions()))
        },
        hooks: {
          async resolveInput({
            resolvedData,
            ...args
          }) {
            // This method will get called twice;
            // 1. The incoming graphql request data
            // 2. Registering the back link in the `from` field
            // We only want to handle the first case, so we bail early otherwise
            if (!resolvedData.document) {
              return resolvedData;
            } // TODO: Remove JSON.parse once using native JSON type


            const documentObj = JSON.parse(resolvedData.document);
            const {
              document
            } = await processSerialised(documentObj, blockInstances, args);
            return { ...resolvedData,
              // TODO: FIXME: Use a JSON type
              document: JSON.stringify(document)
            };
          }

        }
      });
    } // Link up the back reference to keep things in sync


    const config = { ...fieldConfig,
      many: false,
      ref: "".concat(type, ".from")
    };
    super(path, config, listConfig);
    this.auxList = auxList;
    this.listConfig = listConfig;
    this.blocks = blockInstances;
  }
  /*
   * Blocks come in 2 halves:
   * 1. The block implementation (eg; ./views/editor/blocks/embed.js)
   * 2. The config (eg; { apiKey: process.env.EMBEDLY_API_KEY })
   * Because of the way we bundle the admin UI, we have to split apart these
   * two halves and send them separately (see `@keystonejs/field-views-loader`):
   * 1. Sent as a "view" (see `extendAdminViews` below), which will be required
   *    (so it's included in the bundle).
   * 2. Sent as a serialized JSON object (see `extendAdminMeta` below), which
   *    will be injected into the `window` and read back ready for use.
   * We then stitch those two halves back together within `views/Field.js`.
   */


  extendAdminMeta(meta) {
    return { ...meta,
      blockTypes: this.blocks.map(({
        type
      }) => type),
      blockOptions: this.blocks.map(block => [block, block.getViewOptions()]) // Don't bother sending any configs that are empty
      .filter(([, blockConfig]) => blockConfig && Object.keys(blockConfig).length) // Key the block options by type to be serialised and passed to the
      // client
      .reduce((options, block) => ({ ...options,
        [block[0].type]: block[1]
      }), {})
    };
  } // Add the blocks config to the views object for usage in the admin UI
  // (ie; { Cell: , Field: , Filters: , blocks: ...})


  extendAdminViews(views) {
    return { ...views,
      blocks: utils.unique(utils.flatMap(this.blocks, block => block.getAdminViews()))
    };
  }

  getGqlAuxTypes({
    schemaName
  }) {
    return [...super.getGqlAuxTypes({
      schemaName
    }), ...this.auxList.getGqlTypes({
      schemaName
    })];
  }

  gqlAuxFieldResolvers({
    schemaName
  }) {
    return this.auxList.gqlFieldResolvers({
      schemaName
    });
  }

}

class MongoContentInterface extends fields.Relationship.adapters.mongoose {}

class KnexContentInterface extends fields.Relationship.adapters.knex {}

const Content$1 = {
  type: 'Content',
  implementation: Content,
  views: {
    Controller: _join(__dirname, "1kt0g8f"),
    Field: _join(__dirname, "11z4har"),
    Cell: _join(__dirname, "7nssg1"),
    Filter: fields.Text.views.Filter
  },
  adapters: {
    mongoose: MongoContentInterface,
    knex: KnexContentInterface
  },
  blocks: {
    blockquote: fieldContent$1.blockquote,
    heading: fieldContent$1.heading,
    image: fieldContent$1.imageContainer,
    link: fieldContent$1.link,
    orderedList: fieldContent$1.orderedList,
    unorderedList: fieldContent$1.unorderedList // not exposing list-item since it's only used internally by the other blocks
    // not exposing paragraph since it's included by default

  }
};
exports.Content = Content$1;
