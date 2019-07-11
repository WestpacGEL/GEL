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

	// Common styles
	const common = {
		padding: responsive ? theme.well.padding.responsive : theme.well.padding.default,
		marginBottom: theme.well.marginBottom,
		backgroundColor: theme.well.backgroundColor,
		border: `1px solid ${theme.well.borderColor}`,
		borderRadius: theme.well.borderRadius,

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
