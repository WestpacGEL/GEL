/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { useProgressRopeContext } from './ProgressRope';

export const ProgressRopeItem = ({ index, parentId, review, children, ...props }) => {
	// I dont think this works for group
	const { grouped, activeGroup, activeStep } = useProgressRopeContext();
	// probably dont need grouped, can check if parentid is set

	// is there a nicer way to do this?
	let status = 'incomplete';

	// really need to make this better...since this is ugly af
	if (
		(grouped && parentId === activeGroup && activeStep === index) ||
		(!grouped && activeStep === index)
	) {
		status = 'active';
	} else if (
		(grouped && parentId === activeGroup && activeStep > index) ||
		(!grouped && activeStep > index)
	) {
		status = 'complete';
	} else if (grouped && activeGroup > parentId) {
		status = 'complete';
	}

	const common = {
		padding: `8px 56px 14px ${grouped && !review ? '48px' : '30px'}`,
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
			content: review ? ' none' : "''",
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
			width: grouped && !review ? 6 : 14,
			height: grouped && !review ? 6 : 14,
			right: grouped && !review ? 34 : 30,
			border: review
				? 'none'
				: `2px solid ${status === 'active' || status === 'complete' ? '#d5002b' : '#d7d2cb'}`,
			backgroundColor: grouped
				? status === 'active' || status === 'complete'
					? '#d5002b'
					: '#d7d2cb'
				: review
				? '#d7d2cb'
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

ProgressRopeItem.defaultProps = {
	review: false,
};
