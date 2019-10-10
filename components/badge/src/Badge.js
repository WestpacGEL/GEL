/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Badge = ({ appearance, ...props }) => {
	const { COLORS } = useTheme();

	return (
		<span
			css={{
				border: `1px solid transparent`,
				borderRadius: '0.75rem',
				display: 'inline-block',
				fontSize: '0.875rem',
				fontWeight: 700,
				lineHeight: 1,
				minWidth: '0.625rem',
				padding: '0.25rem 0.4375rem',
				textAlign: 'center',
				verticalAlign: 'baseline',
				whiteSpace: 'nowrap',
				color: appearance === 'faint' ? COLORS.muted : '#fff', //TODO: STG uses `COLORS.text`
				backgroundColor: COLORS[appearance],
				borderColor: appearance === 'faint' ? COLORS.border : COLORS[appearance],

				'@media print': {
					color: '#000',
					backgroundColor: '#fff',
					border: '1px solid #000',
				},
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

Badge.propTypes = {
	/** Badge appearance */
	appearance: PropTypes.oneOf([
		'primary',
		'hero',
		'neutral',
		'faint',
		'success',
		'info',
		'warning',
		'danger',
	]),

	/** Badge text */
	children: PropTypes.node.isRequired,
};

Badge.defaultProps = {
	appearance: 'neutral',
};
