export const button = ({ COLORS }) => {
	const asArray = (val) => (Array.isArray(val) ? val : [val]);	
	const sizeMap = {
		small: { offsetY: '0.125rem' },
		medium: { offsetY: '0.1875rem' },
		large: { offsetY: '0.25rem' },
		xlarge: { offsetY: '0.3125rem' },
	};

	return {
		Button: {
			styles: (styles, { look, size, soft }) => {
				const sizeArr = asArray(size);

				return {
					...styles,

					...((look === 'primary' || look === 'hero') && {
						...(soft && { color: COLORS[look] }),

						// Bottom bar
						...(!soft && {
							border: 0, //reset
							boxShadow: sizeArr.map(s => s && `inset 0 -${sizeMap[s].offsetY} #78C339`),
						}),
					}),
				};
			},
		}
	};
};
