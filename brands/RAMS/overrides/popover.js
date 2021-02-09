export const popover = ({ COLORS }) => ({
	Panel: {
		styles: (styles, {}) => ({
			...styles,
			border: `1px solid ${COLORS.primary}`,
		}),
	},
	Heading: {
		styles: (styles, {}) => ({
			...styles,
			color: COLORS.heading,
		}),
	},
	CloseBtn: {
		styles: (styles, {}) => ({
			...styles,
			color: COLORS.primary,
		}),
	},
});
