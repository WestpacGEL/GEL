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

// ==============================
// Component
// ==============================

/**
 * Switch: Switch component for the Westpac GEL
 */
export const Switch = ({ size, ...props }) => (
	<SwitchContext.Provider value={{ size }}>
		<SwitchLabel {...props} />
	</SwitchContext.Provider>
);

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
