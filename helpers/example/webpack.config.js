const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const tmp = require('tmp');
const fs = require('fs');

function slugFromFilename(filename) {
	return filename.slice(3, -3);
}
function labelFromSlug(slug) {
	return slug
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

// TODO get package name from scripts arguments
const PACKAGE_NAME = 'grid';

function findExampleFiles(package) {
	const exampleFolder = path.resolve(`${__dirname}/../../packages/${package}/examples`);

	if (fs.existsSync(exampleFolder)) {
		const files = fs
			.readdirSync(exampleFolder)
			.filter(file => !file.startsWith('.') && !file.startsWith('_') && file.endsWith('.js'));

		return files.map(filename => {
			const slug = slugFromFilename(filename);
			const label = labelFromSlug(slug);

			return {
				filename,
				slug,
				label,
				relativePath: path.relative(__dirname, `${exampleFolder}/${filename}`),
				absolutePath: `${exampleFolder}/${filename}`,
				path: exampleFolder,
			};
		});

		return files;
	} else {
		console.error(`Package doesn't exist: ${exampleFolder}`);
	}
}

tmp.setGracefulCleanup();
const tmpObj = tmp.fileSync();

fs.writeSync(
	tmpObj.fd,
	`
	import app from '${__dirname}/index';

	const components = [
		${findExampleFiles(PACKAGE_NAME)
			.map(
				example => `
			{
				${Object.entries(example)
					.map(
						([key, value]) => `
					"${key}": ${JSON.stringify(value)}
				`
					)
					.join(',\n')},
				Module: require('${example.absolutePath}'),
			}
		`
			)
			.join(',\n')}
	];

	app("${labelFromSlug(PACKAGE_NAME)}", components);
`
);

process.on('exit', () => {
	tmpObj.removeCallback();
});

module.exports = () => ({
	entry: tmpObj.name,
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
					rootMode: 'upward',
				},
			},
		],
	},

	plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, './index.html') })],
	devServer: {
		// hot: true,
	},
});
