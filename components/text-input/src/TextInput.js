/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { useFormContext } from '@westpac/form';

import svgToTinyDataURI from 'mini-svg-data-uri';

// ==============================
// Utils
// ==============================

const round = f => Math.round(f * 100) / 100; //2DP

// ==============================
// Component
// ==============================

export const TextInput = ({ size, width, inline, invalid, tag: Tag, children, ...props }) => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();

	// Consume FormContext
	const formContext = useFormContext();
	const textInputInline = inline || (formContext && formContext.inline) || false;
	const textInputSize = size || (formContext && formContext.size) || 'medium';

	const sizeMap = {
		small: {
			padding: ['0.1875rem', '0.5625rem', '0.25rem'],
			fontSize: '0.875rem',
			textarea: {
				minHeight: '3.375rem',
			},
		},
		medium: {
			padding: ['0.3125rem', '0.75rem'],
			fontSize: '1rem',
			textarea: {
				minHeight: '3.75rem',
			},
		},
		large: {
			padding: ['0.5rem', '0.9375rem'],
			fontSize: '1rem',
			textarea: {
				minHeight: '4.125rem',
			},
		},
		xlarge: {
			padding: ['0.5625rem', '1.125rem', '0.625rem'],
			fontSize: '1.125rem',
			textarea: {
				minHeight: '4.5rem',
			},
		},
	};

	// Common styling
	const borderWidth = 1; //px
	const lineHeight = 1.5;
	const styleCommon = {
		display: textInputInline ? ['block', 'inline-block'] : 'block',
		width: textInputInline ? ['100%', 'auto'] : '100%',
		appearance: 'none',
		lineHeight: lineHeight,
		fontWeight: 400,
		color: COLORS.text,
		backgroundColor: '#fff',
		border: `${borderWidth}px solid ${
			invalid || props.ariaInvalid ? COLORS.danger : COLORS.borderDark
		}`,
		borderRadius: '0.1875rem',
		transition: 'border 0.2s ease',
		verticalAlign: textInputInline && 'middle',
		padding: sizeMap[textInputSize].padding.join(' '),
		fontSize: sizeMap[textInputSize].fontSize,
		height: `calc(${lineHeight}em + ${(p => `${p[0]} + ${p[2] || p[0]}`)(
			sizeMap[textInputSize].padding
		)} + ${2 * borderWidth}px)`,

		'&::placeholder': {
			opacity: 1, // Override Firefox's unusual default opacity
			fontWeight: 300,
			color: COLORS.tints.text50,
		},

		// Focus styling (for all, not just keyboard users)
		':focus': {
			outline: `2px solid ${COLORS.focus}`,
			outlineOffset: 3,
		},

		// Disabled and read-only inputs
		':disabled, &[readonly]': {
			cursor: 'not-allowed',
			opacity: 1, // iOS fix for unreadable disabled content
			backgroundColor: COLORS.light,
			color: COLORS.muted,
		},

		// Disable number input spinners/steppers
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			margin: 0,
			appearance: 'none',
		},
	};

	// Appearance styling
	const caretSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="${COLORS.muted}" fill-rule="evenodd" d="M0 0l7 8 7-8z"/></svg>`;
	const caretGap = '0.5rem';
	const caretWidth = '14px';
	const styleAppearance = {
		select: {
			paddingRight: `calc(${sizeMap[textInputSize].padding[1]} + ${caretWidth} + ${caretGap})`,
			backgroundImage: `url("${svgToTinyDataURI(caretSVG)}")`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: `right ${sizeMap[textInputSize].padding[1]} center`,

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
		},
		textarea: {
			verticalAlign: inline && 'top',
			minHeight: sizeMap[textInputSize].textarea.minHeight,
		},
	};

	// Input fixed width styling
	const factor = 1.81; //'W' compared to 'x' character (relative to font)
	let extras = `${(p => `${p} + ${p}`)(sizeMap[textInputSize].padding[1])} + ${(b => `${b} + ${b}`)(
		borderWidth
	)}`;
	if (Tag === 'select') {
		extras = `${extras} + ${caretWidth} + ${caretGap}`; // Add width for caret if a select
	}
	const styleFixedWidth = {
		maxWidth: width && `calc(${extras} + ${round(width * factor)}ex)`,
	};

	return (
		<Tag
			css={mq({
				...styleCommon,
				...styleAppearance[Tag],
				...styleFixedWidth,
			})}
			type={Tag === 'input' ? 'text' : undefined}
			{...props}
		>
			{Tag === 'select' ? children : null}
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

TextInput.propTypes = {
	/**
	 * Component size
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width: PropTypes.oneOf(options.width),

	/**
	 * Inline mode
	 */
	inline: PropTypes.bool,

	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOf(options.tag),

	/**
	 * Component children.
	 *
	 * Note: Only `select` type inputs render children.
	 */
	children: PropTypes.node,
};

TextInput.defaultProps = {
	invalid: false,
	tag: 'input',
};
