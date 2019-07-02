/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@westpac/core';

// ==============================
// Component
// ==============================
export const List = ({ children, ...props }) => {
	const childrenWithProps = Children.map(children, child => {
		return cloneElement(child, props);
	});

	return (
		<ul css={{ margin: 0, padding: 0, listStyleType: 'none' }} {...props}>
			{childrenWithProps}
		</ul>
	);
};

// ==============================
// Types
// ==============================
List.propTypes = {
	/** The appearance of the list */
	appearance: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon']),
	/** The color of the bullet */
	color: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The size of space between list elements */
	size: PropTypes.oneOf(['regular', 'large']),
	/** The icon for list */
	icon: PropTypes.func,
};

List.defaultProps = {
	appearance: 'bullet',
	color: 'primary',
	size: 'regular',
};
