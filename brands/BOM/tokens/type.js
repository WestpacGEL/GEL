const systemFont =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontBOM"',
				files: {
					woff2: 'lineto-brown-pro-light.woff2',
					woff: 'lineto-brown-pro-light.woff',
				},
				weight: '300',
				style: 'normal',
			},
			{
				name: '"brandFontBOM"',
				files: {
					woff2: 'lineto-brown-pro-regular.woff2',
					woff: 'lineto-brown-pro-regular.woff',
				},
				weight: '400',
				style: 'normal',
			},
			{
				name: '"brandFontBOM"',
				files: {
					woff2: 'lineto-brown-pro-bold.woff2',
					woff: 'lineto-brown-pro-bold.woff',
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
			weights: ['300', '300', '300', '400', '400', '400', '700', '700', '700'],
			headingWeight: 400,
			fontFamily: `"brandFontBOM", ${systemFont}`,
		},
	},
};
