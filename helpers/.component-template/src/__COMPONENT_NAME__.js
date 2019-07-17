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
 * __COMPONENT_TITLE__: __COMPONENT_DESCRIPTION__
 */
export const __COMPONENT_NAME__ = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			__COMPONENT_NAME__
		</div>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

export const defaultProps = {};

__COMPONENT_NAME__.propTypes = {};
__COMPONENT_NAME__.defaultProps = {};
