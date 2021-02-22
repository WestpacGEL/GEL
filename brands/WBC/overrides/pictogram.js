export const pictogram = ({ COLORS }) => {
	return {
		// variables we can override, need a better name for this
		options: {
			colorMap: {
				default: 'duo',
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
		},
	};
};
