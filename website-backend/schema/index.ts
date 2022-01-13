import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
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
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

/* TODO test descriptions render */
const lists = {
	User: list({
		fields: {
			email: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
				isFilterable: true,
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
			name: text(),
			value: text(),
		},
	}),
	Image: list({
		fields: {
			image: cloudinaryImage(),
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
			pageTitle: text(),
			// TODO needs a hook
			url: text(),
			packageName: select(),
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
