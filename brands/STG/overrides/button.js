module.exports = ({ COLORS }) => ({
	Button: {
		styles: (styles, { look, soft }) => {
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
