import { useBrand } from '@westpac/core';

export const getColors = (mode) => {
	const { COLORS, BRAND } = useBrand();
	const defaultMode = BRAND === 'WBC' ? 'duo' : 'dark';

	// Define a default mode
	if (!mode) {
		mode = defaultMode;
	}

	const colorMap = {
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
	};

	if (typeof mode === 'object') {
		mode.outline = mode.outline ? mode.outline : colorMap[defaultMode].outline;
		mode.highlight = mode.highlight ? mode.highlight : colorMap[defaultMode].highlight;
	}

	return {
		outline: typeof mode === 'object' ? mode.outline : colorMap[mode].outline,
		highlight: typeof mode === 'object' ? mode.highlight : colorMap[mode].highlight,
	};
};
