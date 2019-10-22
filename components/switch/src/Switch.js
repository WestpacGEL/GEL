/** @jsx jsx */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { SwitchLabel } from './SwitchLabel';

// ==============================
// Context and consumer hook
// ==============================

const SwitchContext = createContext();

export const useSwitchContext = () => {
	const context = useContext(SwitchContext);
	if (!context) {
		throw new Error('Switch sub-components should be wrapped in a <Switch>.');
	}
	return context;
};

const sizeMap = {
	small: {
		width: '4.375rem',
		height: '1.875rem',
		borderRadius: '1.875rem',
		fontSize: '0.875rem',
	},
	medium: {
		width: '5rem',
		height: '2.25rem',
		borderRadius: '2.25rem',
		fontSize: '1rem',
	},
	large: {
		width: '5.5625rem',
		height: '2.625rem',
		borderRadius: '2.625rem',
		fontSize: '1rem',
	},
	xlarge: {
		width: '6rem',
		height: '3rem',
		borderRadius: '3rem',
		fontSize: '1.125rem',
	},
};

const responsiveMap = size => ({
	width: size.map(s => s && sizeMap[s].width),
	height: size.map(s => s && sizeMap[s].height),
	borderRadius: size.map(s => s && sizeMap[s].borderRadius),
	fontSize: size.map(s => s && sizeMap[s].fontSize),
});

const asArray = val => (Array.isArray(val) ? val : [val]);
// ==============================
// Component
// ==============================

/**
 * Switch: Switch component for the Westpac GEL
 */
export const Switch = ({ size, ...props }) => {
	const flexiSize = responsiveMap(asArray(size));

	return (
		<SwitchContext.Provider value={{ flexiSize }}>
			<SwitchLabel {...props} />
		</SwitchContext.Provider>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

Switch.propTypes = {
	/**
	 * Switch input element name
	 */
	name: PropTypes.string,

	/**
	 * On/off text.
	 *
	 * This prop takes an array where the first index is the "on" text and second index is the "off" text e.g. "['Yes', 'No']"
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Switch size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Block mode
	 */
	block: PropTypes.bool,

	/**
	 * Reverse the horizontal orientation. Renders the toggle on the left of the label text.
	 */
	flipped: PropTypes.bool,

	/**
	 * Enable ‘screen reader only’ label text mode.
	 */
	srOnlyText: PropTypes.bool,

	/**
	 * Switch on
	 */
	checked: PropTypes.bool,

	/**
	 * Disable the switch
	 */
	disabled: PropTypes.bool,

	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,

	/**
	 * Label text.
	 *
	 * This prop is required, but can be visually hidden by enabling "srOnlyText" mode.
	 */
	children: PropTypes.string.isRequired,
};

Switch.defaultProps = {
	size: 'medium',
	toggleText: ['On', 'Off'],
	block: false,
	flipped: false,
	srOnlyText: false,
	checked: false,
	disabled: false,
};
