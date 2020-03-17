require('dotenv').config();
const express = require('express');
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { KnexAdapter } = require('@keystonejs/adapter-knex');
const { resolveComponents } = require('./extend-schema');
const { getComponentSchema } = require('./schema/component');
const { userSchema } = require('./schema/user');
const { imageSchema } = require('./schema/image');
const { articleShema } = require('./schema/article');
const { settingSchema } = require('./schema/setting');
const { categorySchema } = require('./schema/category');

const keystone = new Keystone({
	name: 'GEL3 Website',
	adapter: new KnexAdapter(),
});

const options = resolveComponents();

keystone.createList(
	'Page',
	getComponentSchema(options.map(pkg => ({ value: pkg.name.replace('-', '_'), label: pkg.name })))
);
keystone.createList('Category', categorySchema);
keystone.createList('User', userSchema);
keystone.createList('Setting', settingSchema);
keystone.createList('Image', imageSchema);

const apps = [
	new GraphQLApp(),
	new AdminUIApp({
		adminPath: '/admin',
		hooks: require.resolve('./admin'),
	}),
	new NextApp({ dir: 'src' }),
];

module.exports = {
	keystone,
	apps,
};
