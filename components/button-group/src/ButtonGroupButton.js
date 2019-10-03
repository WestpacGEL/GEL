/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import shortid from 'shortid';
import { useButtonGroupContext } from './ButtonGroup';

// ==============================
// Component
// ==============================

export const ButtonGroupButton = ({
	value,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	srOnlyText,
	children,
	...props
}) => {
	const { appearance, size, name, checked, handleChange } = useButtonGroupContext();
	const [buttonId] = useState(`button-${shortid.generate()}`);

	console.log({ value, checked });

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
				checked={value === checked}
				onChange={handleChange}
			/>
			<Button
				css={{
					// Style internal borders
					'label:not(:last-child) > &': {
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
						borderRight: 0,
					},
					'label:not(:first-of-type) > &': {
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					},
				}}
				tag="span"
				appearance={appearance}
				size={size}
				iconAfter={IconAfter}
				iconBefore={IconBefore}
				srOnlyText={srOnlyText}
				soft={!value || value !== checked}
				block
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
	value: PropTypes.string.isRequired,

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
	checked: PropTypes.bool,

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
	checked: false,
};
