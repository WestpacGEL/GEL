/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@westpac/core';
import { ListItem } from './ListItem';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================
export const List = ({ children, ...props }) => {
	// do i need to check that this is only being added to a list item?
	// or should I be checking that only ListItems are being passed as children
	const childrenWithProps = Children.map(children, child => {
		return cloneElement(child, props);
	});

	const common = css`
		margin: 0;
		padding: 0;
		list-style-type: none;
	`;

	// do I need this
	const styles = {};

	return <ul css={common}>{childrenWithProps}</ul>;
};

// ==============================
// Types
// ==============================

// ordered vs unordered??
// is iconColor here correct? do we allow them special colors for icon or make them only use the regular colors for icons?
List.propTypes = {
	/** The appearance of the list */
	appearance: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon']),
	/** The color of the bullet */
	color: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The size of space between list elements */
	size: PropTypes.oneOf(['regular', 'large']),
	/** The icon for list */
	icon: PropTypes.func,
	/** The color for the icon */
	iconColor: PropTypes.string,
};

List.defaultProps = {
	appearance: 'bullet',
	color: 'primary',
	size: 'regular',
};

// ==============================
// Questions
// ==============================
/* 
can a list with icons contain different icon bullets??
are we locking down the colors of the icons except for discs??
*/
