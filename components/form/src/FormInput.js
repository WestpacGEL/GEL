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

export const FormInput = ({ size, invalid, tag: Tag, spacing, inline, children, ...props }) => {
	const { colors, formInput } = useTheme();

	// Common styling
	const styleCommon = {
		display: inline ? 'inline-block' : 'block',
		width: inline ? 'auto' : '100%',
		appearance: 'none',
		lineHeight: 1.5,
		fontWeight: 400,
		color: colors.text,
		backgroundColor: '#fff',
		border: `1px solid`,
		borderColor: invalid || props.ariaInvalid ? colors.danger.default : colors.borderDark,
		borderRadius: '3px',
		transition: 'border 0.2s ease',
		verticalAlign: Tag === 'textarea' ? 'top' : inline ? 'middle' : null,
		minHeight: Tag === 'textarea' ? '60px' : null,

		'&::placeholder': {
			fontWeight: 300,
			// color: tint(COLORS.Text, 0.5),
			opacity: 1, // Override Firefox's unusual default opacity
		},

		// Disabled and read-only inputs
		':disabled, &[readonly]': {
			backgroundColor: color.light,
			color: colors.muted,
			cursor: 'not-allowed',
			opacity: 1, // iOS fix for unreadable disabled content
		},

		// Disable number input spinners/steppers
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			margin: 0,
			// -webkit-appearance: 'none',
			appearance: 'none',
		},
	};

	const styleSize = {
		padding: '5px 12px',
		fontSize: '16px',
		height: '36px',
	};

	const inputChildren = Tag !== 'input' ? children : null;

	return (
		<Tag
			css={{
				...styleCommon,
				...styleSize,
			}}
			type={Tag === 'input' ? 'text' : undefined}
			{...props}
		>
			{inputChildren}
		</Tag>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
	tag: ['input', 'select', 'textarea'],
	spacing: ['medium', 'large'],
};

FormInput.propTypes = {
	/**
	 * The component size.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Input input is invalid.
	 *
	 * Defaults to "false"
	 */
	invalid: PropTypes.bool,

	/**
	 * The component tag.
	 *
	 * Defaults to "input"
	 */
	tag: PropTypes.oneOf(options.tag),

	/**
	 * The component vertical spacing.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),
};

FormInput.defaultProps = {
	size: 'medium',
	invalid: false,
	tag: 'input',
	spacing: 'medium',
};
