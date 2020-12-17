export const button = ({ COLORS }) => ({
	Button: {
		styles: (styles, { look, soft }) => {
			if (soft) {
				if (look === 'primary') {
					return {
						...styles,
						color: COLORS.primary,
					};
				}
				if (look === 'hero') {
					return {
						...styles,
						color: COLORS.hero,
					};
				}
			}
			return styles;
		},
	},
});
