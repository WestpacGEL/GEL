/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Input Group: Styled input fields with attached addons. Addons can be text ($, %, .00 etc) or form controls (buttons or select inputs).
 */
export const InputGroup = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			InputGroup
		</div>
	);
};

// ==============================
// Types
// ==============================

InputGroup.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

InputGroup.defaultProps = {};
