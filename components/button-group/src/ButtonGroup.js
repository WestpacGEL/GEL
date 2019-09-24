/** @jsx jsx */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Context and consumer hook
// ==============================

const ButtonGroupContext = createContext();

export const useButtonGroupContext = () => {
	const context = useContext(ButtonGroupContext);
	if (!context) {
		throw new Error('<ButtonGroupButton> should be wrapped in a <ButtonGroup>.');
	}
	return context;
};

// ==============================
// Component
// ==============================

export const ButtonGroup = ({ appearance, size, isBlock, name, children, ...props }) => {
	return (
		<ButtonGroupContext.Provider value={{ appearance, size, name }}>
			<div
				css={{
					display: isBlock ? 'flex' : 'inline-flex',
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
	appearance: ['primary', 'hero', 'neutral', 'faint'],
	size: ['small', 'medium', 'large', 'xlarge'],
};

ButtonGroup.propTypes = {
	/**
	 * Button group button appearance.
	 *
	 * This prop is passed to children.
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Button group button size.
	 *
	 * This prop is passed to children.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Block mode.
	 *
	 * Fit button group width to its parent width.
	 */
	isBlock: PropTypes.bool,

	/**
	 * Button group button input element’s name.
	 *
	 * This prop is passed to children.
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
	isBlock: false,
};
