const { DoOrDoNot } = require('./blocks/do-or-do-not');
const { Example } = require('./blocks/code-examples');
const { Select, Virtual, Checkbox, Text } = require('@keystonejs/fields');
const { Content } = require('@keystonejs/field-content');
const { resolveComponent } = require('../extend-schema');

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

const getComponentSchema = options => ({
	labelResolver: x => x.packageName,
	fields: {
		pageTitle: { type: Text },
		design: {
			type: Content,
			blocks: [
				DoOrDoNot,
				Example,
				Content.blocks.blockquote,
				Content.blocks.image,
				[Content.blocks.dynamicComponent, { components: require.resolve('./block-components') }],
			],
		},
		documentAccessibility: { type: Checkbox },
		accessibility: {
			type: Content,
			blocks: [
				DoOrDoNot,
				Example,
				Content.blocks.blockquote,
				Content.blocks.image,
				[Content.blocks.dynamicComponent, { components: require.resolve('./block-components') }],
			],
		},
		documentPackage: { type: Checkbox },
		packageName: { type: Select, options, isUnique: true },
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
		code: {
			type: Content,
			blocks: [
				DoOrDoNot,
				Example,
				Content.blocks.blockquote,
				Content.blocks.image,
				[Content.blocks.dynamicComponent, { components: require.resolve('./block-components') }],
			],
		},
	},
});

module.exports = { getComponentSchema };
