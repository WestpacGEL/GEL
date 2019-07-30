/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css, useTheme } from '@westpac/core';
import svgToTinyDataURI from 'mini-svg-data-uri';
import { List } from './List';

// ==============================
// Component
// ==============================
export const ListItem = ({ appearance, type, icon, spacing, children, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		child && child.type && child.type === List
			? cloneElement(child, {
					appearance,
					type,
					icon,
					spacing,
					props,
			  })
			: child
	);

	const { list } = useTheme();

	const common = {
		margin: spacing === 'large' ? '12px 0' : '6px 0',
		listStyle: type !== 'ordered' ? 'none' : null,
		paddingLeft: 19,
		position: 'relative',
	};

	const linkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${
		list.link.color
	}" fillRule="evenodd" points="14.588 12 8 18.588 9.412 20 17.412 12 9.412 4 8 5.412"/></svg>`;

	const tickSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${type !==
		'unstyled' &&
		list.tick.color}" points="8.6 15.6 4.4 11.4 3 12.8 8.6 18.4 20.6 6.4 19.2 5"/></svg>`;

	const styles = {
		bullet: {
			'&::before': {
				content: '""',
				position: 'absolute',
				left: 4,
				top: 6,
				display: 'block',
				width: 8,
				height: 8,
				borderRadius: '50%',
				border: `1px solid ${list.bullet.appearance[appearance].color}`,
				backgroundColor: list.bullet.appearance[appearance].color,
			},

			'ul > li::before': {
				backgroundColor: 'transparent',
			},
		},
		link: {
			'&::before': {
				content: "''",
				position: 'absolute',
				left: 0,
				top: 2,
				display: 'block',
				width: 16,
				height: 16,
				backgroundImage: `url("${svgToTinyDataURI(linkSVG)}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
			},
		},
		tick: {
			'&::before': {
				content: "''",
				position: 'absolute',
				left: 0,
				top: 2,
				display: 'block',
				width: 16,
				height: 16,
				backgroundImage: `url("${svgToTinyDataURI(tickSVG)}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
			},
		},
		unstyled: {
			paddingLeft: 0,

			li: {
				paddingLeft: 19,
			},
		},
		icon: {
			paddingLeft: 0,

			li: {
				paddingLeft: 19,
			},
		},
		ordered: {
			paddingLeft: 0,
		},
	};

	let Icon;
	if (icon) Icon = icon;

	return (
		<li css={{ ...common, ...styles[type] }}>
			{type === 'icon' && icon && (
				<span css={{ paddingRight: '5px' }}>
					<Icon size="small" color={list.icon.color} />
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
	/** The appearance of the bullet list */
	appearance: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The type of the bullet */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),
	/** The size of space between list elements */
	spacing: PropTypes.oneOf(['medium', 'large']),
	/** The icon for list item */
	icon: PropTypes.func,
	/** Any renderable content */
	children: PropTypes.node,
};
