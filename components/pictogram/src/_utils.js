export const colorMap = (COLORS) => {
	return {
		colour: {
			outline: COLORS.hero,
			background: '#fff',
			highlight: COLORS.primary,
		},
		transparent: {
			outline: COLORS.hero,
			background: 'transparent',
			highlight: COLORS.primary,
		},
		dark: {
			outline: COLORS.text,
			background: '#fff',
			highlight: COLORS.text,
		},
		light: {
			outline: '#fff',
			background: 'transparent',
			highlight: '#fff',
		},
	};
};
