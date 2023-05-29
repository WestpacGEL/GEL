const babelLoaderExcludeNodeModulesExcept = require('babel-loader-exclude-node-modules-except');
const { slugFromFilename, labelFromSlug, findExampleFiles, makeCode } = require('./_utils.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const tmp = require('tmp');
const fs = require('fs');

/**
 * Find all components
 *
 * @return {array} - An array of objects for each component and each example inside each component
 */
const findComponents = () => {
	let components = [];

	fs.readdirSync(path.normalize(`${__dirname}/../../components/`))
		.filter((file) => !file.startsWith('.'))
		.map((component) => {
			const slug = slugFromFilename(component);

			components.push({
				label: labelFromSlug(component),
				slug,
				filename: component,
				landing: true,
			});
			components = [...components, ...findExampleFiles(component, slug)];
		});

	return components;
};

const components = findComponents();

/**
 * Prepare a dynamic temp file to include all components
 */
tmp.setGracefulCleanup();
const tmpObj = tmp.fileSync();
const code = makeCode(components, 'docs.js');
fs.writeSync(tmpObj.fd, code);

process.on('exit', () => {
	tmpObj.removeCallback();
});

/**
 * Webpack config
 */
module.exports = () => ({
	entry: tmpObj.name,
	context: path.normalize(`${__dirname}/../../components/`),
	mode: 'production', // process.env.NODE_ENV,
	devtool: false,

	output: {
		filename: '[name]-[hash].js',
		path: path.resolve(__dirname, '../../docs'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	target: ['web', 'es5'],
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},

	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: babelLoaderExcludeNodeModulesExcept([
					'react-spring',
					'react-use-measure',
					'@react-spring/*',
				]),
				loader: 'babel-loader',
				options: {
					rootMode: 'upward',
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Westpac GEL 3',
			mode: 'docs',
			template: path.normalize(`${__dirname}/index.html`),
		}),
		new CopyPlugin({
			patterns: components
				.filter(
					(component) =>
						component.landing &&
						fs.existsSync(
							path.normalize(`${__dirname}/../../components/${component.slug}/examples/assets/`)
						)
				)
				.map((component) => ({
					from: '*',
					to: `${component.slug}/assets/`,
					context: path.normalize(
						`${__dirname}/../../components/${component.slug}/examples/assets/`
					),
				})),
		}),
	],
	devServer: {
		historyApiFallback: true,
		port: 8080,
	},
});
