/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const GroupText = ({ text, active, overrides, ...props }) => <button {...props} />;

export const groupTextStyles = (_, { active }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		position: 'relative',
		padding: '0.375rem 3.5rem 1.625rem 1.875rem',
		fontSize: '1rem',
		display: 'flex',
		alignItems: 'center',
		border: 'none',
		background: 'none',
		touchAction: 'manipulation',
		cursor: 'pointer',
		color: active ? COLORS.neutral : COLORS.tints.muted70,
		width: '100%',
		...TYPE.bodyFont[700],

		// the line
		'::before': {
			content: "''",
			display: 'block',
			position: 'absolute',
			borderLeft: `2px solid ${active ? COLORS.primary : COLORS.border}`,
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
			border: `2px solid ${active ? COLORS.primary : COLORS.border}`,
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};
