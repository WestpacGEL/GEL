export const formCheck = ({ COLORS }) => ({
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
});
