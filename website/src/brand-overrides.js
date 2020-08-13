import merge from 'lodash.merge';

export const brandOverrides = (brand) => {
	const { PACKS, TYPE } = brand;
	const overridesWithTokens = { ...brand };

	// Body overrides
	overridesWithTokens['@westpac/body'] = {
		Body: {
			styles: (styles) => ({
				...styles,

				fontSize: '1rem',
				lineHeight: 2,

				'h1, h2, h3, h4, h5, h6': {
					color: 'inherit',
				},
				h2: {
					...PACKS.typeScale.bodyFont[6],
					fontWeight: TYPE.bodyFont.headingWeight,
					margin: '0 0 1.125rem',
				},
				h3: {
					...PACKS.typeScale.bodyFont[8],
					fontWeight: TYPE.bodyFont.headingWeight,
					margin: '0 0 1.125rem',
				},
				p: {
					margin: '0 0 0.75rem !important',
				},
			}),
		},
	};

	// List overrides
	const listStyleMap = {
		bullet: {
			'::before': {
				top: '0.75rem',
			},
		},
		link: {
			'::before': {
				top: '0.75rem',
			},
		},
		tick: {
			'::before': {
				top: '0.625rem',
			},
		},
	};
	overridesWithTokens['@westpac/list'] = {
		List: {
			styles: (styles, { type }) =>
				merge({}, styles, {
					'> li': {
						// Reposition bullets/ticks etc
						...listStyleMap[type],
					},
				}),
		},
	};

	return overridesWithTokens;
};
