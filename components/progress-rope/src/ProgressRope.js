/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================
// separate into own files
export const ProgressRopeItem = ({ status, children, ...props }) => {
	const theme = useTheme();
	const common = {
		padding: '8px 56px 14px 30px',
		position: 'relative',

		a: {
			color: '#686f74',
			textDecoration: 'none',
		},
		// the line
		'::before': {
			content: "''",
			display: 'block',
			position: 'absolute',
			borderLeft: `2px solid ${status === 'complete' ? 'red' : '#d7d2cb'}`,
			top: 0,
			right: 36,
			bottom: 0,
			height: 'auto',
			transform: 'translateY(40%)',
			// zIndex: 2,
		},

		// the circle
		':after': {
			content: "''",
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: 10,
			width: 14,
			height: 14,
			right: 30,
			border: `2px solid ${status === 'active' || status === 'complete' ? 'red' : '#d7d2cb'}`,
			backgroundColor: '#fff',
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
				color: 'red',
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

export const ProgressRopeGroup = ({ children, ...props }) => {
	return <ol>{children}</ol>;
};
// ==============================
// Component
// ==============================

export const ProgressRope = ({ current, children, ...props }) => {
	const childrenWithProps = Children.map(
		children,
		(child, i) => {
			if (i < current) {
				return cloneElement(child, { status: 'complete' });
			} else if (i === current) {
				return cloneElement(child, { status: 'active' });
			}
			return child;
		}
		// child.props.type === 'ProgressRopeItem'
	);

	const common = {
		//this is on a wrapping div...
		// paddingTop: 60,
		// paddingBottom: 60,

		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,
	};

	return <ol css={common}>{childrenWithProps}</ol>;
};

// ==============================
// Types
// ==============================

ProgressRope.propTypes = {
	status: PropTypes.string,
	/* I feel like I should use a different variable name */
	current: PropTypes.number,
};

ProgressRope.defaultProps = {};
