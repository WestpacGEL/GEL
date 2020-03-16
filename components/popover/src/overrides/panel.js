/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { forwardRef } from 'react';

const Panel = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

const panelStyles = (_, { open, position }) => {
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
		padding: '24px 30px 24px 18px',

		// Arrow
		'::before, ::after': {
			content: '""',
			[position.placement === 'top' ? 'top' : 'bottom']: '100%',
			left: '50%',
			border: 'solid transparent',
			position: 'absolute',
			height: 0,
			width: 0,
			pointerEvents: 'none',
		},
		'::before': {
			borderLeftWidth: '8px',
			borderRightWidth: '8px',
			marginLeft: '-8px',
			[position.placement === 'top' ? 'borderTop' : 'borderBottom']: `12px solid ${COLORS.muted}`,
		},
		'::after': {
			borderLeftWidth: '7px',
			borderRightWidth: '7px',
			marginLeft: '-7px',
			[position.placement === 'top' ? 'borderTop' : 'borderBottom']: '11px solid #fff',
		},
	};
};

const panelAttributes = (_, { instanceId }) => ({ id: instanceId });

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};
