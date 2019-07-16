/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

/**
 * switch: Switch component for the Westpac GEL
 */
export const Switch = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			Switch
		</div>
	);
};

// ==============================
// Types
// ==============================

Switch.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Switch.defaultProps = {};
