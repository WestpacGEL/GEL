/** @jsx jsx */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

export const FormContext = createContext({ size: null, spacing: null, inline: null });

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Form = ({ size, spacing, inline, children, ...props }) => {
	return (
		<FormContext.Provider value={{ size, spacing, inline }}>
			<form {...props}>{children}</form>
		</FormContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Form.propTypes = {
	/**
	 * The component vertical spacing.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(['medium', 'large']),

	/**
	 * Inline mode.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "false"
	 */
	inline: PropTypes.bool,
};

Form.defaultProps = {
	spacing: 'medium',
	inline: false,
};
