const sizeMap = {
	small: { borderBottomWidth: '0.125rem' },
	medium: { borderBottomWidth: '0.1875rem' },
	large: { borderBottomWidth: '0.25rem' },
	xlarge: { borderBottomWidth: '0.3125rem' },
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
						position: 'relative',
						'::after': {
							content: '""',
							display: 'block',
							position: 'absolute',
							zIndex: 0,
							bottom: '-1px',
							left: '-1px',
							right: '-1px',
							height: 0,
							borderBottom: 'solid #78C339', //RAMS Green (secondary palette)
							borderBottomLeftRadius: '3px',
							borderBottomRightRadius: '3px',
							...sizeMap[size],
						},
					}),
				}),
			};
		},
	},
});
