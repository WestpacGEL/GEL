/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { useSpring, animated } from 'react-spring';
import { useProgressRopeContext } from './ProgressRope';

export const ProgressRopeGroup = ({ index, label, children, ...props }) => {
	const { openGroup, lastGroup, handleClick } = useProgressRopeContext();
	const { COLORS } = useTheme();
	const anim = useSpring({ height: openGroup === index ? 'auto' : 0 });
	/* 
	TODO
	- add the animations
	- move inline
	*/

	const labelStyle = {
		position: 'relative',
		padding: '0.375rem 3.5rem 1.625rem 1.875rem',
		fontSize: '1rem',
		fontWeight: 'bold',
		display: 'flex',
		alignItems: 'center',
		border: 'none',
		background: 'none',
		touchAction: 'manipulation',
		cursor: 'pointer',
		color: lastGroup >= index ? COLORS.neutral : COLORS.tints.muted70,
		width: '100%',

		// the line
		'::before': {
			content: "''",
			display: 'block',
			position: 'absolute',
			borderLeft: `2px solid ${lastGroup >= index ? COLORS.primary : COLORS.border}`,
			top: 0,
			right: '2.25rem',
			bottom: 0,
			height: 'auto',
			transform: 'translateY(0.625rem)',
		},

		// the circle
		':after': {
			content: "''",
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: '0.625rem',
			width: '0.875rem',
			height: '0.875rem',
			right: '1.875rem',
			border: `2px solid ${lastGroup >= index ? COLORS.primary : COLORS.border}`,
			backgroundColor: '#fff',
		},
	};

	const listStyle = {
		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,
	};

	console.log('group ', index);
	return (
		<li {...props}>
			<button css={labelStyle} onClick={() => handleClick(index)}>
				{label}
			</button>
			<animated.ol style={anim} css={listStyle} hidden={openGroup === null || index !== openGroup}>
				{Children.map(children, (child, i) => cloneElement(child, { index: i, parentId: index }))}
			</animated.ol>
		</li>
	);
};

// ==============================
// Types
// ==============================

ProgressRopeGroup.propTypes = {
	label: PropTypes.string.isRequired,
};
