module.exports = ({ COLORS }) => ({
	subComponent: {
		PanelHeader: {
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
