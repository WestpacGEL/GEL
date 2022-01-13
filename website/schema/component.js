const { Select, Virtual, Checkbox, Text, Relationship, Slug } = require('@keystonejs/fields');
const { Content } = require('@westpac/field-content');
const { DynamicComponentsBlock } = require('../utils/dynamic-component-block');
const { resolveComponent } = require('../extend-schema');
const DYNAMIC_BLOCKS_DIR = require.resolve('../dynamic-blocks');
const slugify = require('slugify');
slugify.extend({ _: '-' });

const BLOCKS_CONFIG = [
	Content.blocks.heading,
	Content.blocks.orderedList,
	Content.blocks.unorderedList,
	Content.blocks.blockquote,
	Content.blocks.link,
	Content.blocks.section,
	[DynamicComponentsBlock, { components: DYNAMIC_BLOCKS_DIR }],
];

import fs from 'fs';
import path from 'path';

const packages = fs
	.readdirSync('../components')
	// ToDo: Maybe warn if folder could not load?
	.filter((item) => fs.existsSync(path.join(__dirname, `../components/${item}/package.json`)))
	.map((item) => {
		const pkg = JSON.parse(
			fs.readFileSync(path.join(__dirname, `../components/${item}/package.json`), 'utf8')
		);
		return { ...pkg, path: item };
	});

const packagesMap = new Map(packages.map((x) => [x.name, x]));

const getResolver = (key) => async (args) => {
	if (!args.packageName) {
		return null;
	}
	// making some big assumptions here about the path format
	const component = await resolveComponent(slugify(args.packageName));
	if (component === null || typeof component === 'undefined') {
		return null;
	}
	if (key === 'packageName') {
		return component.name;
	}
	return component[key];
};

const resolveRequiredPackages = async (args) => {
	if (!args.packageName) {
		return null;
	}
	// making some big assumptions here about the path format
	const component = await resolveComponent(slugify(args.packageName));
	if (component === null || typeof component === 'undefined' || !component.dependencies) {
		return null;
	}
	return (
		Object.keys(component.dependencies)
			.filter((key) => key.includes('@westpac/'))
			.join(', ') || ''
	);
};

const getComponentSchema = (options) => ({
	labelResolver: (x) => x.pageTitle || x.packageName,
	fields: {
		pageTitle: { type: Text },
		url: {
			type: Slug,
			generate: ({ resolvedData, existingItem }) => {
				if (existingItem && existingItem.url && existingItem.url !== '') {
					return existingItem.url;
				}
				if (resolvedData.packageName) {
					return `/components/${slugify(resolvedData.packageName).toLowerCase()}`;
				}
				if (resolvedData.pageTitle) {
					return `/components/${slugify(resolvedData.pageTitle).toLowerCase()}`;
				}
				return '';
			},
			hooks: {
				resolveInput: ({ resolvedData, ...rest }) => {
					if (resolvedData.url) {
						let result = resolvedData.url
							.split('/')
							.map((d) => slugify(d))
							.join('/');
						if (result.charAt(0) !== '/') {
							result = `/${result}`;
						}
						return result;
					}
					return originalInput.url;
				},
			},
		},
		packageName: { type: Select, options },
		version: { type: Virtual, resolver: getResolver('version') },
		description: { type: Virtual, resolver: getResolver('description') },
		isOrphaned: {
			adminDoc: 'This page relates to a package that has been removed.',
			type: Virtual,
			resolver: async (args) => {
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
		relatedPages: {
			type: Relationship,
			ref: 'Page',
			many: true,
		},
		relatedInfo: { type: Content, blocks: [Content.blocks.link, Content.blocks.heading] },
	},
});

module.exports = { getComponentSchema };
