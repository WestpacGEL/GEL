const bodyFont =
	'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif';
const brandFont = 'Georgia, "Times New Roman", Times, serif';

module.exports = {
	TYPE: {
		files: [],
		bodyFont: {
			weights: [400, 700],
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
		},
		brandFont: {
			weights: [400, 700],
			fontFamily: 'Georgia, "Times New Roman", Times, serif',
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
