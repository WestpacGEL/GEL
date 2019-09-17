/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

export const ProgressRopeItem = ({ status, nested, children, ...props }) => {
	const common = {
		padding: `8px 56px 14px ${nested ? '48px' : '30px'}`,
		position: 'relative',

		/* 
		- need to fix the padding
		- move the padding to the a tag or conditional add extra to the last child li
		*/

		a: {
			color: '#686f74',
			textDecoration: 'none',
		},

		// the line
		'::before': {
			content: "''",
			display: 'block',
			position: 'absolute',
			borderLeft: `2px solid ${status === 'complete' ? '#d5002b' : '#d7d2cb'}`,
			top: 0,
			right: 36,
			bottom: 0,
			height: 'auto',
			transform: 'translateY(40%)',
		},

		// the circle
		':after': {
			content: "''",
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: 10,
			width: nested ? 6 : 14,
			height: nested ? 6 : 14,
			right: nested ? 34 : 30,
			border: `2px solid ${status === 'active' || status === 'complete' ? '#d5002b' : '#d7d2cb'}`,
			backgroundColor: nested
				? status === 'active' || status === 'complete'
					? '#d5002b'
					: '#d7d2cb'
				: '#fff',
		},
	};

	const styles = {
		complete: {
			a: {
				color: '#2d373e',
				textDecoration: 'none',
			},
		},
		active: {
			a: {
				color: '#d5002b',
				textDecoration: 'none',
			},
		},
	};

	return (
		<li css={{ ...common, ...styles[status] }} {...props}>
			{children}
		</li>
	);
};
