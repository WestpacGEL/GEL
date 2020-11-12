/** @jsx jsx */

import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { BrandContext } from './Brand';
import { useFocus } from './useFocus';
import { Core } from './Core';

export const GEL = ({ brand, noReset, noScope, children, ...props }) => {
	useFocus();

	return (
		<BrandContext.Provider value={brand} {...props}>
			<Core noReset={noReset} noScope={noScope}>
				{children}
			</Core>
		</BrandContext.Provider>
	);
};

GEL.propTypes = {
	noReset: PropTypes.bool,
	noScope: PropTypes.bool,
	brand: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
