const {
	slugFromFilename,
	labelFromSlug,
	findExampleFiles,
	findDemoFiles,
	makeCode,
} = require('./_utils.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const tmp = require('tmp');
const fs = require('fs');

const { PACKAGE_NAME } = process.env;
const { version } = require(path.normalize(
	`${__dirname}/../../components/${PACKAGE_NAME}/package.json`
));

/**
 * Prepare a dynamic temp file to include all components
 */
tmp.setGracefulCleanup();
const tmpObj = tmp.fileSync();
const code = makeCode(
	[...findExampleFiles(PACKAGE_NAME, PACKAGE_NAME), ...findDemoFiles(PACKAGE_NAME, PACKAGE_NAME)],
	'start.js',
	PACKAGE_NAME,
	version
);
fs.writeSync(tmpObj.fd, code);

process.on('exit', () => {
	tmpObj.removeCallback();
});

/**
 * Webpack config
 */
module.exports = () => ({
	entry: tmpObj.name,
	context: path.normalize(`${__dirname}/../../components/${PACKAGE_NAME}/`),
	mode: process.env.NODE_ENV || 'production',

	output: {
		filename: '[name]-[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					rootMode: 'upward',
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Westpac GEL 3 - Local development',
			mode: 'start',
			template: path.normalize(`${__dirname}/index.html`),
		}),
		...(fs.existsSync(
			path.normalize(`${__dirname}/../../components/${PACKAGE_NAME}/examples/assets/`)
		)
			? [
					new CopyPlugin({
						patterns: [
							{
								from: '*',
								to: `${PACKAGE_NAME}/assets/`,
								context: path.normalize(
									`${__dirname}/../../components/${PACKAGE_NAME}/examples/assets/`
								),
							},
						],
					}),
			  ]
			: []),
	],
	devServer: {
		historyApiFallback: true,
		port: 8080,
	},
});
