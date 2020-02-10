// require('dotenv').config();
const express = require('express');
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { resolveComponents } = require('./extend-schema');
const { getComponentSchema } = require('./schema/component');
const { userSchema } = require('./schema/user');

const keystone = new Keystone({
	name: 'GEL3 Website',
	adapter: new MongooseAdapter(),
	dropDatabase: true,
});

const apps = [
	new GraphQLApp(),
	new AdminUIApp({
		adminPath: '/admin',
		hooks: require.resolve('./admin'),
	}),
	new NextApp({ dir: 'site' }),
];

const options = resolveComponents();

keystone.createList(
	'Page',
	getComponentSchema(options.map(pkg => ({ value: pkg.name.replace('-', '_'), label: pkg.name })))
);
keystone.createList('User', userSchema);

module.exports = {
	keystone,
	apps,
};

const prepareKeystone = async () => {
	keystone
		.prepare({ apps, dev: process.env.NODE_ENV !== 'production' })
		.then(async ({ middlewares }) => {
			await keystone.connect();
			const app = express();
			app.use(middlewares).listen(3000);
		});
};

prepareKeystone();
