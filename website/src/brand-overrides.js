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

	return overridesWithTokens;
};
