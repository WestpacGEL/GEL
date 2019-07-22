/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css, useTheme } from '@westpac/core';
import { List } from './List';

// ==============================
// Utils
// ==============================
const getListIcon = ({ appearance, color, icon: Icon }) => {
	const { list } = useTheme();

	const style = {
		position: 'absolute',
		left: 0,
		top: 2,
	};

	switch (appearance) {
		case 'bullet':
			return (
				<svg
					aria-labelledby="title-bullet-list"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					width="16px"
					height="16px"
					viewBox="0 0 16 16"
					css={style}
				>
					<circle
						r="4"
						cx="8"
						cy="8"
						stroke={`${list[appearance][color].color}`}
						strokeWidth="1"
						fill={`${list[appearance][color].color}`}
					/>
				</svg>
			);

		case 'link':
			return (
				<svg
					aria-labelledby="title-link"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					css={style}
				>
					<polygon
						fill={`${list[appearance].color}`}
						fillRule="evenodd"
						points="14.588 12 8 18.588 9.412 20 17.412 12 9.412 4 8 5.412"
					/>
				</svg>
			);

		case 'tick':
			return (
				<svg
					aria-labelledby="title-tick-list"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					css={style}
				>
					<polygon
						fill={`${list[appearance].color}`}
						points="8.6 15.6 4.4 11.4 3 12.8 8.6 18.4 20.6 6.4 19.2 5"
					/>
				</svg>
			);
		case 'unstyled':
			return;
		case 'icon':
			return <Icon size="small" css={style} color={list[appearance].color} />;
	}
};

// ==============================
// Component
// ==============================
export const ListItem = ({ appearance, color, icon, size, children, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		child && child.type && child.type === List
			? cloneElement(child, {
					appearance,
					color,
					icon,
					size,
					props,
			  })
			: child
	);

	const common = {
		margin: size === 'large' ? '12px 0' : '6px 0',
		display: 'block',
		position: 'relative',
	};

	const styles = {
		bullet: {
			paddingLeft: 19,

			'& & circle': {
				fill: 'transparent',
			},
		},
		link: {
			paddingLeft: 19,
		},
		tick: {
			paddingLeft: 19,
		},
		unstyled: {
			paddingLeft: 0,

			li: {
				paddingLeft: 19,
			},
		},
		icon: {
			paddingLeft: 23,
		},
		ordered: {
			display: 'list-item',
		},
	};

	return (
		<li css={{ ...common, ...styles[appearance] }} {...props}>
			{getListIcon({ appearance, color, icon })}
			{childrenWithProps}
		</li>
	);
};

// ==============================
// Types
// ==============================
ListItem.propTypes = {
	/** The appearance of the list item */
	appearance: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),
	/** The color of the bullet */
	color: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The size of space between list elements */
	size: PropTypes.oneOf(['regular', 'large']),
	/** The icon for list item */
	icon: PropTypes.func,
	/** Any renderable content */
	children: PropTypes.node,
};
