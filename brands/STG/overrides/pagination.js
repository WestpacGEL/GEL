export const pagination = ({ COLORS }) => ({
	Link: {
		styles: (styles, { active }) => {
			if (active) {
				return {
					...styles,
					color: COLORS.text,
				};
			}
			return styles;
		},
	},
});
