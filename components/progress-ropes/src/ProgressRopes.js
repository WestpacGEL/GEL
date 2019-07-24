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
 * progressRopes: Progress ropes component
 */
export const ProgressRopes = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			ProgressRopes
		</div>
	);
};

// ==============================
// Types
// ==============================

ProgressRopes.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

ProgressRopes.defaultProps = {};
