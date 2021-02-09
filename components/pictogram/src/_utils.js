import { useBrand } from '@westpac/core';

export const getColors = (mode) => {
	const { COLORS, BRAND } = useBrand();

	// Define a default mode
	if (!mode) {
		mode = BRAND === 'WBC' ? 'duo' : 'dark';
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

	return colorMap[mode];
};
