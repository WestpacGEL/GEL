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
  virtual,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config';
import * as mainComponentBlocks from '../admin/component-blocks/main';
import * as relatedInfoComponentBlocks from '../admin/component-blocks/related-info';
import { fieldType } from '@keystone-6/core/types';
import { Prisma } from '.prisma/client';
import { formatURL, pageFields } from './shared';

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
        //   field: 'image',
        //   direction: 'ASC',
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
    ui: {
      labelField: 'pageTitle',
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
    ui: {
      labelField: 'pageTitle',
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
  })
};

export { lists };
