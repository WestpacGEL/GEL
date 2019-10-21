module.exports = {
	TYPE: {
		files: [
			{
				name: 'aller',
				files: {
					woff2: '../font/Aller_Lt.woff2',
					woff: '../font/Aller_Lt.woff',
				},
				weight: 300,
				style: 'normal',
			},
			{
				name: 'aller',
				files: {
					woff2: '../font/Aller_Bd.woff2',
					woff: '../font/Aller_Bd.woff',
				},
				weight: 400,
				style: 'normal',
			},
		],
		weights: [300, 400],
		bodyFont: {
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
		},
		brandFont: {
			fontFamily: '"aller"',
		},
	},
};
