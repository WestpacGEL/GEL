export const brandOverrides = (brand) => {
	const { BRAND } = brand;
	const overridesWithTokens = { ...brand };

	// Example
	/* const BodyOverride = (props) => <div {...props}/>;	 
	overridesWithTokens['@westpac/body'] = {
		Body: {
			component: () => BodyOverride,
			styles: (styles) => ({
				...styles,
			}),
			attributes: () => null,
		},
	}; */

	overridesWithTokens['@westpac/heading'] = {
		BrandHeading: {
			styles: (styles) => ({
				...styles,
				textTransform: BRAND == 'WBC' && 'uppercase',
			}),
		},
	};

	return overridesWithTokens;
};
