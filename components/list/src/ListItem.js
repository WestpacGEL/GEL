/** @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css, useTheme } from '@westpac/core';
import svgToTinyDataURI from 'mini-svg-data-uri';
import { List } from './List';

// ==============================
// Component
// ==============================
export const ListItem = ({ appearance, type, icon, spacing, children, ...props }) => {
	const { list } = useTheme();

	const linkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${type !==
		'unstyled' &&
		list.type.link
			.color}" fillRule="evenodd" points="14.588 12 8 18.588 9.412 20 17.412 12 9.412 4 8 5.412"/></svg>`;

	const tickSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${type !==
		'unstyled' &&
		list.type.tick.color}" points="8.6 15.6 4.4 11.4 3 12.8 8.6 18.4 20.6 6.4 19.2 5"/></svg>`;

	const style = {
		// Common styling
		common: {
			margin: spacing === 'large' ? '1.2rem 0' : '0.6rem 0',
			listStyle: type !== 'ordered' && 'none',
			paddingLeft: '1.9rem',
			position: 'relative',
		},

		// List type styling
		type: {
			bullet: {
				'::before': {
					content: '""',
					position: 'absolute',
					left: '0.4rem',
					top: '0.6rem',
					display: 'block',
					width: '0.8rem',
					height: '0.8rem',
					borderRadius: '50%',
					border: `1px solid ${list.type.bullet.appearance[appearance].color}`,
					backgroundColor: list.type.bullet.appearance[appearance].color,
				},

				'ul > li::before': {
					backgroundColor: 'transparent',
				},
			},
			link: {
				'::before': {
					content: "''",
					position: 'absolute',
					left: 0,
					top: '0.2rem',
					display: 'block',
					width: '1.6rem',
					height: '1.6rem',
					backgroundImage: `url("${svgToTinyDataURI(linkSVG)}")`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				},
			},
			tick: {
				'::before': {
					content: "''",
					position: 'absolute',
					left: 0,
					top: '0.2rem',
					display: 'block',
					width: '1.6rem',
					height: '1.6rem',
					backgroundImage: `url("${svgToTinyDataURI(tickSVG)}")`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				},
			},
			unstyled: {
				paddingLeft: 0,
				li: {
					paddingLeft: '1.9rem',
				},
			},
			icon: {
				paddingLeft: '2.3rem',
			},
			ordered: {
				paddingLeft: 0,
			},
		},
	};

	const childrenWithProps = Children.map(children, child =>
		isValidElement(child) && child.type === List
			? cloneElement(child, {
					appearance,
					type,
					icon,
					spacing,
					props,
			  })
			: child
	);

	let Icon;
	if (icon) Icon = icon;

	return (
		<li css={{ ...style.common, ...style.type[type] }}>
			{type === 'icon' && icon && (
				<Icon
					css={{ position: 'absolute', top: 0, left: 0 }}
					size="small"
					color={list.type.icon.color}
				/>
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
