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

	// Prod runs in a subdir
	assetPrefix: (process.env.NEXT_ASSET_PREFIX || ''),
};
module.exports = withPreconstruct(config);
