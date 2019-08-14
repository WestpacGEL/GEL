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
	const { listGroup } = useTheme();
	const common = {
		listStyle: 'none',
		margin: listGroup.margin,
		padding: listGroup.padding,
		display: 'inline-block',
		border: `${listGroup.borderWidth} solid ${listGroup.borderColor}`,
		borderBottom: '0 none',
		borderRadius: listGroup.borderRadius,

		'@media print': {
			borderColor: '#000',
		},
	};

	return <ul css={common}>{children}</ul>;
};

// ==============================
// Types
// ==============================

ListGroup.propTypes = {
	/**
	 * The content for this list group.
	 */
	children: PropTypes.node.isRequired,
};

ListGroup.defaultProps = {};
