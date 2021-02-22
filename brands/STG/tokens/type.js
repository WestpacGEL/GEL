const systemFont =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontSTG"',
				files: {
					woff2: 'dragonbold-bold-webfont.woff2',
					woff: 'dragonbold-bold-webfont.woff',
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
			fontFamily: `"brandFontSTG", ${systemFont}`,
		},
	},
};
