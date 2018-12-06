const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		compress: true,
		contentBase: path.join(__dirname, './dist'),
		hot: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement',
			template: path.join(__dirname, './index.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
