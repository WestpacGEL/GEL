/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Well = ({ responsive, ...props }) => {
	const { breakpoints, well } = useTheme();
	const mq = paint(breakpoints);

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

	return <div css={mq(common)} {...props} />;
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
