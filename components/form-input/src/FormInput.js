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
	const { colors, formInput, typography } = useTheme();

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

		'&::placeholder': {
			...formInput.placeholder,
			opacity: 1, // Override Firefox's unusual default opacity
		},

		// Focus styling (for all, not just keyboard users)
		':focus': {
			...typography.link.focus,
		},

		// Disabled and read-only inputs
		':disabled, &[readonly]': {
			...formInput.disabled,
			cursor: 'not-allowed',
			opacity: 1, // iOS fix for unreadable disabled content
		},

		// Disable number input spinners/steppers
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			margin: 0,
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
	const styleFixedWidth = () => {
		const factor = formInput.fontXFactor; //'W' compared to 'x' character (relative to font)
		const paddings = parseInt(formInput.size[size].padding[1], 10) * 2;
		const borders = parseInt(formInput.borderWidth, 10) * 2;
		const extras = paddings + borders;

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
		const caretWidth = 14;
		const gap = 8;
		const paddingRight = parseInt(formInput.size[size].padding[1], 10) + caretWidth + gap;

		return Tag === 'select'
			? {
					paddingRight: `${paddingRight}px`,
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
				...styleFixedWidth(),
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
};

FormInput.defaultProps = {
	size: 'medium',
	invalid: false,
	tag: 'input',
};
