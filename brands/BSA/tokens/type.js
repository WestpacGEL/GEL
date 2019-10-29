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
				weight: '400',
				style: 'normal',
			},
		],
		bodyFont: {
			weights: ['400', '700'],
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
		},
		brandFont: {
			weights: ['300', '400'],
			fontFamily: '"brandFontBSA"',
		},
	},
};
