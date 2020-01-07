module.exports = ({ COLORS }) => ({
	subComponent: {
		Bar: {
			styles: (styles, {}) => {
				return {
					...styles,
					color: COLORS.text,
				};
			},
		},
	},
});
