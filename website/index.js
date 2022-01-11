require('./loadenv.js');

const express = require('express');
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { KnexAdapter } = require('@keystonejs/adapter-knex');
const { resolveComponents } = require('./extend-schema');
const { getComponentSchema } = require('./schema/component');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const { userSchema } = require('./schema/user');
const { imageSchema } = require('./schema/image');
const { settingSchema } = require('./schema/setting');

const keystone = new Keystone({
	name: 'GEL3 Website',
	adapter: new KnexAdapter({
		dropDatabase: process.env.NODE_ENV === 'development' && process.env.DATABASE_RECREATE_TABLES,
		knexOptions: {
			client: 'postgres',
			connection: process.env.DATABASE_URL,
		},
	}),
	// Add COOKIE_SECRET to your .env or sessions will be reset when the app restarts
	cookieSecret:
		process.env.COOKIE_SECRET ||
		[...Array(30)].map((i) => ((Math.random() * 36) | 0).toString(36)).join(''),
});

const options = resolveComponents();

keystone.createList('Page', {
	adminDoc:
		'This is the list of all pages for the site. Make sure to include the pages into your navigation (under settings) for them to show up on the live site.',
	...getComponentSchema(
		options.map((pkg) => ({ value: pkg.name.replace('-', '_'), label: pkg.name }))
	),
	adminConfig: {
		defaultColumns: 'packageName,url',
		defaultSort: 'email',
	},
	labelField: 'pageTitle',
});
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
];

module.exports = {
	keystone,
	apps,
	// Tell Express to trust the proxy when it says the connection is secure
	// Otherwise Express won't send `Set-Cookie` headers when secure cookies are enabled
	// See.. https://gist.github.com/molomby/6fa22c165e0025f0f83d55195f3c6e37
	configureExpress: (app) => {
		app.set('trust proxy', true);
	},
};
