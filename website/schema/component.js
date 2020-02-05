const { DoOrDoNot } = require('./blocks/do-or-do-not');
const { Example } = require('./blocks/code-examples');
const { Select, Virtual } = require('@keystonejs/fields');
const { Content } = require('@keystonejs/field-content');
const { resolveComponent } = require('../extend-schema');

const getResolver = key => async args => {
	// making some big assumptions here about the path format
	const component = await resolveComponent(args.packageName.replace('_', '-'));
	if (component === null) {
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
		packageName: { type: Select, options, isUnique: true },
		isOrphan: {
			type: Virtual,
			resolver: args => (getResolver('packageName')(args) ? false : true),
		},
		name: { type: Virtual, resolver: getResolver('name') },
		version: { type: Virtual, resolver: getResolver('version') },
		description: { type: Virtual, resolver: getResolver('description') },
		author: { type: Virtual, resolver: getResolver('author') },
		doc: {
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
