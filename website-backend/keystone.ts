import { config } from '@keystone-6/core';
import type { KeystoneConfig, BaseKeystoneTypeInfo } from '@keystone-6/core/types';
import { statelessSessions } from '@keystone-6/core/session';
import { createAuth } from '@keystone-6/auth';
import { Context, TypeInfo } from '.keystone/types';
import { lists } from './schema';
import { PORT, DATABASE_URL, SESSION_MAX_AGE, SESSION_SECRET } from './config';
import { seedDatabase } from './seed';

// Basic session and auth config
const session = statelessSessions({
	maxAge: SESSION_MAX_AGE,
	secret: SESSION_SECRET,
});

const { withAuth } = createAuth({
	listKey: 'User',
	identityField: 'email',
	secretField: 'password',
	initFirstItem: { fields: ['email', 'password'] },
});

// use this config if you want postgres
const postgresDBConfig: KeystoneConfig<TypeInfo>['db'] = {
	provider: 'postgresql',
	url: DATABASE_URL,
	useMigrations: true,
};

// !!LOCAL ONLY!! - use this config if you want a throwaway db for local development
const sqliteDBConfig: KeystoneConfig<TypeInfo>['db'] = {
	provider: 'sqlite',
	url: 'file:./dev.db',
};

// Our root Keystone config
export default withAuth(
	config({
		server: { port: PORT, cors: true },
		// if there are schema changes - remember to run migrations in local once to generate migration files
		db: {
			...postgresDBConfig,
			async onConnect(context: Context) {
				if (process.env.NODE_ENV !== 'production' && process.argv.includes('--seed-database')) {
					await seedDatabase(context);
				}
			},
		},
		images: {
			upload: 'local',
			local: {
				storagePath: 'public/images',
				baseUrl: '/images',
			},
		},
		ui: {
			isAccessAllowed: (context: Context) => !!context.session?.data,
		},
		lists,
		session,
	}) as KeystoneConfig<BaseKeystoneTypeInfo>
);
