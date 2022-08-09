import { list, graphql, BaseFields } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { Lists } from '.keystone/types';
import { text, password, select, checkbox, relationship, json } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config';
import { componentBlocks } from '../admin/article-component-blocks';

import { defaultDocumentConfiguration, formatURL, pageFields } from './shared';

const isSignedIn = ({ session }: { session: any }) => !!session;

const readOnly = {
	operation: {
		create: isSignedIn,
		delete: isSignedIn,
		update: isSignedIn,
	},
};

const adminOnly = {
	operation: {
		create: isSignedIn,
		delete: isSignedIn,
		query: isSignedIn,
		update: isSignedIn,
	},
};

const lists: Lists = {
	User: list({
		// TODO: prevent querying all users unless signedin
		// name and email are readonly, password is adminonly
		// changing from adminOnly to readOnly because we need this info in article.author
		access: {
			operation: {
				// read is unrestricted
				create: isSignedIn,
				delete: isSignedIn,
				update: isSignedIn,
			},
		},
		fields: {
			name: text({
				validation: { isRequired: true },
			}),
			email: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
			}),
			password: password({
				validation: { isRequired: true },
				// password read is restricted
				access: {
					read: isSignedIn,
					create: isSignedIn,
					update: isSignedIn,
				},
			}),
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
		access: readOnly,
		fields: {
			name: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
			}),
			value: (meta) => ({ ...json()(meta), views: require.resolve('../admin/navigation') }),
		},
	}),
	Image: list({
		access: adminOnly,
		fields: {
			image: cloudinaryImage({
				cloudinary: {
					cloudName: CLOUDINARY_CLOUD_NAME,
					apiKey: CLOUDINARY_API_KEY,
					apiSecret: CLOUDINARY_API_SECRET,
				},
			}),
			caption: text(),
		},
		ui: {
			description: 'See below all images uploaded and hosted for you.',
			listView: {
				initialColumns: ['image', 'caption'],
				// initialSort: {
				//	 field: 'image',
				//	 direction: 'ASC',
				// },
			},
		},
	}),
	Page: list({
		access: readOnly,
		ui: {
			labelField: 'pageTitle',
		},
		fields: {
			...pageFields('Page'),
		},
	}),
	Article: list({
		access: readOnly,
		ui: {
			labelField: 'pageTitle',
		},
		fields: {
			pageTitle: text({ validation: { isRequired: true } }),
			pageImage: cloudinaryImage({
				cloudinary: {
					cloudName: CLOUDINARY_CLOUD_NAME,
					apiKey: CLOUDINARY_API_KEY,
					apiSecret: CLOUDINARY_API_SECRET,
				},
			}),
			author: relationship({ ref: 'User' }),
			// TODO: Add new unique slug field
			// 1. hide slug in adminui create - only show in adminui edit
			// 2. slug should be set automatically based on title using slugify - using list level resolveInput hook
			// slug: text({
			// 	validation: { isRequired: true },
			// 	isIndexed: 'unique',
			// 	isFilterable: true,
			// }),

			// make url a virtual field that prepends forward slash to slug - Eg. i-am-a-slug => /i-am-a-slug]
			url: text({
				validation: { isRequired: true },
				hooks: {
					resolveInput: ({ item, resolvedData }) => {
						if (resolvedData.url) {
							return formatURL(resolvedData.url);
						}
						return item?.url || '';
					},
				},
			}),

			content: document({
				...defaultDocumentConfiguration,
				componentBlocks,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
				ui: { views: require.resolve('../admin/article-component-blocks') },
			}),

			cardTitle: text({ validation: { isRequired: true } }),
			cardDescription: text({ validation: { isRequired: true } }),
			cardDescriptionSecondary: text(),
			cardImage: cloudinaryImage({
				cloudinary: {
					cloudName: CLOUDINARY_CLOUD_NAME,
					apiKey: CLOUDINARY_API_KEY,
					apiSecret: CLOUDINARY_API_SECRET,
				},
			}),
		},
	}),
};

export { lists };
