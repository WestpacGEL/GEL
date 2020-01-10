module.exports = ({ COLORS }) => ({
	subComponent: {
		Label: {
			styles: (styles, { checked }) => {
				return {
					...styles,
					...(checked && {
						'::after': {
							...styles['::after'],
							borderColor: COLORS.text,
						},
					}),
				};
			},
		},
	},
});
