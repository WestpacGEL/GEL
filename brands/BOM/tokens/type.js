module.exports = {
	TYPE: {
		files: [
			{
				name: 'brown',
				files: {
					woff2: '../font/lineto-brown-pro-light.woff2',
					woff: '../font/lineto-brown-pro-light.woff',
				},
				weight: 300,
				style: 'normal',
			},
			{
				name: 'brown',
				files: {
					woff2: '../font/lineto-brown-pro-regular.woff2',
					woff: '../font/lineto-brown-pro-regular.woff',
				},
				weight: 400,
				style: 'normal',
			},
			{
				name: 'brown',
				files: {
					woff2: '../font/lineto-brown-pro-bold.woff2',
					woff: '../font/lineto-brown-pro-bold.woff',
				},
				weight: 700,
				style: 'normal',
			},
		],
		weights: [300, 400, 700],
		bodyFonts: {
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
		},
		brandFonts: {
			fontFamily: '"brown"',
		},
	},
};
