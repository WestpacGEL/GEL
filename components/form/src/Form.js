/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Form = ({ inline, ...props }) => <form {...props} />;

// ==============================
// Types
// ==============================

Form.propTypes = {
	/**
	 * Form inline layout mode.
	 *
	 * Defaults to "false"
	 */
	inline: PropTypes.bool,
};

Form.defaultProps = {
	inline: false,
};
