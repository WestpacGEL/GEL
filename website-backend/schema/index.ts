import { list, graphql, BaseFields } from '@keystone-6/core';
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
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config';
import * as mainComponentBlocks from '../admin/component-blocks/main';
import * as relatedInfoComponentBlocks from '../admin/component-blocks/related-info';
import { fieldType } from '@keystone-6/core/types';
import { Prisma } from '.prisma/client';

const cwd = process.cwd();

const packages: {
	path: string;
	unscopedName: string;
	name: string;
	version: string;
	description?: string;
	dependencies?: Record<string, unknown>;
	author?: string;
}[] = [];

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

const isNotNullOrUndefined = <T>(val: T): val is NonNullable<T> => val != null;

const packagesMap = new Map<string | null, typeof packages[number]>(
	packages.map((pkg) => [pkg.unscopedName, pkg])
);

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

const inlineMarks = {
	bold: true,
	italic: true,
	strikethrough: true,
	underline: true,
	code: true,
} as const;

const mainDocumentConfig = {
	formatting: {
		blockTypes: true,
		listTypes: true,
		inlineMarks,
	},
	componentBlocks: mainComponentBlocks.componentBlocks,
	ui: { views: require.resolve('../admin/component-blocks/main') },
	links: true,
	dividers: true,
} as const;

/* TODO test descriptions render */
const lists: Lists = {
	User: list({
		access: adminOnly,
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
		access: readOnly,
		fields: {
			name: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
			}),
			value: json({ ui: { views: require.resolve('../admin/navigation') } }),
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
				// 	field: 'image',
				// 	direction: 'ASC',
				// },
			},
		},
	}),
	DraftPage: list({
		access: readOnly,
		hooks: {
			resolveInput({ inputData: { publish, ...inputData } }) {
				return inputData;
			},
			async afterOperation({ context, item, inputData }) {
				if (item && inputData?.publish) {
					const relatedPages = await context.prisma.draftPage.findMany({
						where: { from_DraftPage_relatedPages: { some: { id: item.id } } },
						select: { publishedId: true },
					});
					const { id, publishedId, ...restItem } = item;

					const data = {
						...restItem,
						designOld: item.designOld ?? 'DbNull',
						design: item.design!,
						codeOld: item.codeOld ?? 'DbNull',
						code: item.code!,
						accessibilityOld: item.accessibilityOld ?? 'DbNull',
						accessibility: item.accessibility!,
						relatedInfoOld: item.relatedInfoOld ?? 'DbNull',
						relatedInfo: item.relatedInfo!,
						relatedPages: {
							connect: relatedPages
								.map((x) => x.publishedId)
								.filter(isNotNullOrUndefined)
								.map((id) => ({ id })),
						},
					};
					if (publishedId !== null) {
						// update the item
						await context.prisma.page.update({
							where: { id: publishedId },
							data,
						});
					} else {
						// create the item
						await context.prisma.page.create({
							data: { ...data, draft: { connect: { id } } },
						});
					}
				}
			},
		},
		fields: {
			...pageFields('DraftPage'),
			publish: (meta) =>
				fieldType({ kind: 'none' })({
					input: {
						create: {
							arg: graphql.arg({ type: graphql.Boolean }),
							// @ts-ignore
							resolve(val) {
								return val ?? false;
							},
						},
						update: {
							arg: graphql.arg({ type: graphql.Boolean }),
							// @ts-ignore
							resolve(val) {
								return val ?? false;
							},
						},
					},
					output: graphql.field({ type: graphql.Boolean, resolve: () => false }),
					views: require.resolve('../admin/publish-field'),
				}),
			published: relationship({ ref: 'Page.draft', db: { foreignKey: true } }),
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
		fields: {
			...pageFields('Page'),
			draft: relationship({ ref: 'DraftPage.published' }),
			revertChangesInDraftToPublished: (meta) =>
				fieldType({ kind: 'none' })({
					input: {
						create: {
							arg: graphql.arg({ type: graphql.Boolean }),
							// @ts-ignore
							resolve(val) {
								return val ?? false;
							},
						},
						update: {
							arg: graphql.arg({ type: graphql.Boolean }),
							// @ts-ignore
							resolve(val) {
								return val ?? false;
							},
						},
					},
					output: graphql.field({ type: graphql.Boolean, resolve: () => false }),
					views: require.resolve('../admin/publish-field'),
				}),
		},
	}),
};

function pageFields(listKey: string): BaseFields<Lists.Page.TypeInfo> {
	return {
		pageTitle: text({ validation: { isRequired: true } }),
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
		designOld: json(),
		design: document(mainDocumentConfig),
		hideAccessibilityTab: checkbox(),
		accessibilityOld: json(),
		accessibility: document(mainDocumentConfig),
		hideCodeTab: checkbox(),
		codeOld: json(),
		code: document(mainDocumentConfig),
		relatedPages: relationship({ ref: listKey, many: true }),
		relatedInfoOld: json(),
		relatedInfo: document({
			formatting: {
				inlineMarks,
			},
			componentBlocks: relatedInfoComponentBlocks.componentBlocks,
			ui: {
				views: require.resolve('../admin/component-blocks/related-info'),
			},
			links: true,
		}),
	};
}

export { lists };
