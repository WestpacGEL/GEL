module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'babel-plugin-codegen',
		'@babel/plugin-transform-runtime',
	],
	overrides: [
		{
			include: 'website/field-content',
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
							],
						},
					},
				],
			],
		},
	],
};
