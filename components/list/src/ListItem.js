/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css, useTheme } from '@westpac/core';
import { List } from './List';
import { ArrowRightIcon, TickIcon } from '../../icon/src';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================
// const common = {}
// const styles = {}
// css={{ ...common, ...styles[appearance] }}

// should have appearance prop to change the icon type
// separate icon prop to pass in the custom icon

// questions
//

// need to handle key prop thing
export const ListItem = ({ appearance, color, children, ...props }) => {
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
	};

	const Icon = () =>
		appearance === 'link' ? (
			<ArrowRightIcon size="small" color={theme.colors.primary.default} />
		) : appearance === 'tick' ? (
			<TickIcon size="small" />
		) : null;

	return (
		<li css={{ ...common, ...styles[appearance] }}>
			<Icon />
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
appeareance??

*/
