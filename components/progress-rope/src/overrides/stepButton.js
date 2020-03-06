/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const StepButton = ({
	grouped,
	visited,
	active,
	furthest,
	end,
	current,
	groupIndex,
	instanceId,
	groupListId,
	index,
	headingsTag,
	assistiveText,
	...rest
}) => <button type="button" disabled={!visited} {...rest} />;

export const stepButtonStyles = (_, { grouped, visited, active, furthest, end }) => {
	const { COLORS, PACKS } = useBrand();

	return {
		position: 'relative',
		fontSize: '14px',
		lineHeight: 1.428571429, //`<body>` line-height
		textAlign: 'left',
		padding: `8px 30px 14px ${grouped && !end ? '68px' : '56px'}`,
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
			zIndex: 2,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: grouped && !end ? '14px' : '10px',
			width: grouped && !end ? '10px' : '14px',
			height: grouped && !end ? '10px' : '14px',
			left: grouped && !end ? '32px' : '30px',
			border: `solid ${visited ? COLORS.primary : COLORS.border}`,
			borderWidth:
				visited && !furthest ? (grouped && !end ? '5px' : '7px') : visited ? '3px' : '2px', //a11y: filling with border for HCM support
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};
