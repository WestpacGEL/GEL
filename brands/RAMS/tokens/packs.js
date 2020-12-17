const { COLORS } = require('./colors');
const { TYPE } = require('./type');

module.exports = {
	PACKS: {
		typeScale: {
			bodyFont: {
				1: {
					fontSize: '3.75rem',
					lineHeight: 1.2,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				2: {
					fontSize: '3.375rem',
					lineHeight: 1.2,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				3: {
					fontSize: '3rem',
					lineHeight: 1.2,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				4: {
					fontSize: '2.625rem',
					lineHeight: 1.2,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				5: {
					fontSize: '2.25rem',
					lineHeight: 1.2,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				6: {
					fontSize: '1.875rem',
					lineHeight: 1.2,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				7: {
					fontSize: '1.5rem',
					lineHeight: 1.2,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				8: {
					fontSize: '1.125rem',
					lineHeight: 1.4,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				9: {
					fontSize: '1rem',
					lineHeight: 1.4,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
				10: {
					fontSize: '0.875rem',
					lineHeight: 1.4,
					fontFamily: TYPE.bodyFont.fontFamily,
				},
			},
			brandFont: {
				1: {
					fontSize: '3.75rem',
					lineHeight: 1.2,
					fontFamily: TYPE.brandFont.fontFamily,
				},
				2: {
					fontSize: '3.375rem',
					lineHeight: 1.2,
					fontFamily: TYPE.brandFont.fontFamily,
				},
				3: {
					fontSize: '3rem',
					lineHeight: 1.2,
					fontFamily: TYPE.brandFont.fontFamily,
				},
				4: {
					fontSize: '2.625rem',
					lineHeight: 1.2,
					fontFamily: TYPE.brandFont.fontFamily,
				},
				5: {
					fontSize: '2.25rem',
					lineHeight: 1.2,
					fontFamily: TYPE.brandFont.fontFamily,
				},
				6: {
					fontSize: '1.875rem',
					lineHeight: 1.2,
					fontFamily: TYPE.brandFont.fontFamily,
				},
				7: {
					fontSize: '1.5rem',
					lineHeight: 1.2,
					fontFamily: TYPE.brandFont.fontFamily,
				},
			},
		},
		lead: {
			marginBottom: '1.3125rem',
			fontSize: ['1rem', null, '1.125rem'],
			fontWeight: 300,
			lineHeight: 1.4,
		},
		link: {
			color: COLORS.primary,
			textDecoration: 'underline',
			':hover': {
				color: COLORS.primary,
				textDecoration: 'underline',
			},
		},
		focus: {
			outline: `solid ${COLORS.focus}`,
			outlineWidth: '2px',
			outlineOffset: '3px',
		},
	},
};
