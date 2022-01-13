/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
// import { withAuth, session } from "./auth";
// import { insertSeedData } from "./seed-data";

export default withAuth(
	config({
		server: { port: 3001, cors: true },
		db: {
			provider: 'sqlite',
			url: 'file:./keystone.db',
			// async onConnect(context) {
			// 	if (process.argv.includes('--seed-data')) {
			// 		await insertSeedData(context);
			// 	}
			// },
		},
		images: {
			upload: 'local',
			local: {
				storagePath: 'public/images',
				baseUrl: '/images',
			},
		},
		// This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
		ui: {
			// For our starter, we check that someone has session data before letting them see the Admin UI.
			isAccessAllowed: (context) => !!context.session?.data,
		},
		lists,
		session,
	})
);
