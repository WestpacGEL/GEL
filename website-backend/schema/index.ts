import { list, graphql, BaseFields } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { Lists } from '.keystone/types';
import {
	text,
	password,
	select,
	checkbox,
	relationship,
	json,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config';
import * as mainComponentBlocks from '../admin/component-blocks/main';
import * as relatedInfoComponentBlocks from '../admin/component-blocks/related-info';
import { componentBlocks } from '../admin/component-blocks';

import { fieldType } from '@keystone-6/core/types';
import { Prisma } from '.prisma/client';
import { defaultDocumentConfiguration, fauxCheckbox, formatURL, pageFields } from './shared';

const isNotNullOrUndefined = <T>(val: T): val is NonNullable<T> => val != null;
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
		access: adminOnly,
		fields: {
			name: text({
				validation: { isRequired: true }
			}),
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
		hooks: {
			resolveInput({ inputData: { revertChangesInDraftToPublished, ...inputData } }) {
				return inputData;
			},
			async afterOperation({ context, item, inputData }) {
				if (item && inputData?.revertChangesInDraftToPublished) {
					const relatedPages = await context.prisma.page.findMany({
						where: { from_Page_relatedPages: { some: { id: item.id } } },
						select: { draft: { select: { id: true } } },
					});
					const { id, ...restItem } = item;
					const relatedDraftPages = relatedPages
						.map((x) => x.draft?.id)
						.filter(isNotNullOrUndefined)
						.map((publishedId) => ({ publishedId }));
					const data: Prisma.DraftPageCreateInput = {
						...restItem,
						designOld: item.designOld ?? 'DbNull',
						design: item.design!,
						codeOld: item.codeOld ?? 'DbNull',
						code: item.code!,
						accessibilityOld: item.accessibilityOld ?? 'DbNull',
						accessibility: item.accessibility!,
						relatedInfoOld: item.relatedInfoOld ?? 'DbNull',
						relatedInfo: item.relatedInfo!,
					};
					await context.prisma.draftPage.upsert({
						where: {
							publishedId: id,
						},
						create: {
							...data,
							relatedPages: {
								connect: relatedDraftPages,
							},
							published: { connect: { id } },
						},
						update: {
							...data,
							relatedPages: {
								set: relatedDraftPages,
							},
						},
					});
				}
			},
		},
		ui: {
			labelField: 'pageTitle',
		},
		fields: {
			...pageFields('Page'),
			draft: relationship({ ref: 'DraftPage.published' }),
			revertChangesInDraftToPublished: fauxCheckbox(),
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
			url: text({
				validation: { isRequired: true },
				hooks: {
					resolveInput: ({ item, resolvedData }) => {
						if (resolvedData.url) {
							return formatURL(resolvedData.url)
						}
						return item?.url || ''
					}
				}
			}),

			content: document({
				...defaultDocumentConfiguration,
				componentBlocks,
				ui: { views: require.resolve('../admin/article-things') },
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
		}
	})
};

export { lists };
