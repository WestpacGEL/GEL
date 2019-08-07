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

export const FormCheckItem = ({
	type,
	size,
	inline,
	flip,
	name,
	id,
	isKeyboardUser,
	children,
	...props
}) => {
	const { formCheck, typography } = useTheme();

	const controlWidth = formCheck.size[size].control.width;
	const controlHeight = formCheck.size[size].control.width;
	const checkWidth = formCheck.size[size].check[type].width;
	const checkHeight = formCheck.size[size].check[type].height;
	const checkTweak = formCheck.size[size].check[type].tweak;

	const checkboxStroke = formCheck.size[size].check['checkbox'].stroke;

	// Common styling
	const styleCommon = {
		position: 'relative',
		display: inline ? 'inline-block' : 'block',
		verticalAlign: inline ? 'top' : null,
		marginRight: inline ? 18 : null,
		minHeight: controlHeight,
		marginBottom: formCheck.size[size].item.marginBottom,

		// Padding left/right
		...(val => (flip ? { paddingRight: val } : { paddingLeft: val }))(controlWidth),
	};

	// Input control styling
	const styleInput = {
		position: 'absolute',
		zIndex: 1,
		top: 0,

		// Left/right
		...(val => (flip ? { right: val } : { left: val }))(0),

		width: controlWidth,
		height: controlHeight,
		cursor: 'pointer',
		margin: 0,
		opacity: 0, //hide

		':disabled, fieldset:disabled &': {
			cursor: 'default',
		},
	};

	// Label styling
	const styleLabel = {
		display: 'inline-block',
		paddingTop: formCheck.size[size].label.paddingTop,
		paddingBottom: formCheck.size[size].label.paddingBottom,
		marginBottom: 0,
		cursor: 'pointer',

		// Padding left/right
		...(val => (flip ? { paddingRight: val } : { paddingLeft: val }))(
			formCheck.size[size].label.gap
		),

		// remove 300ms pause on mobile
		touchAction: 'manipulation',

		// Disabled state
		'input:disabled + &, fieldset:disabled &': {
			cursor: 'default',
			...formCheck.label.disabled,
		},

		// Control outline
		'::before': {
			content: '""',
			boxSizing: 'border-box',
			position: 'absolute',
			top: 0,
			left: flip ? null : 0,
			right: flip ? 0 : null,
			width: controlWidth,
			height: controlHeight,
			border: `${formCheck.control.borderWidth}px solid ${formCheck.control.default.borderColor}`,
			background: formCheck.control.default.backgroundColor,
			borderRadius: formCheck.control.check[type].borderRadius,

			'input:focus + &': {
				...(isKeyboardUser && typography.link.focus),
			},

			// Disabled state
			'input:disabled + &, fieldset:disabled &': {
				...formCheck.control.disabled,
			},
		},

		// Control 'check' (tick or dot)
		'::after': {
			content: '""',
			position: 'absolute',
			border: `solid ${formCheck.control.default.borderColor}`,
			opacity: 0, //hide
			top: (controlHeight - checkHeight) / 2 + checkTweak,

			// Left/right
			...(val => (flip ? { right: val } : { left: val }))((controlWidth - checkWidth) / 2),

			width: type === 'radio' ? 0 : checkWidth,
			height: type === 'radio' ? 0 : checkHeight,
			borderWidth:
				type === 'radio' ? checkWidth / 2 : `0 0 ${checkboxStroke}px ${checkboxStroke}px`,
			borderRadius: type === 'radio' ? '50%' : null,
			background: type === 'radio' ? formCheck.control.check.radio.backgroundColor : null,
			transform: type === 'radio' ? null : 'rotate(-54deg)',

			// Fix bug in IE11 caused by transform rotate (-54deg)
			borderTopColor: type === 'radio' ? null : 'transparent',

			// Selected state
			'input:checked + &': {
				opacity: 1, //show
			},
		},
	};

	return (
		<div css={styleCommon}>
			<input css={styleInput} type={type} name={name} id={id} {...props} />
			<label htmlFor={id} css={styleLabel}>
				{children}
			</label>
		</div>
	);
};

// ==============================
// Types
// ==============================

FormCheckItem.propTypes = {
	/**
	 * The form check input element’s id.
	 *
	 * This prop is required.
	 */
	id: PropTypes.string.isRequired,

	/**
	 * Keyboard user mode.
	 */
	isKeyboardUser: PropTypes.bool,

	/**
	 * Form check label text.
	 *
	 * This prop is required.
	 */
	children: PropTypes.string.isRequired,
};

FormCheckItem.defaultProps = {};
