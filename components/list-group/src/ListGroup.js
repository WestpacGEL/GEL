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
export const ListGroup = ({ children }) => {
	const common = {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		display: 'inline-block',
		border: '1px solid #d7d2cb',
		borderBottom: '0 none',
		borderRadius: '3px',

		li: {
			margin: 0,
			padding: 0,
			borderBottom: '1px solid #d7d2cb',
			padding: '12px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',

			'>span': {
				paddingRight: 12,
			},
		},
	};

	return <ul css={common}>{children}</ul>;
};

// ==============================
// Types
// ==============================

ListGroup.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

ListGroup.defaultProps = {};
