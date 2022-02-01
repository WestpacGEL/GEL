const withPreconstruct = require('@preconstruct/next');

const config = {
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});

		delete config.devtool;

		// if (!isServer) {
		// 	config.node = {
		// 		fs: 'empty',
		// 	};
		// }

		return config;
	},

	env: {
		APOLLO_CLIENT_GRAPHQL_URI: process.env.APOLLO_CLIENT_GRAPHQL_URI,
	},
};

// Disable parallel building in production
// Related: https://github.com/zeit/next.js/pull/9199, https://thinkmill.slack.com/archives/CCRK7QEQK/p1588126588313500
if (process.env.NODE_ENV === 'production') {
	console.log('Disabling parallel next build in production');
	config.experimental = { workerThreads: false, cpus: 1 };
}

module.exports = withPreconstruct(config);
