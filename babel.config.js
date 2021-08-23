module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'babel-plugin-codegen',
		'@babel/plugin-transform-runtime',
		'macros',
	],

	overrides: [
		{
			test: (x) => x && x.includes('field-content'),
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							node: 10,
							browsers: [
								'last 2 chrome versions',
								'last 2 firefox versions',
								'last 2 safari versions',
								'last 2 edge versions',
								'ie 11',
							],
						},
					},
				],
			],
		},
	],
};
