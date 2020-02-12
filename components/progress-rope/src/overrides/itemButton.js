/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const ItemButton = ({
	index,
	groupIndex,
	end,
	visited,
	grouped,
	active,
	furthest,
	...rest
}) => <button type="button" disabled={!visited} {...rest} />;

export const itemButtonStyles = (_, { end, visited, grouped, active, furthest }) => {
	const { COLORS, PACKS } = useBrand();

	return {
		position: 'relative',
		fontSize: '0.875rem',
		lineHeight: 1.428571429, //`<body>` line-height
		textAlign: 'left',
		padding: `0.5rem 3.5rem 0.875rem ${grouped && !end ? '3rem' : '1.875rem'}`,
		border: 0,
		background: 'none',
		display: 'block',
		width: '100%',
		color: active ? COLORS.primary : visited ? COLORS.neutral : COLORS.tints.muted90,
		pointerEvents: active || visited ? 'auto' : 'none',
		appearance: 'none',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// the line
		'::before': {
			content: end ? 'none' : '""',
			display: 'block',
			position: 'absolute',
			zIndex: 0,
			borderLeft: `2px solid ${visited && !furthest ? COLORS.primary : COLORS.border}`,
			top: 0,
			bottom: 0,
			right: '2.25rem',
			transform: grouped && !end ? 'translateY(0.875rem)' : 'translateY(0.625rem)',
		},

		// the circle
		':after': {
			content: '""',
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: grouped && !end ? '0.875rem' : '0.625rem',
			width: grouped && !end ? '0.375rem' : '0.875rem',
			height: grouped && !end ? '0.375rem' : '0.875rem',
			right: grouped && !end ? '2.125rem' : '1.875rem',
			border: `2px solid ${visited ? COLORS.primary : COLORS.border}`,
			backgroundColor: grouped || end ? (visited ? COLORS.primary : COLORS.border) : '#fff',
			boxSizing: 'border-box',
		},
	};
};
