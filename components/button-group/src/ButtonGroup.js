/** @jsx jsx */

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Context and consumer hook
// ==============================

const ButtonGroupContext = createContext();

export const useButtonGroupContext = () => {
	const context = useContext(ButtonGroupContext);
	if (!context) {
		throw new Error('<Button> should be wrapped in a <ButtonGroup>.');
	}
	return context;
};

// ==============================
// Component
// ==============================

export const ButtonGroup = ({ appearance, size, block, name, children, ...props }) => {
	const [checked, setChecked] = useState({});

	const handleChange = event => {
		setChecked({ value: event.target.value });
	};

	return (
		<ButtonGroupContext.Provider value={{ appearance, size, name, checked, handleChange }}>
			<div
				css={{
					display: block ? 'flex' : 'inline-flex',
					alignItems: 'center', //vertical
					verticalAlign: 'middle',
				}}
				{...props}
			>
				{children}
			</div>
		</ButtonGroupContext.Provider>
	);
};

// ==============================
// Types
// ==============================

const options = {
	appearance: ['primary', 'hero', 'neutral'],
	size: ['small', 'medium', 'large', 'xlarge'],
};

ButtonGroup.propTypes = {
	/**
	 * Button group button appearance.
	 *
	 * This prop is available to children via `ButtonGroupContext`.
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Button group button size.
	 *
	 * This prop is available to children via `ButtonGroupContext`.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Block mode.
	 *
	 * Fit button group width to its parent width.
	 */
	block: PropTypes.bool,

	/**
	 * Button group button input element’s name.
	 *
	 * This prop is available to children via `ButtonGroupContext`.
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Button group children
	 */
	children: PropTypes.node.isRequired,
};

ButtonGroup.defaultProps = {
	appearance: 'hero',
	size: 'medium',
	block: false,
};
