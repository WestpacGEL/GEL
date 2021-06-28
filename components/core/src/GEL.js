/** @jsx jsx */

import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import { BrandContext } from './Brand';
import { useFocus } from './useFocus';
import { Core } from './Core';

export const GEL = ({ brand, normalize, children, ...props }) => {
	useFocus();

	return (
		<BrandContext.Provider value={brand} {...props}>
			<Core normalize={normalize}>{children}</Core>
		</BrandContext.Provider>
	);
};

GEL.propTypes = {
	normalize: PropTypes.bool,
	brand: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
GEL.defaultProps = {
	normalize: false,
};
