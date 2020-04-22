require('./loadenv.js');

const nodeEnv = process.env.NODE_ENV || 'development';
const dbConnection = process.env.DATABASE_URL || 'postgres://localhost/gel3_website';

const settings = {
	[nodeEnv]: {
		client: 'postgresql',
		connection: dbConnection,
		pool: { min: 2, max: 10 },
		migrations: {
			tableName: 'knex_migrations',
			stub: 'stub-migration.js',
		},
	},
};
module.exports = settings;
