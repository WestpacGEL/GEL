export const progressBar = ({ COLORS }) => ({
	Bar: {
		styles: (styles, {}) => {
			return {
				...styles,
				color: COLORS.text,
			};
		},
	},
});
