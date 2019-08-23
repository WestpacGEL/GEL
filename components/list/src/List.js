/* @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@westpac/core';
import { ListItem } from './ListItem';

// ==============================
// Component
// ==============================
export const List = ({ children, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		isValidElement(child) && child.props.type === 'icon' && child.props.icon
			? cloneElement(child, { ...props, icon: child.props.icon })
			: cloneElement(child, props)
	);

	const { type } = props;
	const ListType = type === 'ordered' ? 'ol' : 'ul';
	return (
		<ListType css={{ margin: 0, padding: type === 'ordered' ? '0 0 0 2rem' : 0 }}>
			{childrenWithProps}
		</ListType>
	);
};

// ==============================
// Types
// ==============================
List.propTypes = {
	/** The appearance of the bullet list */
	appearance: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The type of the bullet */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),
	/** The size of space between list elements */
	spacing: PropTypes.oneOf(['medium', 'large']),
	/** The icon for list */
	icon: PropTypes.func,
	/**  Any renderable child */
	children: PropTypes.node,
};

List.defaultProps = {
	appearance: 'hero',
	type: 'bullet',
	spacing: 'medium',
};
