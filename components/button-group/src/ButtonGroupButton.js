/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { Button } from '@westpac/button';
import shortid from 'shortid';

// ==============================
// Component
// ==============================

export const ButtonGroupButton = ({
	appearance,
	size,
	name,
	value,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	isSrOnlyText,
	isChecked,
	onChange,
	children,
	...props
}) => {
	const { button } = useTheme();
	const [checked, setChecked] = useState(isChecked);
	const [buttonId] = useState(`button-${shortid.generate()}`);

	useEffect(
		() => {
			setChecked(checked);
		},
		[checked]
	);

	const toggle = () => {
		if (onChange) {
			onChange();
		} else {
			setChecked(!checked);
		}
	};

	return (
		<label htmlFor={buttonId} css={{ flex: 1 }} {...props}>
			<input
				type="radio"
				css={{
					position: 'absolute',
					zIndex: -1,
					opacity: 0,
				}}
				name={name}
				id={buttonId}
				value={value}
				checked={checked}
				onChange={toggle}
			/>
			<Button
				css={{
					// Style internal borders
					'label:not(:last-child) > &': {
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
						borderRight: 'none',
					},
					'label:not(:first-of-type) > &': {
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					},

					// Checked state styling (look like a standard button)
					'input:checked + &': {
						color: button.appearance[appearance].standard.default.color,
						backgroundColor: button.appearance[appearance].standard.default.backgroundColor,
						borderColor: button.appearance[appearance].standard.default.borderColor,
					},
				}}
				tag="span"
				appearance={appearance}
				size={size}
				iconAfter={IconAfter}
				iconBefore={IconBefore}
				isSrOnlyText={isSrOnlyText}
				isSoft
				isBlock
			>
				{children}
			</Button>
		</label>
	);
};

// ==============================
// Types
// ==============================

ButtonGroupButton.propTypes = {
	/**
	 * Button group button input element’s value
	 */
	value: PropTypes.string,

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Check the button
	 */
	isChecked: PropTypes.bool,

	/**
	 * The onChange handler for this button
	 */
	onChange: PropTypes.func,

	/**
	 * Button group button text
	 */
	children: PropTypes.node,
};

ButtonGroupButton.defaultProps = {
	isChecked: false,
};
