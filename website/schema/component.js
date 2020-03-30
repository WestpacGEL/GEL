const { Select, Virtual, Checkbox, Text, Relationship } = require('@keystonejs/fields');
const { Content } = require('@westpac/field-content');
const { DynamicComponentsBlock } = require('../utils/dynamic-component-block');
const { resolveComponent } = require('../extend-schema');

const DYNAMIC_BLOCKS_DIR = require.resolve('../dynamic-blocks');

const BLOCKS_CONFIG = [
	Content.blocks.heading,
	Content.blocks.orderedList,
	Content.blocks.unorderedList,
	Content.blocks.blockquote,
	Content.blocks.link,
	[DynamicComponentsBlock, { components: DYNAMIC_BLOCKS_DIR }],
];

const getResolver = key => async args => {
	if (!args.packageName) {
		return null;
	}
	// making some big assumptions here about the path format
	const component = await resolveComponent(args.packageName.replace('_', '-'));
	if (component === null || typeof component === 'undefined') {
		return null;
	}
	if (key === 'packageName') {
		return component.name;
	}
	if (key === 'name') {
		return component.name
			.split('/')
			.slice(-1)
			.pop();
	}
	return component[key];
};

const resolveRequiredPackages = async args => {
	if (!args.packageName) {
		return null;
	}
	// making some big assumptions here about the path format
	const component = await resolveComponent(args.packageName.replace('_', '-'));
	if (component === null || typeof component === 'undefined' || !component.dependencies) {
		return null;
	}
	return (
		Object.keys(component.dependencies)
			.filter(key => key.includes('@westpac/'))
			.join(', ') || ''
	);
};

const getComponentSchema = options => ({
	labelResolver: x => x.pageTitle || x.packageName,
	fields: {
		pageTitle: { type: Text },
		packageName: { type: Select, options },
		name: { type: Virtual, resolver: getResolver('name') },
		version: { type: Virtual, resolver: getResolver('version') },
		description: { type: Virtual, resolver: getResolver('description') },
		isOrphaned: {
			adminDoc: 'This page relates to a package that has been removed.',
			type: Virtual,
			resolver: async args => {
				if (!args.packageName) {
					return false;
				}
				const result = await getResolver('packageName')(args);
				return result ? false : true;
			},
		},
		author: { type: Virtual, resolver: getResolver('author') },
		requires: { type: Virtual, resolver: resolveRequiredPackages },
		design: {
			type: Content,
			blocks: BLOCKS_CONFIG,
		},
		hideAccessibilityTab: { type: Checkbox },
		accessibility: {
			type: Content,
			blocks: BLOCKS_CONFIG,
		},
		hideCodeTab: { type: Checkbox },
		code: {
			type: Content,
			blocks: BLOCKS_CONFIG,
		},
		categories: { type: Relationship, ref: 'Category', many: true },
		relatedInfo: { type: Content, blocks: [Content.blocks.link, Content.blocks.heading] },
	},
});

module.exports = { getComponentSchema };
