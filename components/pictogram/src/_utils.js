import { useBrand } from '@westpac/core';

export const getColors = (mode) => {
	const { COLORS, BRAND } = useBrand();

	const colorMap = {
		BOM: {
			dark: {
				outline: COLORS.hero,
				highlight: COLORS.hero,
			},
			light: {
				outline: '#fff',
				highlight: '#fff',
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.pop,
			},
		},
		BSA: {
			dark: {
				outline: COLORS.hero,
				highlight: COLORS.hero,
			},
			light: {
				outline: '#fff',
				highlight: '#fff',
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.pop,
			},
		},
		BTFG: {
			dark: {
				outline: COLORS.hero,
				highlight: COLORS.hero,
			},
			light: {
				outline: '#fff',
				highlight: '#fff',
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.primary,
			},
		},
		RAMS: {
			dark: {
				outline: COLORS.hero,
				highlight: COLORS.hero,
			},
			light: {
				outline: '#fff',
				highlight: '#fff',
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.pop,
			},
		},
		STG: {
			dark: {
				outline: COLORS.text,
				highlight: COLORS.text,
			},
			light: {
				outline: '#fff',
				highlight: '#fff',
			},
			duo: {
				outline: COLORS.text,
				highlight: COLORS.pop,
			},
		},
		WBC: {
			dark: {
				outline: COLORS.hero,
				highlight: COLORS.hero,
			},
			light: {
				outline: '#fff',
				highlight: '#fff',
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.primary,
			},
		},
		WBG: {
			dark: {
				outline: COLORS.hero,
				highlight: COLORS.hero,
			},
			light: {
				outline: '#fff',
				highlight: '#fff',
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.primary,
			},
		},
	};

	return (colorMap[BRAND.code] || colorMap['WBC'])[mode];
};
