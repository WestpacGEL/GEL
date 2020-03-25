const withPreconstruct = require('@preconstruct/next');

const config = {
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});

		delete config.devtool;

		if (!isServer) {
			config.node = {
				fs: 'empty',
			};
		}

		return config;
	},

	env: {
		APOLLO_CLIENT_GRAPHQL_URI: process.env.APOLLO_CLIENT_GRAPHQL_URI,
	}
};
module.exports = withPreconstruct(config);
