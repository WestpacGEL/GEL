const bodyFont = '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif';
const brandFont = '"brandFontBSA"';

module.exports = {
	TYPE: {
		files: [
			{
				name: '"brandFontBSA"',
				files: {
					woff2: '../font/Aller_Lt.woff2',
					woff: '../font/Aller_Lt.woff',
				},
				weight: 300,
				style: 'normal',
			},
			{
				name: '"brandFontBSA"',
				files: {
					woff2: '../font/Aller_Bd.woff2',
					woff: '../font/Aller_Bd.woff',
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
			weights: [300, 400],
			fontFamily: '"brandFontBSA"',
		},
		packs: {
			headline: {
				1: {
					fontWeight: 700,
					fontSize: '3.375rem',
					lineHeight: 1.4,
					fontFamily: bodyFont,
				},
				2: {
					fontWeight: 700,
					fontSize: '3.375rem',
					lineHeight: 1.4,
					fontFamily: bodyFont,
				},
			},
			lead: {
				marginBottom: '1.3125rem',
				fontSize: ['1rem', '1.125rem'],
				fontWeight: 300,
				lineHeight: 1.4,
			},
		},
	},
};
