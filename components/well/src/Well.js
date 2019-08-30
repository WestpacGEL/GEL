/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Well = ({ responsive, ...props }) => {
	const { breakpoints, well } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		padding: responsive ? well.padding.responsive : well.padding.default,
		marginBottom: well.marginBottom,
		backgroundColor: well.backgroundColor,
		border: `${well.borderWidth} solid ${well.borderColor}`,
		borderRadius: well.borderRadius,

		// Nested Well styling
		'& &': {
			backgroundColor: '#fff',
			margin: '1.2rem 0',
		},
	};

	return <div css={mq(common)} {...props} />;
};

// ==============================
// Types
// ==============================

Well.propTypes = {
	/**
	 * Responsive mode
	 */
	responsive: PropTypes.bool,
};

Well.defaultProps = {
	responsive: false,
};
