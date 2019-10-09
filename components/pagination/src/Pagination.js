/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Pagination: Pagination is used to navigate within a set of related views. This element allows navigation within both finite (a set number) and infinite (unknown number) of views.
 */
export const Pagination = ({ children, ...props }) => {
	const childrenWithProps = Children.map(children, (child, index) => {
		if (index === 0) {
			return cloneElement(child, { first: true });
		} else if (index === Children.count(children) - 1) {
			return cloneElement(child, { last: true });
		} else {
			return cloneElement(child, { middle: true });
		}
	});

	return (
		<ul
			css={{
				display: 'flex',
				paddingLeft: 0,
				margin: '1.3125rem 0',
				borderRadius: '3px',
				listStyle: 'none',
			}}
			{...props}
		>
			{childrenWithProps}
		</ul>
	);
};

// ==============================
// Types
// ==============================

Pagination.propTypes = {
	/**  Any renderable child */
	children: PropTypes.node,
};
