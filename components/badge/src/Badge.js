/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Badge = ({ look, value, ...props }) => {
	const { COLORS, BRAND } = useBrand();

	let color = '#fff';
	if(look ==='hero' && BRAND==='STG') {
		color = COLORS.text;
	}
	if (look === 'faint') {
		color = COLORS.muted;
	}

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
				color: color,
				backgroundColor: COLORS[look],
				borderColor: look === 'faint' ? COLORS.border : COLORS[look],

				'@media print': {
					color: '#000',
					backgroundColor: '#fff',
					border: '1px solid #000',
				},
			}}
			{...props}
		>
			{value}
		</span>
	);
};

// ==============================
// Types
// ==============================

Badge.propTypes = {
	/**
	 * Badge look
	 */
	look: PropTypes.oneOf([
		'primary',
		'hero',
		'neutral',
		'faint',
		'success',
		'info',
		'warning',
		'danger',
	]),

	/**
	 * Badge text
	 */
	value: PropTypes.string.isRequired,
};

Badge.defaultProps = {
	look: 'neutral',
};
