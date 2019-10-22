module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontSTG"',
				files: {
					woff2: '../font/dragonbold-bold-webfont.woff2',
					woff: '../font/dragonbold-bold-webfont.woff',
				},
				weight: 400,
				style: 'normal',
			},
		],
		bodyFont: {
			weights: [400, 700],
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
		},
		brandFont: {
			weights: [400],
			fontFamily: '"brandFontSTG"',
		},
	},
};
