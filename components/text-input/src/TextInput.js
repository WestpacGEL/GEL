/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { FormContext } from '@westpac/form';

import svgToTinyDataURI from 'mini-svg-data-uri';

// ==============================
// Utils
// ==============================

const round = f => Math.round(f * 100) / 100; //2DP

// ==============================
// Component
// ==============================

export const TextInput = ({ size, width, invalid, tag: Tag, children, ...props }) => {
	const { colors, breakpoints, textInput, typography } = useTheme();
	const formContext = useContext(FormContext);
	const mq = paint(breakpoints);

	const isInline = formContext.isInline;
	const textInputSize = formContext.size || size;

	// Common styling
	const styleCommon = {
		display: isInline ? ['block', 'inline-block'] : 'block',
		width: isInline ? ['100%', 'auto'] : '100%',
		appearance: 'none',
		lineHeight: textInput.lineHeight,
		fontWeight: textInput.fontWeight,
		color: textInput.color,
		backgroundColor: textInput.backgroundColor,
		border: `${textInput.borderWidth} solid`,
		borderColor:
			invalid || props.ariaInvalid
				? textInput.appearance.invalid.borderColor
				: textInput.appearance.default.borderColor,
		borderRadius: textInput.borderRadius,
		transition: 'border 0.2s ease',
		verticalAlign: isInline ? 'middle' : null,
		padding: textInput.size[textInputSize].padding.join(' '),
		fontSize: textInput.size[textInputSize].fontSize,
		height: `calc(${textInput.lineHeight}em + ${(p => `${p[0]} + ${p[2] || p[0]}`)(
			textInput.size[textInputSize].padding
		)} + ${(bw => `${bw} + ${bw}`)(textInput.borderWidth)})`,

		'&::placeholder': {
			opacity: 1, // Override Firefox's unusual default opacity
			...textInput.placeholder,
		},

		// Focus styling (for all, not just keyboard users)
		':focus': {
			...typography.link.focus,
		},

		// Disabled and read-only inputs
		':disabled, &[readonly]': {
			cursor: 'not-allowed',
			opacity: 1, // iOS fix for unreadable disabled content
			...textInput.disabled,
		},

		// Disable number input spinners/steppers
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			margin: 0,
			appearance: 'none',
		},
	};

	const caretSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="${colors.muted}" fill-rule="evenodd" d="M0 0l7 8 7-8z"/></svg>`;
	const caretGap = textInput.select.caretGap;
	const caretWidth = '14px';

	const styleAppearance = {
		select: {
			paddingRight: `calc(${
				textInput.size[textInputSize].padding[1]
			} + ${caretWidth} + ${caretGap})`,
			backgroundImage: `url("${svgToTinyDataURI(caretSVG)}")`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: `right ${textInput.size[textInputSize].padding[1]} center`,

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
			verticalAlign: isInline && 'top',
			...textInput.textarea.size[textInputSize],
		},
	};

	// Input fixed width styling
	const styleFixedWidth = () => {
		const factor = textInput.fontXFactor; //'W' compared to 'x' character (relative to font)
		let extras = `${(p => `${p} + ${p}`)(textInput.size[textInputSize].padding[1])} + ${(b =>
			`${b} + ${b}`)(textInput.borderWidth)}`;

		// Add width for caret if a select
		if (Tag === 'select') {
			extras = `${extras} + ${caretWidth} + ${caretGap}`;
		}

		return (
			width && {
				maxWidth: `calc(${extras} + ${round(width * factor)}ex)`,
			}
		);
	};

	return (
		<Tag
			css={mq({
				...styleCommon,
				...styleAppearance[Tag],
				...styleFixedWidth(),
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
	size: 'medium',
	invalid: false,
	tag: 'input',
};
