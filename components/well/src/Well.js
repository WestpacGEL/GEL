/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { paint } from './utils';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Well = ({ responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);
	const well = theme.well;

	// Common styles
	const common = {
		padding: responsive ? well.padding.responsive : well.padding.default,
		marginBottom: well.marginBottom,
		backgroundColor: well.backgroundColor,
		border: `${well.borderWidth} solid ${well.borderColor}`,
		borderRadius: well.borderRadius,

		// Nested Well styling
		'& &': {
			backgroundColor: '#fff',
			margin: '12px 0',
		},
	};

	return <div css={arrayValues(common)} {...props} />;
};

// ==============================
// Types
// ==============================

Well.propTypes = {
	/**
	 * Responsive mode.
	 *
	 * Defaults to "false"
	 */
	responsive: PropTypes.bool,
};

Well.defaultProps = {
	responsive: false,
};
