/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const GroupButton = ({
	index,
	text,
	groupItemsId,
	current,
	active,
	complete,
	hidden,
	instanceIdPrefix,
	headingsTag,
	assistiveText,
	...rest
}) => <button type="button" {...rest} />;

export const groupButtonStyles = (_, { complete, active }) => {
	const { COLORS, PACKS, TYPE } = useBrand();

	return {
		position: 'relative',
		// padding: '0.375rem 3.5rem 1.625rem 1.875rem',
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
		// ...TYPE.bodyFont[700],

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// the line
		'::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 1,
			// borderLeft: `2px ${active ? `solid ${COLORS.primary}` : `dashed ${COLORS.border}`}`,
			borderLeft: active && `2px solid ${COLORS.primary}`,
			top: 0,
			// right: '2.25rem',
			left: '36px',
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
			top: '10px',
			width: '14px',
			height: '14px',
			// right: '1.875rem',
			left: '30px',
			border: `${complete ? '7px' : '2px'} ${
				active ? `solid ${COLORS.primary}` : `solid ${COLORS.border}`
			}`, //a11y: filling with border for HCM support
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};
