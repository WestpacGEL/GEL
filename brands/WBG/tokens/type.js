const systemFont =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontWBG"',
				files: {
					woff2: 'montserrat-v14-latin-300.woff2',
					woff: 'montserrat-v14-latin-300.woff',
				},
				weight: '300',
				style: 'normal',
			},
			{
				name: '"brandFontWBG"',
				files: {
					woff2: 'montserrat-v14-latin-regular.woff2',
					woff: 'montserrat-v14-latin-regular.woff',
				},
				weight: '400',
				style: 'normal',
			},
			{
				name: '"brandFontWBG"',
				files: {
					woff2: 'montserrat-v14-latin-700.woff2',
					woff: 'montserrat-v14-latin-700.woff',
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
			fontFamily: `"brandFontWBG", ${systemFont}`,
		},
	},
};
