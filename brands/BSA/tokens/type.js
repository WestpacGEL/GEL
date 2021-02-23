const systemFont =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontBSA"',
				files: {
					woff2: 'Aller_Lt.woff2',
					woff: 'Aller_Lt.woff',
				},
				weight: '300',
				style: 'normal',
			},
			{
				name: '"brandFontBSA"',
				files: {
					woff2: 'Aller_Bd.woff2',
					woff: 'Aller_Bd.woff',
				},
				weight: '700',
				style: 'normal',
			},
		],
		bodyFont: {
			weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
			headingWeight: 700,
			fontFamily: systemFont,
		},
		brandFont: {
			weights: ['300', '300', '300', '300', '300', '300', '700', '700', '700'],
			headingWeight: 700,
			fontFamily: `"brandFontBSA", ${systemFont}`,
		},
	},
};
