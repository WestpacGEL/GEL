/** @jsx jsx */

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormCheckItem = ({
	type,
	name,
	value,
	size,
	isInline,
	isFlipped,
	isChecked,
	disabled,
	onChange,
	children,
	...props
}) => {
	const { formCheck, typography } = useTheme();
	const [checked, setChecked] = useState(isChecked);
	const [formCheckId] = useState(`formCheck-${shortid.generate()}`);

	useEffect(() => {
		setChecked(checked);
	}, [checked]);

	const toggle = () => {
		if (onChange) {
			onChange();
		} else {
			setChecked(!checked);
		}
	};

	const controlWidth = formCheck.size[size].control.width;
	const controlHeight = formCheck.size[size].control.width;
	const checkWidth = formCheck.size[size].check[type].width;
	const checkHeight = formCheck.size[size].check[type].height;
	const checkTweak = formCheck.size[size].check[type].tweak;

	const checkboxStroke = formCheck.size[size].check['checkbox'].stroke;

	const style = {
		// Common styling
		common: {
			position: 'relative',
			display: isInline ? 'inline-block' : 'block',
			verticalAlign: isInline && 'top',
			marginRight: isInline && formCheck.size[size].item.marginRight,
			marginBottom: formCheck.size[size].item.marginBottom,
			minHeight: controlHeight,
			[isFlipped ? 'paddingRight' : 'paddingLeft']: controlWidth,
		},

		// Input control styling
		input: {
			position: 'absolute',
			zIndex: 1,
			top: 0,
			[isFlipped ? 'right' : 'left']: 0,
			width: controlWidth,
			height: controlHeight,
			cursor: 'pointer',
			margin: 0,
			opacity: 0, //hide

			':disabled, fieldset:disabled &': {
				cursor: 'default',
			},
		},

		// Label styling
		label: {
			display: 'inline-block',
			paddingTop: formCheck.size[size].label.paddingTop,
			paddingBottom: formCheck.size[size].label.paddingBottom,
			[isFlipped ? 'paddingRight' : 'paddingLeft']: formCheck.size[size].label.gap,
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
				[isFlipped ? 'right' : 'left']: 0,
				width: controlWidth,
				height: controlHeight,
				border: `${formCheck.control.borderWidth} solid ${formCheck.control.default.borderColor}`,
				background: formCheck.control.default.backgroundColor,
				borderRadius: formCheck.control.check[type].borderRadius,

				// Focus state
				// TODO: this probably needs to be handled via the body class
				// 'input:focus + &': {
				// 	...(isKeyboardUser && typography.link.focus),
				// },

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
				[isFlipped ? 'right' : 'left']: `calc((${controlWidth} - ${checkWidth}) / 2)`,
				width: type === 'radio' ? 0 : checkWidth,
				height: type === 'radio' ? 0 : checkHeight,
				borderWidth:
					type === 'radio' ? `calc(${checkWidth} / 2)` : `0 0 ${checkboxStroke} ${checkboxStroke}`,
				borderRadius: type === 'radio' && '50%',
				background: type === 'radio' && formCheck.control.check.radio.backgroundColor,
				transform: type === 'checkbox' && 'rotate(-54deg)',

				// Fix bug in IE11 caused by transform rotate (-54deg)
				borderTopColor: type === 'checkbox' && 'transparent',

				// Selected state
				'input:checked + &': {
					opacity: 1, //show
				},
			},
		},
	};

	return (
		<div css={style.common} {...props}>
			<input
				type={type}
				css={style.input}
				name={name}
				id={formCheckId}
				value={value}
				checked={checked}
				disabled={disabled}
				onChange={toggle}
			/>
			<label htmlFor={formCheckId} css={style.label}>
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
	 * Form check item value
	 */
	value: PropTypes.string,

	/**
	 * Check the Form check item
	 */
	isChecked: PropTypes.bool,

	/**
	 * Disable the Form check item
	 */
	disabled: PropTypes.bool,

	/**
	 * Handler to be called on change
	 */
	onChange: PropTypes.func,

	/**
	 * Form check item label text
	 */
	children: PropTypes.string.isRequired,
};

FormCheckItem.defaultProps = {
	isChecked: false,
	disabled: false,
};
