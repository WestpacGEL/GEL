const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

const packageName = 'grid';
// const exampleFolder = path.normalize(`${__dirname}/../../packages/${process.argv[2]}/examples/`);
function findExampleFiles (package) {
	const exampleFolder = path.resolve(`${__dirname}/../../packages/${package}/examples`);
	if (fs.existsSync(exampleFolder)) {
		const files = fs
			.readdirSync(exampleFolder)
			.filter(file => !file.startsWith('.') && !file.startsWith('_') && file.endsWith('.js'));

		console.log(files);

		return files.map(filename => ({
			filename,
			relativePath: path.relative(__dirname, `${exampleFolder}/${filename}`),
			absolutePath: `${exampleFolder}/${filename}`,
			path: exampleFolder,
		}));

		return files;
	} else {
		console.error(`Package doesn't exist: ${exampleFolder}`);
	}
}

const examples = findExampleFiles(packageName);

module.exports = () => ({
	entry: [
		path.resolve(__dirname, './index.js'),
		...examples.map(e => e.absolutePath),
	],
	mode: 'development',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[hash].js',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					rootMode: "upward",
				},
			},
		],
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.EXAMPLES': JSON.stringify(examples),
			'process.env.PACKAGE_NAME': JSON.stringify(packageName),
		}),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, './index.html') }),
	],

	//...
	devServer: {
		// hot: true,
	},
});
