export const modal = ({ COLORS }) => ({
	Header: {
		styles: (styles, {}) => ({
			...styles,
			borderBottom: `1px solid #78C339`, //RAMS Green (secondary palette)
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
