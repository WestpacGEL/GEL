/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { useProgressRopeContext } from './ProgressRope';

export const ProgressRopeItem = ({ index, parentId, review, children, ...props }) => {
	const { grouped, activeGroup, activeStep, status } = useProgressRopeContext();
	const { COLORS } = useTheme();

	let itemStatus = 'incomplete';

	if (
		(grouped && ((parentId === activeGroup && index === activeStep) || activeStep == 'review')) ||
		(!grouped && activeStep === index)
	) {
		itemStatus = 'active';
	} else if (
		(grouped && ((parentId === activeGroup && activeStep > index) || activeGroup > parentId)) ||
		(!grouped && activeStep > index) ||
		status === 'complete'
	) {
		itemStatus = 'complete';
	}

	//
	/* 
	TODO
	- move inline
	*/

	const linkColor = {
		incomplete: COLORS.tints.muted90,
		active: COLORS.primary,
		complete: COLORS.neutral,
	};
	const common = {
		padding: `0.5rem 3.5rem 0.875rem ${grouped && !review ? '3rem' : '1.875rem'}`,
		position: 'relative',

		/* 
		- need to fix the padding
		- move the padding to the a tag or conditional add extra to the last child li
		*/

		a: {
			color: linkColor[itemStatus],
			textDecoration: 'none',
		},

		// the line
		'::before': {
			content: review ? 'none' : "''",
			display: 'block',
			position: 'absolute',
			borderLeft: `2px solid ${itemStatus === 'complete' ? COLORS.primary : COLORS.border}`,
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
			width: grouped && !review ? '0.375rem' : '0.875rem',
			height: grouped && !review ? '0.375rem' : '0.875rem',
			right: grouped && !review ? '2.125rem' : '1.875rem',
			border: review
				? 'none'
				: `2px solid ${itemStatus === 'incomplete' ? COLORS.border : COLORS.primary}`,
			backgroundColor:
				grouped || review ? (itemStatus === 'incomplete' ? COLORS.border : COLORS.primary) : '#fff',
		},

		':last-child': {
			...(grouped && !review && { paddingBottom: '2.75rem' }),
		},
	};

	return (
		<li css={{ ...common }} {...props}>
			{children}
		</li>
	);
};

// ==============================
// Types
// ==============================
// do I need to set a default prop on
ProgressRopeItem.defaultProps = {
	review: false,
};
