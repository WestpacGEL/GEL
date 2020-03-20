/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const GroupButton = ({ state, ...rest }) => <button type="button" {...rest} />;

const groupButtonStyles = (_, { complete, active }) => {
	const { COLORS, PACKS, TYPE } = useBrand();

	return {
		position: 'relative',
		padding: '6px 30px 26px 56px',
		fontSize: '1rem',
		lineHeight: '1.428571429', //`<body>` line-height
		textAlign: 'left',
		display: 'block',
		width: '100%',
		border: 0,
		background: 'none',
		touchAction: 'manipulation',
		cursor: 'pointer',
		color: active ? COLORS.neutral : COLORS.tints.muted70,

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// visited line
		'::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 1,
			borderLeft: active && `2px solid ${COLORS.primary}`,
			top: 0,
			left: '2.25rem',
			bottom: 0,
			height: 'auto',
			transform: 'translateY(0.875rem)',
		},

		// circle
		'::after': {
			content: '""',
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: '0.625rem',
			width: '0.875rem',
			height: '0.875rem',
			left: '1.875rem',
			border: `solid ${active ? COLORS.primary : COLORS.border}`,
			borderWidth: complete ? '0.4375rem' : active ? '3px' : '2px', //a11y: filling with border for HCM support
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};

const groupButtonAttributes = (_, { hidden, groupListId }) => ({
	'aria-expanded': !hidden,
	'aria-controls': groupListId,
});

export const defaultGroupButton = {
	component: GroupButton,
	styles: groupButtonStyles,
	attributes: groupButtonAttributes,
};
