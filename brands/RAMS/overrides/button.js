export const button = ({ COLORS }) => {
	const asArray = (val) => (Array.isArray(val) ? val : [val]);
	const sizeMap = {
		small: { stopPos: '0.125rem' },
		medium: { stopPos: '0.1875rem' },
		large: { stopPos: '0.25rem' },
		xlarge: { stopPos: '0.3125rem' },
	};

	return {
		Button: {
			styles: (styles, { look, size, soft }) => {
				const sizeArr = asArray(size);

				return {
					...styles,

					// blender support
					backgroundImage: 'none',
					borderWidth: '1px',

					// Override soft color
					...((look === 'hero' || look === 'primary') &&
						soft && {
							color: COLORS[look],
						}),

					// Add RAMS bottom stripe
					...(look === 'primary' && {
						// Reset border (note: reapplied in ButtonGroup override)
						...(soft ? { borderBottomWidth: 0 } : { borderWidth: 0 }),
						backgroundImage: sizeArr.map(
							(s) =>
								s &&
								`linear-gradient(to top, #78C339, #78C339 ${sizeMap[s].stopPos}, transparent ${sizeMap[s].stopPos}, transparent)`
						),
					}),
				};
			},
		},
	};
};
