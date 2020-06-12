export const tabcordion = ({ COLORS }) => ({
	TabButton: {
		styles: (styles, { look }) => {
			if (look === 'lego') {
				return {
					...styles,
					color: COLORS.text,
				};
			}
			return styles;
		},
	},
});
