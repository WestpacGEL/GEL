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

Switch.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Switch.defaultProps = {
	size: 'medium',
};
