module.exports = ({ COLORS }) => ({
	Bar: {
		styles: (styles, {}) => {
			return {
				...styles,
				color: COLORS.text,
			};
		},
	},
});
