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
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			Breadcrumb
		</div>
	);
};

// ==============================
// Types
// ==============================

Breadcrumb.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Breadcrumb.defaultProps = {};
