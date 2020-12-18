const sizeMap = {
	small: { offsetY: '0.125rem' },
	medium: { offsetY: '0.1875rem' },
	large: { offsetY: '0.25rem' },
	xlarge: { offsetY: '0.3125rem' },
};

export const button = ({ COLORS }) => ({
	Button: {
		styles: (styles, { look, size, soft }) => {
			return {
				...styles,

				...((look === 'primary' || look === 'hero') && {
					...(soft && { color: COLORS[look] }),

					// Bottom bar
					...(!soft && {
						border: 0, //reset
						boxShadow: `inset 0 -${sizeMap[size].offsetY} #78C339`,
					}),
				}),
			};
		},
	},
});
