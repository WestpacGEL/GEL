/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import svgToTinyDataURI from 'mini-svg-data-uri';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormInput = ({
	size,
	width,
	invalid,
	tag: Tag,
	spacing,
	inline,
	children,
	...props
}) => {
	const { colors, formInput } = useTheme();

	// Common styling
	const styleCommon = {
		display: inline ? 'inline-block' : 'block',
		width: inline ? 'auto' : '100%',
		appearance: 'none',
		lineHeight: formInput.lineHeight,
		fontWeight: formInput.fontWeight,
		color: formInput.color,
		backgroundColor: formInput.backgroundColor,
		border: `${formInput.borderWidth} solid`,
		borderColor:
			invalid || props.ariaInvalid
				? formInput.appearance.invalid.borderColor
				: formInput.appearance.default.borderColor,
		borderRadius: formInput.borderRadius,
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
			backgroundColor: colors.light,
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

	// Input size styling
	const styleSize = {
		padding: formInput.size[size].padding.join(' '),
		fontSize: formInput.size[size].fontSize,
		height: formInput.size[size].height,
	};

	// Input fixed width styling
	const styleWidth = () => {
		const factor = formInput.fontXFactor; //'W' compared to 'x' character (relative to font)
		const extras =
			parseInt(formInput.size[size].padding[1], 10) * 2 + parseInt(formInput.borderWidth, 10) * 2;

		return width
			? {
					maxWidth: `calc(${extras}px + ${(width * factor).toFixed(1)}ex)`,
			  }
			: null;
	};

	// Select element styling
	const styleSelect = () => {
		const caretSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="${
			colors.muted
		}" fill-rule="evenodd" d="M0 0l7 8 7-8z"/></svg>`;

		return Tag === 'select'
			? {
					paddingRight: `${parseInt(formInput.size[size].padding[1], 10) + 22}px`, //22px = 14px (svg width) + 8px (gap)
					backgroundImage: `url("${svgToTinyDataURI(caretSVG)}")`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `right ${formInput.size[size].padding[1]} center`,

					// Remove the caret on `<select>`s in IE10+.
					'&::-ms-expand': {
						display: 'none',
					},

					'@media print': {
						backgroundColor: 'transparent',

						':disabled': {
							backgroundColor: '#fff',
						},
					},
			  }
			: null;
	};

	// Textarea element styling
	const styleTextarea = {
		...(Tag === 'textarea' && formInput.textarea.size[size]),
	};

	return (
		<Tag
			css={{
				...styleCommon,
				...styleSize,
				...styleWidth(),
				...styleSelect(),
				...styleTextarea,
			}}
			type={Tag === 'input' ? 'text' : undefined}
			{...props}
		>
			{Tag !== 'input' ? children : null}
		</Tag>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
	width: [2, 3, 4, 5, 10, 20, 30],
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
	 * The component width.
	 */
	width: PropTypes.oneOf(options.width),

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
