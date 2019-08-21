/** @jsx jsx */

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { jsx, useTheme, UserModeContext } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormCheckItem = ({
	type,
	name,
	value,
	size,
	inline,
	flip,
	checked,
	children,
	onChange,
	...props
}) => {
	const { formCheck, typography } = useTheme();
	const isKeyboardUser = useContext(UserModeContext);

	const [isChecked, setIsChecked] = useState(checked);

	useEffect(
		() => {
			setIsChecked(checked);
		},
		[checked]
	);

	const toggle = () => {
		if (onChange) {
			onChange();
		} else {
			setIsChecked(!isChecked);
		}
	};

	const formCheckId = `formCheck-${shortid.generate()}`;

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
		marginRight: inline ? formCheck.size[size].item.marginRight : null,
		marginBottom: formCheck.size[size].item.marginBottom,
		minHeight: controlHeight,
		...(val => (flip ? { paddingRight: val } : { paddingLeft: val }))(controlWidth),
	};

	// Input control styling
	const styleInput = {
		position: 'absolute',
		zIndex: 1,
		top: 0,
		...(flip ? { right: 0 } : { left: 0 }),
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
		...(val => (flip ? { paddingRight: val } : { paddingLeft: val }))(
			formCheck.size[size].label.gap
		),
		marginBottom: 0,
		cursor: 'pointer',

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
			...(flip ? { right: 0 } : { left: 0 }),
			width: controlWidth,
			height: controlHeight,
			border: `${formCheck.control.borderWidth} solid ${formCheck.control.default.borderColor}`,
			background: formCheck.control.default.backgroundColor,
			borderRadius: formCheck.control.check[type].borderRadius,

			// Focus state
			'input:focus + &': {
				...(isKeyboardUser && typography.link.focus), //TODO: needs access to `isKeyboardUser` state
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
			top: `calc(((${controlHeight} - ${checkHeight}) / 2) + ${checkTweak})`,
			...(val => (flip ? { right: `calc(${val})` } : { left: `calc(${val})` }))(
				`(${controlWidth} - ${checkWidth}) / 2`
			),
			width: type === 'radio' ? 0 : checkWidth,
			height: type === 'radio' ? 0 : checkHeight,
			borderWidth:
				type === 'radio' ? `calc(${checkWidth} / 2)` : `0 0 ${checkboxStroke} ${checkboxStroke}`,
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
		<div css={styleCommon} {...props}>
			<input
				type={type}
				css={styleInput}
				name={name}
				id={formCheckId}
				value={value}
				checked={isChecked}
				onChange={toggle}
			/>
			<label htmlFor={formCheckId} css={styleLabel}>
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
	 * Form check value
	 */
	value: PropTypes.string,

	/**
	 * Check the form check
	 */
	checked: PropTypes.bool,

	/**
	 * Form check label text
	 */
	children: PropTypes.string.isRequired,
};

FormCheckItem.defaultProps = {
	checked: false,
};
