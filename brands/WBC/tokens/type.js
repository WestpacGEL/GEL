const systemFont =
	'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontWBC"',
				files: {
					woff2: 'Westpac-Bold.woff2',
					woff: 'Westpac-Bold.woff',
				},
				weight: '400',
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
			weights: ['400', '400', '400', '400', '400', '400', '400', '400', '400'],
			headingWeight: 400,
			fontFamily: `"brandFontWBC", ${systemFont}`,
		},
	},
};
