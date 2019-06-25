/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css, useTheme } from '@westpac/core';
import { List } from './List';

// ==============================
// Utils
// ==============================
// ==============================
// Component
// ==============================

// need to handle key prop thing
export const ListItem = ({ appearance, color, children, icon: Icon, iconColor, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		child && child.type && child.type === List ? cloneElement(child, { appearance, color }) : child
	);

	const theme = useTheme();

	const common = {
		margin: '6px 0',
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
				border: `1px solid ${theme.colors[color].default || theme.colors[color]}`,
				backgroundColor: theme.colors[color].default || theme.colors[color],
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
				border: `solid ${theme.colors[color].default || theme.colors[color]}`, //probably need to use a set color?
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
				border: `solid ${theme.colors[color].default || theme.colors[color]}`, //probably need to use a set color?
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

	return (
		<li css={{ ...common, ...styles[appearance] }}>
			{appearance === 'icon' && (
				<span css={{ paddingRight: '5px' }}>
					<Icon size="small" color={iconColor || theme.colors.primary.default} />
				</span>
			)}
			{childrenWithProps}
		</li>
	);
};

// ==============================
// Types
// ==============================

// ==============================
// Questions
// ==============================
/* 
Naming convention

*/
