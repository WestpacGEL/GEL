module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontWBC"',
				files: {
					woff2: '../font/7FF5B4E46E46717F5.woff2',
					woff: '../font/7FF5B4E46E46717F5.woff',
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
			fontFamily: '"brandFontWBC"',
		},
	},
};
