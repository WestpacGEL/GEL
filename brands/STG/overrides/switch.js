export const switchStyle = ({ COLORS }) => ({
	ToggleText: {
		styles: (styles) => {
			return {
				...styles,
				color: COLORS.text,
			};
		},
	},
});
