/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { useProgressRopeContext } from './ProgressRope';

export const ProgressRopeItem = ({ index, parentId, review, children, ...props }) => {
	const { grouped, currStep, currGroup, lastStep, lastGroup, status } = useProgressRopeContext();
	const [itemState, setItemState] = useState({ status: 'incomplete', visited: false });

	const { COLORS } = useTheme();
	// console.log(
	// 	'grouped: ',
	// 	grouped,
	// 	'currGroup: ',
	// 	currGroup,
	// 	'parentId: ',
	// 	parentId,
	// 	'currStep: ',
	// 	currStep,
	// 	'index: ',
	// 	index
	// );

	useEffect(() => {
		if (
			(grouped && (currGroup === parentId && currStep === index)) ||
			currStep === 'review' ||
			(!grouped && currStep === index)
		) {
			setItemState({ ...itemState, status: 'active' });
		} else if (
			(grouped && (lastGroup >= parentId && lastStep >= index)) ||
			(!grouped && lastStep > index) ||
			status === 'complete'
		) {
			setItemState({ status: 'complete', visited: true });
		}
	}, [currStep, currGroup, lastStep, lastGroup]);

	// let itemStatus = 'incomplete';

	// can keep an internal state? If completed we mark it as so
	// then for styling we can run an effect to manage the renders of this?
	// maybe I dont need this lastStep, lastGroup stuff I use internal state to manage the style
	// need to look into this grouping, maybe I can refactor again?
	// if (
	// 	(grouped && (currGroup === parentId && currStep === index)) ||
	// 	currStep === 'review' ||
	// 	(!grouped && currStep === index)
	// ) {
	// 	itemStatus = 'active';
	// } else if (
	// 	(grouped && (lastGroup >= parentId && lastStep >= index)) ||
	// 	(!grouped && lastStep > index) ||
	// 	status === 'complete'
	// ) {
	// 	// might need to make this state, should optimise this
	// 	itemStatus = 'complete';
	// }

	// console.log('step: ', index, 'status: ', itemStatus);
	// //
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
			color: linkColor[itemState.status],
			textDecoration: 'none',
			pointerEvents: itemState.status === 'incomplete' ? 'none' : 'auto',
		},

		// the line
		'::before': {
			content: review ? 'none' : "''",
			display: 'block',
			position: 'absolute',
			borderLeft: `2px solid ${itemState.visited ? COLORS.primary : COLORS.border}`,
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
				: `2px solid ${itemState.status === 'incomplete' ? COLORS.border : COLORS.primary}`,
			backgroundColor:
				grouped || review
					? itemState.status === 'incomplete'
						? COLORS.border
						: COLORS.primary
					: '#fff',
		},

		':last-child': {
			...(grouped && !review && { paddingBottom: '2.75rem' }),
		},
	};

	// console.log('index', index, 'state', itemState);
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
