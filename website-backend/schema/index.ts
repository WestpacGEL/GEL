import { list, graphql } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { Lists } from '.keystone/types';
import {
	text,
	password,
	timestamp,
	integer,
	select,
	image,
	checkbox,
	relationship,
	json,
	virtual,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
	CLOUDINARY_API_FOLDER,
} from '../config';

const cwd = process.cwd();

const packages = [];

for (const item of fs.readdirSync(path.join(cwd, '../components'))) {
	let content;
	try {
		content = fs.readFileSync(path.join(cwd, `../components/${item}/package.json`), 'utf-8');
	} catch (err: any) {
		if (err.code === 'ENOENT') {
			continue;
		}
		throw err;
	}
	const pkg = JSON.parse(content);
	packages.push({ ...pkg, path: item, unscopedName: pkg.name.split('/').reverse()[0] });
}

const packagesMap = new Map(packages.map((pkg) => [pkg.unscopedName, pkg]));

/* TODO test descriptions render */
const lists: Lists = {
	User: list({
		fields: {
			email: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
			}),
			password: password({ validation: { isRequired: true } }),
		},
		ui: {
			description:
				'This is a list of users who can log into the AdminUI of Keystone and change things',
			labelField: 'email',
			listView: {
				initialColumns: ['email'],
				initialSort: {
					field: 'email',
					direction: 'ASC',
				},
			},
		},
	}),
	Setting: list({
		fields: {
			name: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
			}),
			value: json(),
		},
	}),
	Image: list({
		fields: {
			image: cloudinaryImage({
				cloudinary: {
					cloudName: CLOUDINARY_CLOUD_NAME,
					apiKey: CLOUDINARY_API_KEY,
					apiSecret: CLOUDINARY_API_SECRET,
					folder: CLOUDINARY_API_FOLDER,
				},
			}),
			caption: text(),
		},
		ui: {
			description: 'See below all images uploaded and hosted for you.',
			listView: {
				initialColumns: ['image', 'caption'],
				// initialSort: {
				// 	field: 'image',
				// 	direction: 'ASC',
				// },
			},
		},
	}),
	Page: list({
		fields: {
			pageTitle: text({ validation: { isRequired: true } }),
			// TODO needs a hook
			url: text({
				hooks: {
					resolveInput: ({ item, resolvedData }) => {
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
						if (item && item?.url !== '') {
							return item.url;
						}
						if (resolvedData.packageName) {
							return `/components/${slugify(resolvedData.packageName).toLowerCase()}`;
						}
						if (resolvedData.pageTitle) {
							return `/components/${slugify(resolvedData.pageTitle).toLowerCase()}`;
						}

						return undefined;
					},
				},
			}),
			packageName: select({
				options: packages.map((pkg) => ({
					value: pkg.unscopedName.replace('-', '_'),
					label: pkg.unscopedName,
				})),
			}),
			version: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve: (item) => packagesMap.get(item.packageName)?.version,
				}),
			}),
			description: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve: (item) => packagesMap.get(item.packageName)?.description,
				}),
			}),
			isOrphaned: virtual({
				field: graphql.field({
					type: graphql.Boolean,
					resolve(item) {
						if (!item.packageName) {
							return false;
						}
						return !packagesMap.has(item.packageName);
					},
				}),
			}),
			author: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve: (item) => packagesMap.get(item.packageName)?.author,
				}),
			}),
			requires: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve(item) {
						if (!item.packageName) {
							return null;
						}
						const component = packagesMap.get(item.packageName);
						if (!component?.dependencies) {
							return null;
						}
						return (
							Object.keys(component.dependencies)
								.filter((key) => key.includes('@westpac/'))
								.join(', ') || ''
						);
					},
				}),
			}),
			design: document(),
			hideAccessibilityTab: checkbox(),
			accessibility: document(),
			hideCodeTab: checkbox(),
			code: document(),
			relatedPages: relationship({ ref: 'Page', many: true }),
			relatedInfo: document(),
		},
	}),
};

export { lists };
