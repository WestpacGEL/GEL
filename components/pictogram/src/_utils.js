export const colorMap = (brand, mode) => {
	const { COLORS, BRAND } = brand;

	// Define a default mode
	if (!mode) {
		mode = BRAND === 'WBC' ? 'duo' : 'dark';
	}

	const modes = {
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

	return modes[mode];
};
