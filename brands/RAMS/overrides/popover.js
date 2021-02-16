export const popover = ({ COLORS }) => ({
	Panel: {
		styles: (styles, { position, ...rest }) => ({
			...styles,
			border: `1px solid ${COLORS.primary}`,
			'::before': {
				...styles['::before'],
				[position.placement === 'top' ? 'borderTop' : 'borderBottom']:
					rest.placement !== 'none' && `12px solid ${COLORS.primary}`,
			},
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
