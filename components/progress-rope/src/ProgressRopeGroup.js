/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

export const ProgressRopeGroup = ({ label, current, isOpen, onClick, children, ...props }) => {
	const childrenWithProps = Children.map(children, (child, i) => {
		if (i < current) {
			return cloneElement(child, { status: 'complete', nested: true });
		} else if (i === current) {
			return cloneElement(child, { status: 'active', nested: true });
		}
		return cloneElement(child, { nested: true });
	});

	// should probably rename this
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
			borderLeft: `2px solid ${current !== undefined ? '#d5002b' : '#d7d2cb'}`,
			// borderLeft: '2px solid #d7d2cb',
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
			border: `2px solid ${current !== undefined ? '#d5002b' : '#d7d2cb'}`,
			// border: '2px solid #d7d2cb',
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
			<button css={labelStyle} onClick={onClick}>
				{label}
			</button>
			<ol css={listStyle} hidden={!isOpen}>
				{childrenWithProps}
			</ol>
		</li>
	);
};

ProgressRopeGroup.defaultProps = {
	isOpen: false,
};
