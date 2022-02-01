module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'babel-plugin-codegen',
		'@babel/plugin-transform-runtime',
		'macros',
	],
};
