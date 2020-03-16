'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var buildFieldTypes = require('@keystonejs/build-field-types');
var fields = require('@keystonejs/fields');
var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var _objectWithoutProperties = _interopDefault(
	require('@babel/runtime/helpers/objectWithoutProperties')
);
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(
	require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf = _interopDefault(require('@babel/runtime/helpers/getPrototypeOf'));
var _get = _interopDefault(require('@babel/runtime/helpers/get'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var getByPath = _interopDefault(require('lodash.get'));
var utils = require('@keystonejs/utils');

var Block = /*#__PURE__*/ (function() {
	function Block() {
		_classCallCheck(this, Block);

		// To be set by a Block if it creates a join table.
		// Instance of @keystonejs/core#List
		this.auxList = undefined;
	}

	_createClass(Block, [
		{
			key: 'getGqlInputType',
			value: function getGqlInputType() {
				if (!this.constructor.type) {
					throw new Error(''.concat(this.constructor.name, " must have a static 'type' property"));
				}

				return ''.concat(this.constructor.type, 'RelateToManyInput');
			},
		},
		{
			key: 'getGqlAuxTypes',
			value: function getGqlAuxTypes() {
				return [];
			}, // To be set by a Block if it requires special input fields (for example; if
			// it's utilising a join table)
			// Array of Keystone Field Types (most likely a `Relationship`)
		},
		{
			key: 'getGqlInputFields',
			value: function getGqlInputFields() {
				return [];
			}, // To be set by a Block if it requires special input fields (for example; if
			// it's utilising a join table)
			// Array of Keystone Field Types (most likely a `Relationship`)
		},
		{
			key: 'getGqlOutputFields',
			value: function getGqlOutputFields() {
				return [];
			},
		},
		{
			key: 'getFieldDefinitions',
			value: function getFieldDefinitions() {
				return {};
			},
			/**
			 * @param graphQlArgs {Object}
			 */
		},
		{
			key: 'getMutationOperationResults',
			value: function getMutationOperationResults() {
				return;
			},
		},
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [];
			},
		},
		{
			key: 'getViewOptions',
			value: function getViewOptions() {
				return {};
			},
		},
		{
			key: 'type',
			get: function get() {
				throw new Error(''.concat(this.constructor.name, " must have a 'type' getter"));
			},
		},
		{
			key: 'path',
			get: function get() {
				throw new Error(''.concat(this.constructor.name, " must have a 'path' getter"));
			},
		},
	]);

	return Block;
})();

var BlockquoteBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(BlockquoteBlock, _Block);

	function BlockquoteBlock() {
		_classCallCheck(this, BlockquoteBlock);

		return _possibleConstructorReturn(
			this,
			_getPrototypeOf(BlockquoteBlock).apply(this, arguments)
		);
	}

	_createClass(BlockquoteBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/blockquote')];
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'blockquote';
			},
		},
	]);

	return BlockquoteBlock;
})(Block);

var CaptionBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(CaptionBlock, _Block);

	function CaptionBlock() {
		_classCallCheck(this, CaptionBlock);

		return _possibleConstructorReturn(this, _getPrototypeOf(CaptionBlock).apply(this, arguments));
	}

	_createClass(CaptionBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/caption')];
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'caption';
			},
		},
	]);

	return CaptionBlock;
})(Block);

var HeadingBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(HeadingBlock, _Block);

	function HeadingBlock() {
		_classCallCheck(this, HeadingBlock);

		return _possibleConstructorReturn(this, _getPrototypeOf(HeadingBlock).apply(this, arguments));
	}

	_createClass(HeadingBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/heading')].concat(
					_toConsumableArray(new ParagraphBlock().getAdminViews())
				);
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'heading';
			},
		},
	]);

	return HeadingBlock;
})(Block);

var ImageBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(ImageBlock, _Block);

	function ImageBlock() {
		_classCallCheck(this, ImageBlock);

		return _possibleConstructorReturn(this, _getPrototypeOf(ImageBlock).apply(this, arguments));
	}

	_createClass(ImageBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/image')];
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'image';
			},
		},
	]);

	return ImageBlock;
})(Block);

var ImageContainerBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(ImageContainerBlock, _Block);

	function ImageContainerBlock() {
		_classCallCheck(this, ImageContainerBlock);

		return _possibleConstructorReturn(
			this,
			_getPrototypeOf(ImageContainerBlock).apply(this, arguments)
		);
	}

	_createClass(ImageContainerBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/image-container')].concat(
					_toConsumableArray(new ImageBlock().getAdminViews()),
					_toConsumableArray(new CaptionBlock().getAdminViews())
				);
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'image-container';
			},
		},
	]);

	return ImageContainerBlock;
})(Block);

var LinkBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(LinkBlock, _Block);

	function LinkBlock() {
		_classCallCheck(this, LinkBlock);

		return _possibleConstructorReturn(this, _getPrototypeOf(LinkBlock).apply(this, arguments));
	}

	_createClass(LinkBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/link')];
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'link';
			},
		},
	]);

	return LinkBlock;
})(Block);

var ListItemBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(ListItemBlock, _Block);

	function ListItemBlock() {
		_classCallCheck(this, ListItemBlock);

		return _possibleConstructorReturn(this, _getPrototypeOf(ListItemBlock).apply(this, arguments));
	}

	_createClass(ListItemBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/list-item')];
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'list-item';
			},
		},
	]);

	return ListItemBlock;
})(Block);

var OrderedListBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(OrderedListBlock, _Block);

	function OrderedListBlock() {
		_classCallCheck(this, OrderedListBlock);

		return _possibleConstructorReturn(
			this,
			_getPrototypeOf(OrderedListBlock).apply(this, arguments)
		);
	}

	_createClass(OrderedListBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/ordered-list')].concat(
					_toConsumableArray(new ListItemBlock().getAdminViews())
				);
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'ordered-list';
			},
		},
	]);

	return OrderedListBlock;
})(Block);

var ParagraphBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(ParagraphBlock, _Block);

	function ParagraphBlock() {
		_classCallCheck(this, ParagraphBlock);

		return _possibleConstructorReturn(this, _getPrototypeOf(ParagraphBlock).apply(this, arguments));
	}

	_createClass(ParagraphBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/paragraph')];
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'paragraph';
			},
		},
	]);

	return ParagraphBlock;
})(Block);

var UnorderedListBlock = /*#__PURE__*/ (function(_Block) {
	_inherits(UnorderedListBlock, _Block);

	function UnorderedListBlock() {
		_classCallCheck(this, UnorderedListBlock);

		return _possibleConstructorReturn(
			this,
			_getPrototypeOf(UnorderedListBlock).apply(this, arguments)
		);
	}

	_createClass(UnorderedListBlock, [
		{
			key: 'getAdminViews',
			value: function getAdminViews() {
				return [buildFieldTypes.importView('../views/editor/blocks/unordered-list')].concat(
					_toConsumableArray(new ListItemBlock().getAdminViews())
				);
			},
		},
		{
			key: 'type',
			get: function get() {
				return 'unordered-list';
			},
		},
	]);

	return UnorderedListBlock;
})(Block);

var noop = function noop() {}; // A depth-first, top-down tree walking algorithm.

function visitNode(node, visitors) {
	var recurse = function recurse(childNode) {
		return visitNode(childNode, visitors);
	};

	var visitedNode = null; // Registered visitors might serialise a node.
	// If they do, it's their responsibility to also serialise all the child
	// nodes.
	// If they don't, they return falsey and we pass it to the default visitor to
	// handle.

	switch (node.object) {
		case 'document': {
			visitedNode = visitors.visitDocument(node, recurse);
			break;
		}

		case 'block': {
			visitedNode = visitors.visitBlock(node, recurse);
			break;
		}

		case 'inline': {
			visitedNode = visitors.visitInline(node, recurse);
			break;
		}

		case 'text': {
			visitedNode = visitors.visitText(node, recurse);
			break;
		}

		default: {
			throw new Error("Encountered unknown type '".concat(node.object, "' in Slate document"));
		}
	} // The node (and children) weren't serialised, so we'll use the default JSON
	// for this node, and recurse onto the child nodes.

	if (!visitedNode) {
		visitedNode = visitors.defaultVisitor(node, recurse);
	}

	return visitedNode;
}

function walkSlateNode(
	node, // visitors should return a JSON representation of the node and its
	// children, or return nothing to continue walking the tree.
	_ref
) {
	var _ref$visitDocument = _ref.visitDocument,
		visitDocument = _ref$visitDocument === void 0 ? noop : _ref$visitDocument,
		_ref$visitBlock = _ref.visitBlock,
		visitBlock = _ref$visitBlock === void 0 ? noop : _ref$visitBlock,
		_ref$visitInline = _ref.visitInline,
		visitInline = _ref$visitInline === void 0 ? noop : _ref$visitInline,
		_ref$visitText = _ref.visitText,
		visitText = _ref$visitText === void 0 ? noop : _ref$visitText,
		_ref$defaultVisitor = _ref.defaultVisitor,
		defaultVisitor = _ref$defaultVisitor === void 0 ? utils.identity : _ref$defaultVisitor;
	return visitNode(node, {
		visitDocument: visitDocument,
		visitBlock: visitBlock,
		visitInline: visitInline,
		visitText: visitText,
		defaultVisitor: defaultVisitor,
	});
}

function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly)
			symbols = symbols.filter(function(sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			});
		keys.push.apply(keys, symbols);
	}
	return keys;
}

function _objectSpread(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {};
		if (i % 2) {
			ownKeys(Object(source), true).forEach(function(key) {
				_defineProperty(target, key, source[key]);
			});
		} else if (Object.getOwnPropertyDescriptors) {
			Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		} else {
			ownKeys(Object(source)).forEach(function(key) {
				Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			});
		}
	}
	return target;
}
var GQL_TYPE_PREFIX = '_ContentType';
var DEFAULT_BLOCKS = [[ParagraphBlock, {}]];
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

function processSerialised(_x, _x2, _x3) {
	return _processSerialised.apply(this, arguments);
}

function _processSerialised() {
	_processSerialised = _asyncToGenerator(
		/*#__PURE__*/ _regeneratorRuntime.mark(function _callee2(document, blocks, graphQlArgs) {
			var resolvedMutations, result;
			return _regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch ((_context2.prev = _context2.next)) {
						case 0:
							// Each block retrieves its mutations
							resolvedMutations = blocks.reduce(function(mutations, block) {
								return _objectSpread(
									{},
									mutations,
									{},
									block.getMutationOperationResults(graphQlArgs)
								);
							}, {});
							result = {
								document: walkSlateNode(document, {
									visitBlock: function visitBlock(node) {
										if (!node.data || !node.data._mutationPaths) {
											// A regular slate.js node - pass it through
											return node;
										}

										var block = blocks.find(function(_ref11) {
											var type = _ref11.type;
											return type === node.type;
										});

										if (!block) {
											throw new Error(
												'Received mutation for '.concat(
													node.type,
													', but no block types can handle it.'
												)
											);
										}

										var _joinIds = node.data._mutationPaths.map(function(mutationPath) {
											var joinId = getByPath(resolvedMutations, mutationPath);

											if (!joinId) {
												throw new Error(
													"Slate document refers to unknown mutation '".concat(mutationPath, "'.")
												);
											}

											return joinId;
										}); // NOTE: We don't recurse on the children; we only process the outer
										// most block, any child blocks are left as-is.

										return _objectSpread({}, node, {
											data: {
												_joinIds: _joinIds,
											},
										});
									},
									defaultVisitor: function defaultVisitor(node, visitNode) {
										if (node.nodes) {
											// Recurse into the child nodes array
											node.nodes = node.nodes.map(function(childNode) {
												return visitNode(childNode);
											});
										}

										return node;
									},
								}),
							};
							return _context2.abrupt('return', result);

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2);
		})
	);
	return _processSerialised.apply(this, arguments);
}

var Content = /*#__PURE__*/ (function(_Relationship$impleme) {
	_inherits(Content, _Relationship$impleme);

	function Content(path, _ref, listConfig) {
		var _this;

		var inputBlocks = _ref.blocks,
			fieldConfig = _objectWithoutProperties(_ref, ['blocks']);

		_classCallCheck(this, Content);

		// To maintain consistency with other types, we grab the sanitised name
		// directly from the list.
		var itemQueryName = listConfig.getListByKey(listConfig.listKey).gqlNames.itemQueryName; // We prefix with `_` here to avoid any possible conflict with a list called
		// `ContentType`.
		// Including the list name + path to make sure these input types are unique
		// to this list+field and don't collide.

		var type = ''
			.concat(GQL_TYPE_PREFIX, '_')
			.concat(itemQueryName, '_')
			.concat(path); // Normalise blocks to always be a tuple with a config object

		var blocks = (Array.isArray(inputBlocks) ? inputBlocks : []).map(function(block) {
			return Array.isArray(block) ? block : [block, {}];
		});
		blocks.push.apply(blocks, DEFAULT_BLOCKS);
		var blockInstances = blocks.map(function(_ref2) {
			var _ref3 = _slicedToArray(_ref2, 2),
				block = _ref3[0],
				blockConfig = _ref3[1];

			return new block(
				blockConfig,
				_objectSpread(
					{
						fromList: listConfig.listKey,
						joinList: type,
					},
					listConfig
				)
			);
		}); // Checking for duplicate block types

		for (var currentIndex = 0; currentIndex < blockInstances.length; currentIndex++) {
			var currentType = blockInstances[currentIndex].type;

			for (var checkIndex = currentIndex + 1; checkIndex < blockInstances.length; checkIndex++) {
				var checkType = blockInstances[checkIndex].type;

				if (currentType === checkType) {
					throw new Error("Encountered duplicate Content block type '".concat(currentType, "'."));
				}
			}
		} // Ensure the list is only instantiated once per server instance.

		var auxList = listConfig.getListByKey(type);

		if (!auxList) {
			auxList = listConfig.createAuxList(type, {
				fields: _objectSpread(
					{
						// TODO: Change to a native JSON type
						document: {
							type: fields.Text,
							schemaDoc: 'The serialized Slate.js Document structure',
						},
						// Used to do reverse lookups of Document -> Original Item
						from: {
							type: fields.Relationship,
							ref: ''.concat(listConfig.listKey, '.').concat(path),
							schemaDoc: 'A reference back to the item this document belongs to',
						},
					},
					utils.objMerge(
						blockInstances.map(function(block) {
							return block.getFieldDefinitions();
						})
					)
				),
				hooks: {
					resolveInput: function resolveInput(_ref4) {
						return _asyncToGenerator(
							/*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
								var resolvedData, args, documentObj, _ref5, document;

								return _regeneratorRuntime.wrap(function _callee$(_context) {
									while (1) {
										switch ((_context.prev = _context.next)) {
											case 0:
												(resolvedData = _ref4.resolvedData),
													(args = _objectWithoutProperties(_ref4, ['resolvedData']));

												if (resolvedData.document) {
													_context.next = 3;
													break;
												}

												return _context.abrupt('return', resolvedData);

											case 3:
												// TODO: Remove JSON.parse once using native JSON type
												documentObj = JSON.parse(resolvedData.document);
												_context.next = 6;
												return processSerialised(documentObj, blockInstances, args);

											case 6:
												_ref5 = _context.sent;
												document = _ref5.document;
												return _context.abrupt(
													'return',
													_objectSpread({}, resolvedData, {
														// TODO: FIXME: Use a JSON type
														document: JSON.stringify(document),
													})
												);

											case 9:
											case 'end':
												return _context.stop();
										}
									}
								}, _callee);
							})
						)();
					},
				},
			});
		} // Link up the back reference to keep things in sync

		var config = _objectSpread({}, fieldConfig, {
			many: false,
			ref: ''.concat(type, '.from'),
		});
		_this = _possibleConstructorReturn(
			this,
			_getPrototypeOf(Content).call(this, path, config, listConfig)
		);
		_this.auxList = auxList;
		_this.listConfig = listConfig;
		_this.blocks = blockInstances;
		return _this;
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

	_createClass(Content, [
		{
			key: 'extendAdminMeta',
			value: function extendAdminMeta(meta) {
				return _objectSpread({}, meta, {
					blockTypes: this.blocks.map(function(_ref6) {
						var type = _ref6.type;
						return type;
					}),
					blockOptions: this.blocks
						.map(function(block) {
							return [block, block.getViewOptions()];
						}) // Don't bother sending any configs that are empty
						.filter(function(_ref7) {
							var _ref8 = _slicedToArray(_ref7, 2),
								blockConfig = _ref8[1];

							return blockConfig && Object.keys(blockConfig).length;
						}) // Key the block options by type to be serialised and passed to the
						// client
						.reduce(function(options, block) {
							return _objectSpread({}, options, _defineProperty({}, block[0].type, block[1]));
						}, {}),
				});
			}, // Add the blocks config to the views object for usage in the admin UI
			// (ie; { Cell: , Field: , Filters: , blocks: ...})
		},
		{
			key: 'extendAdminViews',
			value: function extendAdminViews(views) {
				return _objectSpread({}, views, {
					blocks: utils.unique(
						utils.flatMap(this.blocks, function(block) {
							return block.getAdminViews();
						})
					),
				});
			},
		},
		{
			key: 'getGqlAuxTypes',
			value: function getGqlAuxTypes(_ref9) {
				var schemaName = _ref9.schemaName;
				return [].concat(
					_toConsumableArray(
						_get(_getPrototypeOf(Content.prototype), 'getGqlAuxTypes', this).call(this, {
							schemaName: schemaName,
						})
					),
					_toConsumableArray(
						this.auxList.getGqlTypes({
							schemaName: schemaName,
						})
					)
				);
			},
		},
		{
			key: 'gqlAuxFieldResolvers',
			value: function gqlAuxFieldResolvers(_ref10) {
				var schemaName = _ref10.schemaName;
				return this.auxList.gqlFieldResolvers({
					schemaName: schemaName,
				});
			},
		},
	]);

	return Content;
})(fields.Relationship.implementation);
var MongoContentInterface = /*#__PURE__*/ (function(_Relationship$adapter) {
	_inherits(MongoContentInterface, _Relationship$adapter);

	function MongoContentInterface() {
		_classCallCheck(this, MongoContentInterface);

		return _possibleConstructorReturn(
			this,
			_getPrototypeOf(MongoContentInterface).apply(this, arguments)
		);
	}

	return MongoContentInterface;
})(fields.Relationship.adapters.mongoose);
var KnexContentInterface = /*#__PURE__*/ (function(_Relationship$adapter2) {
	_inherits(KnexContentInterface, _Relationship$adapter2);

	function KnexContentInterface() {
		_classCallCheck(this, KnexContentInterface);

		return _possibleConstructorReturn(
			this,
			_getPrototypeOf(KnexContentInterface).apply(this, arguments)
		);
	}

	return KnexContentInterface;
})(fields.Relationship.adapters.knex);

var Content$1 = {
	type: 'Content',
	implementation: Content,
	views: {
		Controller: buildFieldTypes.importView('./views/Controller'),
		Field: buildFieldTypes.importView('./views/Field'),
		Cell: buildFieldTypes.importView('./views/Cell'),
		Filter: fields.Text.views.Filter,
	},
	adapters: {
		mongoose: MongoContentInterface,
		knex: KnexContentInterface,
	},
	blocks: {
		blockquote: BlockquoteBlock,
		heading: HeadingBlock,
		image: ImageContainerBlock,
		link: LinkBlock,
		orderedList: OrderedListBlock,
		unorderedList: UnorderedListBlock, // not exposing list-item since it's only used internally by the other blocks
		// not exposing paragraph since it's included by default
	},
};

exports.Content = Content$1;
