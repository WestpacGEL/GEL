/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Label = ({ appearance, tag: Tag, ...props }) => {
	const { COLORS } = useTheme();

	if (props.href && Tag === 'span') {
		Tag = 'a';
	}

	return (
		<Tag
			css={{
				border: '1px solid',
				borderRadius: '0.125rem',
				display: 'inline',
				fontSize: '0.75rem',
				fontWeight: 400,
				lineHeight: 1,
				padding: '0.0625rem 0.375rem',
				textAlign: 'center',
				verticalAlign: 'baseline',
				whiteSpace: 'nowrap',
				color: appearance === 'faint' ? COLORS.muted : '#fff', //TODO: STG uses `COLORS.text`
				backgroundColor: appearance === 'faint' ? COLORS.light : COLORS[appearance],
				borderColor: appearance === 'faint' ? COLORS.border : COLORS[appearance],

				':empty': {
					display: 'none',
				},
				'a&': {
					textDecoration: 'none',
				},
				'a&:hover, a&:focus': {
					cursor: 'pointer',
					backgroundColor: appearance === 'faint' ? '#fff' : COLORS.tints[`${appearance}50`],
					borderColor: appearance !== 'faint' && COLORS.tints[`${appearance}50`],
				},

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

const options = {
	appearance: ['primary', 'hero', 'neutral', 'faint', 'success', 'info', 'warning', 'danger'],
};

Label.propTypes = {
	/** Label appearance */
	appearance: PropTypes.oneOf(options.appearance),

	/** Label tag */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/** Label text */
	children: PropTypes.node.isRequired,
};

Label.defaultProps = {
	appearance: 'primary',
	tag: 'span',
};
