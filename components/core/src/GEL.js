/** @jsx jsx */

import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { BrandContext } from './Brand';
import { useFocus } from './useFocus';
import { Core } from './Core';

export const GEL = ({ brand, noReset, noPrefix, children, ...props }) => {
	useFocus();

	return (
		<BrandContext.Provider value={brand} {...props}>
			<Core noReset={noReset} noPrefix={noPrefix}>
				{children}
			</Core>
		</BrandContext.Provider>
	);
};

GEL.propTypes = {
	noReset: PropTypes.bool,
	noPrefix: PropTypes.bool,
	brand: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
