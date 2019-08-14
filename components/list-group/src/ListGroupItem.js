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

/**
 * List Group: List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content. Ideal for settings pages or preferences.
 */
export const ListGroupItem = ({ children }) => {
	const common = {
		margin: 0,
		padding: 0,
		borderBottom: '1px solid #d7d2cb',
		padding: '12px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	};

	return <li css={common}>{children}</li>;
};

// ==============================
// Types
// ==============================

ListGroupItem.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

ListGroupItem.defaultProps = {};
