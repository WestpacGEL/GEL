/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@westpac/core';
import { ListItem } from './ListItem';

// ==============================
// Component
// ==============================
export const List = ({ children, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		child.props.appearance === 'icon' && child.props.icon
			? cloneElement(child, { ...props, icon: child.props.icon })
			: cloneElement(child, props)
	);

	const { appearance } = props;
	const ListType = appearance === 'ordered' ? 'ol' : 'ul';
	return (
		<ListType css={{ margin: 0, padding: appearance === 'ordered' ? '0 0 0 20px' : 0 }}>
			{childrenWithProps}
		</ListType>
	);
};

// ==============================
// Types
// ==============================
List.propTypes = {
	/** The appearance of the list */
	appearance: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),
	/** The color of the bullet */
	color: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The size of space between list elements */
	size: PropTypes.oneOf(['regular', 'large']),
	/** The icon for list */
	icon: PropTypes.func,
	/**  Children of List should be ListItem*/
	children: PropTypes.oneOfType([PropTypes.arrayOf(ListItem), ListItem]),
};

List.defaultProps = {
	appearance: 'bullet',
	color: 'primary',
	size: 'regular',
};
