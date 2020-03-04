/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const ItemButton = ({
	groupItemsId,
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
		fontSize: '14px',
		lineHeight: 1.428571429, //`<body>` line-height
		textAlign: 'left',
		// padding: `0.5rem 3.5rem 0.875rem ${grouped && !end ? '3rem' : '1.875rem'}`,
		padding: '8px 30px 14px 56px',
		border: 0,
		background: 'none',
		display: 'block',
		width: '100%',
		color: active ? COLORS.primary : visited ? COLORS.neutral : COLORS.tints.muted90,
		fontWeight: active && 'bold',
		appearance: 'none',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',

		':disabled': {
			color: COLORS.tints.muted90,
			cursor: 'default',
		},
		/* ':disabled:active, :disabled:hover': {
			cursor: 'not-allowed',
		}, */

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// circle
		':after': {
			content: '""',
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: grouped && !end ? '14px' : '10px',
			width: grouped && !end ? '8px' : '14px',
			height: grouped && !end ? '8px' : '14px',
			// right: grouped && !end ? '2.125rem' : '1.875rem',
			left: grouped && !end ? '33px' : '30px',
			border: `${!furthest && visited ? (grouped && !end ? '4px' : '7px') : '2px'} solid ${
				visited ? COLORS.primary : COLORS.border
			}`, //a11y: filling with border for HCM support
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};
