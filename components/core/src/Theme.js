import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const defaultThemeFn = provided => provided;
const isEmpty = obj => Object.keys(obj).length === 0;

export const GEL = ({ brand, theme, ...props }) => {
	if (typeof theme !== 'function') {
		throw new Error('The theme must be a function.');
	}
	if (!brand || isEmpty(brand)) {
		throw new Error('A brand is required.');
	}

	const themeObj = theme(brand);

	if (!themeObj || isEmpty(themeObj)) {
		throw new Error('The brand or theme provided is invalid.');
	}

	return <ThemeProvider theme={themeObj} {...props} />;
};

GEL.defaultProps = {
	theme: defaultThemeFn,
};
