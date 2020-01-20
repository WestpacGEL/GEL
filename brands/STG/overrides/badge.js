export const badge = ({ COLORS }) => ({
	Badge: {
		styles: (styles, { look }) => {
			if (look === 'hero') {
				return {
					...styles,
					color: COLORS.text,
				};
			}
			return styles;
		},
	},
});
