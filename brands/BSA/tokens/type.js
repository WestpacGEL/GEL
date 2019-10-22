const bodyFont =
	'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif';
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
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				2: {
					fontWeight: 700,
					fontSize: '3rem',
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				3: {
					fontWeight: 700,
					fontSize: '2.625rem',
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				4: {
					fontWeight: 700,
					fontSize: '2.25rem',
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				5: {
					fontWeight: 700,
					fontSize: '1.875rem',
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				6: {
					fontWeight: 700,
					fontSize: '1.5rem',
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				7: {
					fontWeight: 700,
					fontSize: '1.125rem',
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				8: {
					fontWeight: 700,
					fontSize: '1rem',
					lineHeight: 1.2,
					fontFamily: bodyFont,
				},
				9: {
					fontWeight: 700,
					fontSize: '0.875rem',
					lineHeight: 1.2,
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
