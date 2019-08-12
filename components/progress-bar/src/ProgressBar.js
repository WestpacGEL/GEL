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
 * Progress Bar: A visual indication of progress. Use when loading content or to indicate how far along the user is in a journey.
 */
export const ProgressBar = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			ProgressBar
		</div>
	);
};

// ==============================
// Types
// ==============================

ProgressBar.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

ProgressBar.defaultProps = {};
