import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';
import { createAuth } from '@keystone-6/auth';
import { lists } from './schema';
import { PORT, DATABASE_URL, SESSION_MAX_AGE, SESSION_SECRET } from './config';

// Basic session and auth config
const session = statelessSessions({
	maxAge: SESSION_MAX_AGE,
	secret: SESSION_SECRET,
});

const { withAuth } = createAuth({
	listKey: 'User',
	identityField: 'email',
	secretField: 'password',
});

// Our root Keystone config
export default withAuth(
	config({
		server: { port: PORT, cors: true },
		db: {
			provider: 'postgresql',
			url: DATABASE_URL,
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
		ui: {
			isAccessAllowed: (context) => !!context.session?.data,
		},
		lists,
		session,
	})
);
