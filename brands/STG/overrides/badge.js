module.exports = ({ COLORS }) => ({
	styles: (styles, { look }) => {
		if (look === 'hero') {
			return {
				...styles,
				color: COLORS.text,
			};
		}
		return styles;
	},
});
