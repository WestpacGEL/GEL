export const brandOverrides = (brand) => {
	const overridesWithTokens = { ...brand };

	// Add a custom XL breakpoint @ 1400px
	overridesWithTokens.LAYOUT.breakpoints['xl'] = 1400;

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
