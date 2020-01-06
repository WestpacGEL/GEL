module.exports = ({ COLORS }) => ({
	subComponent: {
		Header: {
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
	},
});
