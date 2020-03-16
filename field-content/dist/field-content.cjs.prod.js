"use strict";

function _interopDefault(ex) {
  return ex && "object" == typeof ex && "default" in ex ? ex.default : ex;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var buildFieldTypes = require("@keystonejs/build-field-types"), fields = require("@keystonejs/fields"), _toConsumableArray = _interopDefault(require("@babel/runtime/helpers/toConsumableArray")), _regeneratorRuntime = _interopDefault(require("@babel/runtime/regenerator")), _defineProperty = _interopDefault(require("@babel/runtime/helpers/defineProperty")), _slicedToArray = _interopDefault(require("@babel/runtime/helpers/slicedToArray")), _objectWithoutProperties = _interopDefault(require("@babel/runtime/helpers/objectWithoutProperties")), _classCallCheck = _interopDefault(require("@babel/runtime/helpers/classCallCheck")), _createClass = _interopDefault(require("@babel/runtime/helpers/createClass")), _possibleConstructorReturn = _interopDefault(require("@babel/runtime/helpers/possibleConstructorReturn")), _getPrototypeOf = _interopDefault(require("@babel/runtime/helpers/getPrototypeOf")), _get = _interopDefault(require("@babel/runtime/helpers/get")), _inherits = _interopDefault(require("@babel/runtime/helpers/inherits")), _asyncToGenerator = _interopDefault(require("@babel/runtime/helpers/asyncToGenerator")), getByPath = _interopDefault(require("lodash.get")), utils = require("@keystonejs/utils"), Block = function() {
  function Block() {
    _classCallCheck(this, Block), this.auxList = void 0;
  }
  return _createClass(Block, [ {
    key: "getGqlInputType",
    value: function() {
      if (!this.constructor.type) throw new Error("".concat(this.constructor.name, " must have a static 'type' property"));
      return "".concat(this.constructor.type, "RelateToManyInput");
    }
  }, {
    key: "getGqlAuxTypes",
    value: function() {
      return [];
    }
  }, {
    key: "getGqlInputFields",
    value: function() {
      return [];
    }
  }, {
    key: "getGqlOutputFields",
    value: function() {
      return [];
    }
  }, {
    key: "getFieldDefinitions",
    value: function() {
      return {};
    }
  }, {
    key: "getMutationOperationResults",
    value: function() {}
  }, {
    key: "getAdminViews",
    value: function() {
      return [];
    }
  }, {
    key: "getViewOptions",
    value: function() {
      return {};
    }
  }, {
    key: "type",
    get: function() {
      throw new Error("".concat(this.constructor.name, " must have a 'type' getter"));
    }
  }, {
    key: "path",
    get: function() {
      throw new Error("".concat(this.constructor.name, " must have a 'path' getter"));
    }
  } ]), Block;
}(), BlockquoteBlock = function(_Block) {
  function BlockquoteBlock() {
    return _classCallCheck(this, BlockquoteBlock), _possibleConstructorReturn(this, _getPrototypeOf(BlockquoteBlock).apply(this, arguments));
  }
  return _inherits(BlockquoteBlock, Block), _createClass(BlockquoteBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/blockquote") ];
    }
  }, {
    key: "type",
    get: function() {
      return "blockquote";
    }
  } ]), BlockquoteBlock;
}(), CaptionBlock = function(_Block) {
  function CaptionBlock() {
    return _classCallCheck(this, CaptionBlock), _possibleConstructorReturn(this, _getPrototypeOf(CaptionBlock).apply(this, arguments));
  }
  return _inherits(CaptionBlock, Block), _createClass(CaptionBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/caption") ];
    }
  }, {
    key: "type",
    get: function() {
      return "caption";
    }
  } ]), CaptionBlock;
}(), HeadingBlock = function(_Block) {
  function HeadingBlock() {
    return _classCallCheck(this, HeadingBlock), _possibleConstructorReturn(this, _getPrototypeOf(HeadingBlock).apply(this, arguments));
  }
  return _inherits(HeadingBlock, Block), _createClass(HeadingBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/heading") ].concat(_toConsumableArray((new ParagraphBlock).getAdminViews()));
    }
  }, {
    key: "type",
    get: function() {
      return "heading";
    }
  } ]), HeadingBlock;
}(), ImageBlock = function(_Block) {
  function ImageBlock() {
    return _classCallCheck(this, ImageBlock), _possibleConstructorReturn(this, _getPrototypeOf(ImageBlock).apply(this, arguments));
  }
  return _inherits(ImageBlock, Block), _createClass(ImageBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/image") ];
    }
  }, {
    key: "type",
    get: function() {
      return "image";
    }
  } ]), ImageBlock;
}(), ImageContainerBlock = function(_Block) {
  function ImageContainerBlock() {
    return _classCallCheck(this, ImageContainerBlock), _possibleConstructorReturn(this, _getPrototypeOf(ImageContainerBlock).apply(this, arguments));
  }
  return _inherits(ImageContainerBlock, Block), _createClass(ImageContainerBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/image-container") ].concat(_toConsumableArray((new ImageBlock).getAdminViews()), _toConsumableArray((new CaptionBlock).getAdminViews()));
    }
  }, {
    key: "type",
    get: function() {
      return "image-container";
    }
  } ]), ImageContainerBlock;
}(), LinkBlock = function(_Block) {
  function LinkBlock() {
    return _classCallCheck(this, LinkBlock), _possibleConstructorReturn(this, _getPrototypeOf(LinkBlock).apply(this, arguments));
  }
  return _inherits(LinkBlock, Block), _createClass(LinkBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/link") ];
    }
  }, {
    key: "type",
    get: function() {
      return "link";
    }
  } ]), LinkBlock;
}(), ListItemBlock = function(_Block) {
  function ListItemBlock() {
    return _classCallCheck(this, ListItemBlock), _possibleConstructorReturn(this, _getPrototypeOf(ListItemBlock).apply(this, arguments));
  }
  return _inherits(ListItemBlock, Block), _createClass(ListItemBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/list-item") ];
    }
  }, {
    key: "type",
    get: function() {
      return "list-item";
    }
  } ]), ListItemBlock;
}(), OrderedListBlock = function(_Block) {
  function OrderedListBlock() {
    return _classCallCheck(this, OrderedListBlock), _possibleConstructorReturn(this, _getPrototypeOf(OrderedListBlock).apply(this, arguments));
  }
  return _inherits(OrderedListBlock, Block), _createClass(OrderedListBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/ordered-list") ].concat(_toConsumableArray((new ListItemBlock).getAdminViews()));
    }
  }, {
    key: "type",
    get: function() {
      return "ordered-list";
    }
  } ]), OrderedListBlock;
}(), ParagraphBlock = function(_Block) {
  function ParagraphBlock() {
    return _classCallCheck(this, ParagraphBlock), _possibleConstructorReturn(this, _getPrototypeOf(ParagraphBlock).apply(this, arguments));
  }
  return _inherits(ParagraphBlock, Block), _createClass(ParagraphBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/paragraph") ];
    }
  }, {
    key: "type",
    get: function() {
      return "paragraph";
    }
  } ]), ParagraphBlock;
}(), UnorderedListBlock = function(_Block) {
  function UnorderedListBlock() {
    return _classCallCheck(this, UnorderedListBlock), _possibleConstructorReturn(this, _getPrototypeOf(UnorderedListBlock).apply(this, arguments));
  }
  return _inherits(UnorderedListBlock, Block), _createClass(UnorderedListBlock, [ {
    key: "getAdminViews",
    value: function() {
      return [ buildFieldTypes.importView("../views/editor/blocks/unordered-list") ].concat(_toConsumableArray((new ListItemBlock).getAdminViews()));
    }
  }, {
    key: "type",
    get: function() {
      return "unordered-list";
    }
  } ]), UnorderedListBlock;
}(), noop = function() {};

function visitNode(node, visitors) {
  var recurse = function(childNode) {
    return visitNode(childNode, visitors);
  }, visitedNode = null;
  switch (node.object) {
   case "document":
    visitedNode = visitors.visitDocument(node, recurse);
    break;

   case "block":
    visitedNode = visitors.visitBlock(node, recurse);
    break;

   case "inline":
    visitedNode = visitors.visitInline(node, recurse);
    break;

   case "text":
    visitedNode = visitors.visitText(node, recurse);
    break;

   default:
    throw new Error("Encountered unknown type '".concat(node.object, "' in Slate document"));
  }
  return visitedNode || (visitedNode = visitors.defaultVisitor(node, recurse)), visitedNode;
}

function walkSlateNode(node, _ref) {
  var _ref$visitDocument = _ref.visitDocument, visitDocument = void 0 === _ref$visitDocument ? noop : _ref$visitDocument, _ref$visitBlock = _ref.visitBlock, visitBlock = void 0 === _ref$visitBlock ? noop : _ref$visitBlock, _ref$visitInline = _ref.visitInline, visitInline = void 0 === _ref$visitInline ? noop : _ref$visitInline, _ref$visitText = _ref.visitText, visitText = void 0 === _ref$visitText ? noop : _ref$visitText, _ref$defaultVisitor = _ref.defaultVisitor;
  return visitNode(node, {
    visitDocument: visitDocument,
    visitBlock: visitBlock,
    visitInline: visitInline,
    visitText: visitText,
    defaultVisitor: void 0 === _ref$defaultVisitor ? utils.identity : _ref$defaultVisitor
  });
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter((function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    }))), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
      _defineProperty(target, key, source[key]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    }));
  }
  return target;
}

var GQL_TYPE_PREFIX = "_ContentType", DEFAULT_BLOCKS = [ [ ParagraphBlock, {} ] ];

function processSerialised(_x, _x2, _x3) {
  return _processSerialised.apply(this, arguments);
}

function _processSerialised() {
  return (_processSerialised = _asyncToGenerator(_regeneratorRuntime.mark((function _callee2(document, blocks, graphQlArgs) {
    var resolvedMutations, result;
    return _regeneratorRuntime.wrap((function(_context2) {
      for (;;) switch (_context2.prev = _context2.next) {
       case 0:
        return resolvedMutations = blocks.reduce((function(mutations, block) {
          return _objectSpread({}, mutations, {}, block.getMutationOperationResults(graphQlArgs));
        }), {}), result = {
          document: walkSlateNode(document, {
            visitBlock: function(node) {
              if (!node.data || !node.data._mutationPaths) return node;
              if (!blocks.find((function(_ref11) {
                return _ref11.type === node.type;
              }))) throw new Error("Received mutation for ".concat(node.type, ", but no block types can handle it."));
              var _joinIds = node.data._mutationPaths.map((function(mutationPath) {
                var joinId = getByPath(resolvedMutations, mutationPath);
                if (!joinId) throw new Error("Slate document refers to unknown mutation '".concat(mutationPath, "'."));
                return joinId;
              }));
              return _objectSpread({}, node, {
                data: {
                  _joinIds: _joinIds
                }
              });
            },
            defaultVisitor: function(node, visitNode) {
              return node.nodes && (node.nodes = node.nodes.map((function(childNode) {
                return visitNode(childNode);
              }))), node;
            }
          })
        }, _context2.abrupt("return", result);

       case 3:
       case "end":
        return _context2.stop();
      }
    }), _callee2);
  })))).apply(this, arguments);
}

var Content = function(_Relationship$impleme) {
  function Content(path, _ref, listConfig) {
    var _this, inputBlocks = _ref.blocks, fieldConfig = _objectWithoutProperties(_ref, [ "blocks" ]);
    _classCallCheck(this, Content);
    var itemQueryName = listConfig.getListByKey(listConfig.listKey).gqlNames.itemQueryName, type = "".concat(GQL_TYPE_PREFIX, "_").concat(itemQueryName, "_").concat(path), blocks = (Array.isArray(inputBlocks) ? inputBlocks : []).map((function(block) {
      return Array.isArray(block) ? block : [ block, {} ];
    }));
    blocks.push.apply(blocks, DEFAULT_BLOCKS);
    for (var blockInstances = blocks.map((function(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2);
      return new (0, _ref3[0])(_ref3[1], _objectSpread({
        fromList: listConfig.listKey,
        joinList: type
      }, listConfig));
    })), currentIndex = 0; currentIndex < blockInstances.length; currentIndex++) for (var currentType = blockInstances[currentIndex].type, checkIndex = currentIndex + 1; checkIndex < blockInstances.length; checkIndex++) {
      if (currentType === blockInstances[checkIndex].type) throw new Error("Encountered duplicate Content block type '".concat(currentType, "'."));
    }
    var auxList = listConfig.getListByKey(type);
    auxList || (auxList = listConfig.createAuxList(type, {
      fields: _objectSpread({
        document: {
          type: fields.Text,
          schemaDoc: "The serialized Slate.js Document structure"
        },
        from: {
          type: fields.Relationship,
          ref: "".concat(listConfig.listKey, ".").concat(path),
          schemaDoc: "A reference back to the item this document belongs to"
        }
      }, utils.objMerge(blockInstances.map((function(block) {
        return block.getFieldDefinitions();
      })))),
      hooks: {
        resolveInput: function(_ref4) {
          return _asyncToGenerator(_regeneratorRuntime.mark((function _callee() {
            var resolvedData, args, documentObj, _ref5, document;
            return _regeneratorRuntime.wrap((function(_context) {
              for (;;) switch (_context.prev = _context.next) {
               case 0:
                if (resolvedData = _ref4.resolvedData, args = _objectWithoutProperties(_ref4, [ "resolvedData" ]), 
                resolvedData.document) {
                  _context.next = 3;
                  break;
                }
                return _context.abrupt("return", resolvedData);

               case 3:
                return documentObj = JSON.parse(resolvedData.document), _context.next = 6, processSerialised(documentObj, blockInstances, args);

               case 6:
                return _ref5 = _context.sent, document = _ref5.document, _context.abrupt("return", _objectSpread({}, resolvedData, {
                  document: JSON.stringify(document)
                }));

               case 9:
               case "end":
                return _context.stop();
              }
            }), _callee);
          })))();
        }
      }
    }));
    var config = _objectSpread({}, fieldConfig, {
      many: !1,
      ref: "".concat(type, ".from")
    });
    return (_this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, path, config, listConfig))).auxList = auxList, 
    _this.listConfig = listConfig, _this.blocks = blockInstances, _this;
  }
  return _inherits(Content, _Relationship$impleme), _createClass(Content, [ {
    key: "extendAdminMeta",
    value: function(meta) {
      return _objectSpread({}, meta, {
        blockTypes: this.blocks.map((function(_ref6) {
          return _ref6.type;
        })),
        blockOptions: this.blocks.map((function(block) {
          return [ block, block.getViewOptions() ];
        })).filter((function(_ref7) {
          var blockConfig = _slicedToArray(_ref7, 2)[1];
          return blockConfig && Object.keys(blockConfig).length;
        })).reduce((function(options, block) {
          return _objectSpread({}, options, _defineProperty({}, block[0].type, block[1]));
        }), {})
      });
    }
  }, {
    key: "extendAdminViews",
    value: function(views) {
      return _objectSpread({}, views, {
        blocks: utils.unique(utils.flatMap(this.blocks, (function(block) {
          return block.getAdminViews();
        })))
      });
    }
  }, {
    key: "getGqlAuxTypes",
    value: function(_ref9) {
      var schemaName = _ref9.schemaName;
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(Content.prototype), "getGqlAuxTypes", this).call(this, {
        schemaName: schemaName
      })), _toConsumableArray(this.auxList.getGqlTypes({
        schemaName: schemaName
      })));
    }
  }, {
    key: "gqlAuxFieldResolvers",
    value: function(_ref10) {
      var schemaName = _ref10.schemaName;
      return this.auxList.gqlFieldResolvers({
        schemaName: schemaName
      });
    }
  } ]), Content;
}(fields.Relationship.implementation), MongoContentInterface = function(_Relationship$adapter) {
  function MongoContentInterface() {
    return _classCallCheck(this, MongoContentInterface), _possibleConstructorReturn(this, _getPrototypeOf(MongoContentInterface).apply(this, arguments));
  }
  return _inherits(MongoContentInterface, _Relationship$adapter), MongoContentInterface;
}(fields.Relationship.adapters.mongoose), KnexContentInterface = function(_Relationship$adapter2) {
  function KnexContentInterface() {
    return _classCallCheck(this, KnexContentInterface), _possibleConstructorReturn(this, _getPrototypeOf(KnexContentInterface).apply(this, arguments));
  }
  return _inherits(KnexContentInterface, _Relationship$adapter2), KnexContentInterface;
}(fields.Relationship.adapters.knex), Content$1 = {
  type: "Content",
  implementation: Content,
  views: {
    Controller: buildFieldTypes.importView("./views/Controller"),
    Field: buildFieldTypes.importView("./views/Field"),
    Cell: buildFieldTypes.importView("./views/Cell"),
    Filter: fields.Text.views.Filter
  },
  adapters: {
    mongoose: MongoContentInterface,
    knex: KnexContentInterface
  },
  blocks: {
    blockquote: BlockquoteBlock,
    heading: HeadingBlock,
    image: ImageContainerBlock,
    link: LinkBlock,
    orderedList: OrderedListBlock,
    unorderedList: UnorderedListBlock
  }
};

exports.Content = Content$1;
