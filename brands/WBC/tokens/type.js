const systemFont =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontWBC"',
				files: {
					woff2: 'Westpac-Bold-v2.007.woff2',
					woff: 'Westpac-Bold-v2.007.woff',
				},
				weight: '400',
				style: 'normal',
			},
		],
		bodyFont: {
			weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
			headingWeight: 700,
			fontFamily: systemFont,
		},
		brandFont: {
			weights: ['400', '400', '400', '400', '400', '400', '400', '400', '400'],
			headingWeight: 400,
			fontFamily: `"brandFontWBC", ${systemFont}`,
		},
	},
};
