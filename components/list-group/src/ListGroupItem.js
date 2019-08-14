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
	const { listGroup } = useTheme();
	const common = {
		margin: listGroup.margin,
		borderBottom: `${listGroup.borderWidth} solid ${listGroup.borderColor}`,
		padding: listGroup.listGroupItem.padding,
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
	 * The content for this list group item.
	 */
	children: PropTypes.node,
};

ListGroupItem.defaultProps = {};
