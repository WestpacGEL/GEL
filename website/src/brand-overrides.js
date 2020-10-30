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

	overridesWithTokens['@westpac/grid'] = {
		Container: {
			styles: (styles, { fixed }) => ({
				...styles,
				maxWidth: !fixed && 1144,
			}),
		},
	};

	return overridesWithTokens;
};
