/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================
// separate into own files
// to add review/submit step
export const ProgressRopeItem = ({ status, nested, children, ...props }) => {
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

export const ProgressRopeGroup = ({ label, children, ...props }) => {
	// this needs a different name

	const childrenWithProps = Children.map(
		children,
		(child, i) => {
			return cloneElement(child, { nested: true });
		}
		// child.props.type === 'ProgressRopeItem'
	);

	const labelStyle = {
		position: 'relative',
		padding: '6px 56px 26px 30px',
		fontSize: '16px',
		fontWeight: 'bold',
		display: 'flex',
		alignItems: 'center',
		border: 'none',
		background: 'none',
		touchAction: 'manipulation',
		cursor: 'pointer',
		color: '#2d373e',
		width: '100%',
		// the line
		'::before': {
			content: "''",
			display: 'block',
			position: 'absolute',
			// borderLeft: `2px solid ${status === 'complete' ? '#d5002b' : '#d7d2cb'}`,
			borderLeft: '2px solid #d7d2cb',
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
			width: 14,
			height: 14,
			right: 30,
			// border: `2px solid ${status === 'active' || status === 'complete' ? '#d5002b' : '#d7d2cb'}`,
			border: '2px solid #d7d2cb',
			backgroundColor: '#fff',
		},
	};

	const listStyle = {
		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,
	};

	return (
		<li>
			<button css={labelStyle}>{label}</button>
			<ol css={listStyle}>{childrenWithProps}</ol>
		</li>
	);
};
// ==============================
// Component
// ==============================

export const ProgressRope = ({ current, children, ...props }) => {
	// have to add logic here or pass some logic into progressRopeGroup
	/* 

	ProgressRopeGroup Props
	- status
		- active
			- if active
				- active child num 
		- complete

	if(child is progress rope group) {
		get children.count
	}

	Group 1, Count = 4
		- [0]: Step 1
		- [1]: Step 2
		- [2]: Step 3
		- [3]: Step 4
	Group, Count = 2
		- [4]: Step 5
		- [5]: Step 6

	currentIndex = 2;


	*/

	const childrenWithProps2 = () => {
		let childCount = 0;
		return Children.map(children, (child, i) => {
			if (child && child.type) {
				if (child.type === ProgressRopeGroup) {
					childCount += Children.count(child.props.children);
					if (childCount < current) {
						// <= ?
						return cloneElement(child, { status: 'active', current: childCount - current });
					}
				}
			}
		});
	};
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
