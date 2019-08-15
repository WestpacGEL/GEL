/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { FormContext } from '../../form/src';

import svgToTinyDataURI from 'mini-svg-data-uri';

// ==============================
// Utils
// ==============================

const round = f => Math.round(f * 100) / 100; //2DP

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
	const formContext = useContext(FormContext);

	const formInputInline = formContext.inline || inline;

	// Common styling
	const styleCommon = {
		display: formInputInline ? 'inline-block' : 'block',
		width: formInputInline ? 'auto' : '100%',
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
		verticalAlign: Tag === 'textarea' ? 'top' : formInputInline ? 'middle' : null,
		padding: formInput.size[size].padding.join(' '),
		fontSize: formInput.size[size].fontSize,
		height: `calc(${formInput.lineHeight}em + ${(p => `${p[0]} + ${p[2] || p[0]}`)(
			formInput.size[size].padding
		)} + ${(bw => `${bw} + ${bw}`)(formInput.borderWidth)})`,

		'&::placeholder': {
			opacity: 1, // Override Firefox's unusual default opacity
			...formInput.placeholder,
		},

		// Focus styling (for all, not just keyboard users)
		':focus': {
			...typography.link.focus,
		},

		// Disabled and read-only inputs
		':disabled, &[readonly]': {
			cursor: 'not-allowed',
			opacity: 1, // iOS fix for unreadable disabled content
			...formInput.disabled,
		},

		// Disable number input spinners/steppers
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			margin: 0,
			appearance: 'none',
		},
	};

	const caretSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="${
		colors.muted
	}" fill-rule="evenodd" d="M0 0l7 8 7-8z"/></svg>`;
	const caretGap = formInput.select.caretGap;
	const caretWidth = '14px';

	const styleAppearance = {
		select: {
			paddingRight: `calc(${formInput.size[size].padding[1]} + ${caretWidth} + ${caretGap})`,
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
		},
		textarea: {
			...formInput.textarea.size[size],
		},
	};

	// Input fixed width styling
	const styleFixedWidth = () => {
		const factor = formInput.fontXFactor; //'W' compared to 'x' character (relative to font)
		let extras = `${(p => `${p} + ${p}`)(formInput.size[size].padding[1])} + ${(b => `${b} + ${b}`)(
			formInput.borderWidth
		)}`;

		// Add width for caret if necessary
		if (Tag === 'select') {
			extras = `${extras} + ${caretWidth} + ${caretGap}`;
		}

		return width
			? {
					maxWidth: `calc(${extras} + ${round(width * factor)}ex)`,
			  }
			: null;
	};

	return (
		<Tag
			css={{
				...styleCommon,
				...styleAppearance[Tag],
				...styleFixedWidth(),
			}}
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
	 * Invalid input mode.
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
	 * The component children.
	 *
	 * Only select inputs render children.
	 */
	children: PropTypes.node,
};

FormInput.defaultProps = {
	size: 'medium',
	invalid: false,
	tag: 'input',
};
