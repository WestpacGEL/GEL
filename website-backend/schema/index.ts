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


const packages = fs
	.readdirSync('../components')
	// ToDo: Maybe warn if folder could not load?
	.filter((item) => fs.existsSync(path.join(__dirname, `../components/${item}/package.json`)))
	.map((item) => {
		const pkg = require(path.join(__dirname, `../components/${item}/package.json`));
		return { ...pkg, path: item };
	});

const formatPackageData = (pkgData) => {
	return pkgData.map((pkg) => {
		const cleanName = pkg.name.split('/').reverse()[0];
		return { ...pkg, packageName: pkg.name, name: cleanName };
	});
};

/* TODO test descriptions render */
const lists = {
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
				isIndexed: 'unique'
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
			packageName: select({}),
			version: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve() {
						return 'Hello, world!';
					},
				}),
			}),
			description: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve() {
						return 'Hello, world!';
					},
				}),
			}),
			isOrphaned: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve() {
						return 'Hello, world!';
					},
				}),
			}),
			author: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve() {
						return 'Hello, world!';
					},
				}),
			}),
			requires: virtual({
				field: graphql.field({
					type: graphql.String,
					resolve() {
						return 'Hello, world!';
					},
				}),
			}),
			design: document(),
			hideAccessibilityTab: checkbox(),
			accessibility: document(),
			hideCodeTab: checkbox(),
			code: document(),
			relatedPages: relationship(),
			relatedInfo: document(),
		},
	}),
};

export { lists };
