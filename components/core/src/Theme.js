import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

export const GEL = ({ brand, ...props }) => <ThemeProvider theme={brand} {...props} />;

GEL.propTypes = {
	// TODO `object` --> `shape`
	brand: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
