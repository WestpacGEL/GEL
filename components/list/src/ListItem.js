/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css, useTheme } from '@westpac/core';
import { List } from './List';

// ==============================
// Component
// ==============================

export const ListItem = ({ appearance, color, icon, size, children, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		child && child.type && child.type === List
			? cloneElement(child, { appearance, color, icon, size, props })
			: child
	);

	const { colors } = useTheme();

	const common = {
		margin: size === 'large' ? '12px 0' : '6px 0',
		display: 'block',
		paddingLeft: '19px',
		position: 'relative',
	};

	const styles = {
		bullet: {
			'&::after': {
				content: '""',
				position: 'absolute',
				left: '4px',
				top: '6px',
				display: 'block',
				width: '8px',
				height: '8px',
				borderRadius: '50%',
				border: `1px solid ${colors[color].default || colors[color]}`,
				backgroundColor: colors[color].default || colors[color],
			},

			'ul > li::after': {
				backgroundColor: 'transparent',
			},
		},
		link: {
			'&::after': {
				content: '""',
				position: 'absolute',
				left: '0',
				top: '4px',
				display: 'block',
				width: '8px',
				height: '8px',
				border: `solid ${colors[color].default || colors[color]}`, //probably need to use a set color?
				borderWidth: '1.5px 1.5px 0 0',
				transform: 'rotate(45deg)',
			},
		},
		tick: {
			'&::after': {
				content: '""',
				position: 'absolute',
				left: '0',
				top: '4px',
				display: 'block',
				width: '14px',
				height: '6px',
				border: `solid ${colors[color].default || colors[color]}`, //probably need to use a set color?
				borderWidth: '0 0 1.5px 1.5px',
				borderTopColor: 'transparent',
				transform: 'rotate(-54deg)',
			},
		},
		unstyled: {
			paddingLeft: 0,

			li: {
				paddingLeft: '19px',
			},
		},
		icon: {
			paddingLeft: 0,

			li: {
				paddingLeft: '19px',
			},
		},
	};

	const Icon = icon;

	return (
		<li css={{ ...common, ...styles[appearance] }} {...props}>
			{appearance === 'icon' && (
				<span css={{ paddingRight: '5px' }}>
					<Icon size="small" color={colors.primary.default} />
				</span>
			)}
			{childrenWithProps}
		</li>
	);
};

// ==============================
// Types
// ==============================
ListItem.propTypes = {
	/** The appearance of the list item */
	appearance: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon']),
	/** The color of the bullet */
	color: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The size of space between list elements */
	size: PropTypes.oneOf(['regular', 'large']),
	/** The icon for list item */
	icon: PropTypes.func,
};
