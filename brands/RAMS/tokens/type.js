const systemFont =
	'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontRAMS"',
				files: {
					woff2: 'source-sans-pro-v14-latin-regular.woff2',
					woff: 'source-sans-pro-v14-latin-regular.woff',
				},
				weight: '400',
				style: 'normal',
			},
			{
				name: '"brandFontRAMS"',
				files: {
					woff2: 'source-sans-pro-v14-latin-600.woff2',
					woff: 'source-sans-pro-v14-latin-600.woff',
				},
				weight: '600',
				style: 'normal',
			},
			{
				name: '"brandFontRAMS"',
				files: {
					woff2: 'source-sans-pro-v14-latin-700.woff2',
					woff: 'source-sans-pro-v14-latin-700.woff',
				},
				weight: '700',
				style: 'normal',
			},
		],
		bodyFont: {
			weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
			headingWeight: 700,
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
		},
		brandFont: {
			weights: ['400', '400', '400', '400', '400', '600', '700', '700', '700'],
			headingWeight: 600,
			fontFamily: `"brandFontRAMS", ${systemFont}`,
		},
	},
};
