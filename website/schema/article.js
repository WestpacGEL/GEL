const { Text, Relationship } = require('@keystonejs/fields');
const { Content } = require('@westpac/field-content');
const { DynamicComponentsBlock } = require('../utils/dynamic-component-block');

const DYNAMIC_BLOCKS_DIR = require.resolve('../dynamic-blocks');

const BLOCKS_CONFIG = [
	Content.blocks.blockquote,
	Content.blocks.image,
	Content.blocks.orderedList,
	Content.blocks.unorderedList,
	Content.blocks.link,
	Content.blocks.heading,
	[DynamicComponentsBlock, { components: DYNAMIC_BLOCKS_DIR }],
];

const articleSchema = {
	labelResolver: x => x.pageTitle || x.packageName,
	fields: {
		pageTitle: { type: Text },
		content: {
			type: Content,
			blocks: BLOCKS_CONFIG,
		},
		categories: { type: Relationship, ref: 'Category', many: true },
	},
};

module.exports = { articleSchema };
