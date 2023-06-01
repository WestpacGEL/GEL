import { useBrand } from '@westpac/core';

export const getColors = (mode) => {
	const { COLORS, BRAND } = useBrand();
	const defaultMode = 'duo';

	// Define a default mode
	if (!mode) {
		mode = defaultMode;
	}

	const colorMap = {
		BOM: {
			dark: {
				outline: COLORS.hero,
				highlight: COLORS.hero,
			},
			light: {
				outline: COLORS.white,
				highlight: COLORS.white,
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
				outline: COLORS.white,
				highlight: COLORS.white,
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
				outline: COLORS.white,
				highlight: COLORS.white,
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.primary,
			},
		},
		RAMS: {
			dark: {
				outline: COLORS.primary,
				highlight: COLORS.primary,
			},
			light: {
				outline: COLORS.white,
				highlight: COLORS.white,
			},
			duo: {
				outline: COLORS.primary,
				highlight: COLORS.pop,
			},
		},
		STG: {
			dark: {
				outline: COLORS.text,
				highlight: COLORS.text,
			},
			light: {
				outline: COLORS.white,
				highlight: COLORS.white,
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
				outline: COLORS.white,
				highlight: COLORS.white,
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
				outline: COLORS.white,
				highlight: COLORS.white,
			},
			duo: {
				outline: COLORS.hero,
				highlight: COLORS.borderDark,
			},
		},
	};

	if (typeof mode === 'object') {
		mode.outline = mode.outline ? mode.outline : colorMap[BRAND.code][defaultMode].outline;
		mode.highlight = mode.highlight ? mode.highlight : colorMap[BRAND.code][defaultMode].highlight;
	}

	return {
		outline: typeof mode === 'object' ? mode.outline : colorMap[BRAND.code][mode].outline,
		highlight: typeof mode === 'object' ? mode.highlight : colorMap[BRAND.code][mode].highlight,
	};
};
