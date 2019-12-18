module.exports = ({ COLORS }) => ({
	styles: (styles, { look, soft }) => {
		if (look === 'hero') {
			return {
				...styles,
				color: COLORS.text,
			};
		}
		return styles;
	},
});
