/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { useProgressRopeContext } from './ProgressRope';

export const ProgressRopeGroup = ({ index, label, children, ...props }) => {
	const { openGroup, activeGroup, handleClick } = useProgressRopeContext();

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
			borderLeft: `2px solid ${activeGroup >= index ? '#d5002b' : '#d7d2cb'}`,
			// borderLeft: '2px solid #d7d2cb',
			top: 0,
			right: 36,
			bottom: 0,
			height: 'auto',
			transform: 'translateY(30%)',
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
			border: `2px solid ${activeGroup >= index ? '#d5002b' : '#d7d2cb'}`,
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
		<li {...props}>
			<button css={labelStyle} onClick={() => handleClick(index)}>
				{label}
			</button>
			<ol css={listStyle} hidden={index !== openGroup}>
				{Children.map(children, (child, i) => cloneElement(child, { index: i, parentId: index }))}
			</ol>
		</li>
	);
};
