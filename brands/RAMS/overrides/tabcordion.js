export const tabcordion = ({ COLORS }) => ({
	TabButton: {
		styles: (styles, { look, selected }) => {
			if (look === 'lego') {
				return {
					...styles,
					color: selected ? COLORS.hero : '#fff',
				};
			}
			return styles;
		},
	},
});
