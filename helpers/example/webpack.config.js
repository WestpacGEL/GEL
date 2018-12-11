const webpack = require('webpack');
const path = require('path');

const examples = []; // required('./examples');

module.exports = {
	entry: ['./index.js', ...examples.map(e => e.path)],
	output: {
		path: path.resolve(__dirname, 'dist'), // string
		filename: '[name]-[hash].js',
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.EXAMPLES': JSON.stringify(examples),
		}),
	],

	//...
	devServer: {
		public: 'myapp.test:80',
	},
};
