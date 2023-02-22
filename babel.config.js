module.exports = {
	presets: [
		'@babel/preset-env',
		['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
		'@babel/preset-typescript',
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'babel-plugin-codegen',
		'@babel/plugin-transform-runtime',
		'macros',
	],
};
