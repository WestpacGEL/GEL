/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const GroupButton = ({ index, text, active, ...rest }) => <button type="button" {...rest} />;

export const groupButtonStyles = (_, { active }) => {
	const { COLORS, PACKS, TYPE } = useBrand();

	return {
		position: 'relative',
		// padding: '0.375rem 3.5rem 1.625rem 1.875rem',
		padding: '0.375rem 1.875rem 1.625rem 3.5rem',
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
		...TYPE.bodyFont[700],

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// the line
		'::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 1,
			borderLeft: `2px solid ${active ? COLORS.primary : COLORS.border}`,
			top: 0,
			// right: '2.25rem',
			left: '2.25rem',
			bottom: 0,
			height: 'auto',
			transform: 'translateY(0.875rem)',
		},

		// the circle
		':after': {
			content: '""',
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: '0.625rem',
			width: '0.875rem',
			height: '0.875rem',
			// right: '1.875rem',
			left: '1.875rem',
			border: `2px solid ${active ? COLORS.primary : COLORS.border}`,
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};
