require('./loadenv.js');

const express = require('express');
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { KnexAdapter } = require('@keystonejs/adapter-knex');
const { resolveComponents } = require('./extend-schema');
const { getComponentSchema } = require('./schema/component');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const { userSchema } = require('./schema/user');
const { imageSchema } = require('./schema/image');
const { settingSchema } = require('./schema/setting');
const { categorySchema } = require('./schema/category');

const keystone = new Keystone({
	name: 'GEL3 Website',
	adapter: new KnexAdapter({
		dropDatabase: process.env.NODE_ENV === 'development' && process.env.DATABASE_RECREATE_TABLES,
		knexOptions: {
			client: 'pg',
			connection: process.env.DATABASE_URL,
		},
	}),
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

const authStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: 'User',
	config: {
		identityField: 'email',
		secretField: 'password',
	},
});

const apps = [
	new GraphQLApp(),
	new AdminUIApp({
		adminPath: '/admin',
		authStrategy,
		hooks: require.resolve('./admin'),
	}),
	new NextApp({ dir: 'src' }),
];

module.exports = {
	keystone,
	apps,
};
