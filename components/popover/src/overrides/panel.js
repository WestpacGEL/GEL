/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { forwardRef } from 'react';

export const Panel = forwardRef(
	({ title, content, position, open, dismissible, ...props }, ref) => <div ref={ref} {...props} />
);

export const panelStyles = (_, { open, position }) => {
	const { COLORS } = useBrand();

	return {
		visibility: open && !position.empty ? 'visible' : 'hidden',
		position: 'absolute',
		left: '50%',
		bottom: position.placement === 'top' && '100%',
		transform: 'translateX(-50%)',
		[position.placement === 'top' ? 'marginBottom' : 'marginTop']: '0.9375rem',
		boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
		border: `1px solid ${COLORS.muted}`,
		borderRadius: 3,
		width: '17.625rem',
		backgroundColor: '#fff',
		pointerEvents: 'all',
		textAlign: 'left',

		'::before': {
			content: '""',
			position: 'absolute',
			[position.placement === 'top' ? 'bottom' : 'top']: '-0.8125rem',
			left: '50%',
			marginLeft: '-0.5rem',
			width: 0,
			[position.placement === 'top'
				? 'borderTop'
				: 'borderBottom']: `0.75rem solid ${COLORS.muted}`,
			borderRight: '0.5rem solid transparent',
			borderLeft: '0.5rem solid transparent',
			fontSize: 0,
			lineHeight: 0,
		},

		...(position.placement === 'top' && {
			'::after': {
				content: '""',
				position: 'absolute',
				bottom: '-0.6875rem',
				left: '50%',
				marginLeft: '-0.5rem',
				width: 0,
				borderTop: '0.75rem solid #fff',
				borderRight: '0.5rem solid transparent',
				borderLeft: '0.5rem solid transparent',
				fontSize: 0,
				lineHeight: 0,
			},
		}),
	};
};
