/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

export const Toggle = props => <span {...props} />;

export const toggleStyles = (_, { size, checked }) => {
	const mq = useMediaQuery();
	const { COLORS, PACKS } = useBrand();
	const sizing = sizeMap(size);

	return mq({
		boxSizing: 'border-box',
		display: 'block',
		position: 'relative',
		border: `${sizing.borderWidth} solid ${checked ? COLORS.hero : COLORS.border}`,
		borderRadius: sizing.borderRadius,
		backgroundColor: checked ? COLORS.hero : '#fff',
		height: sizing.height,
		width: sizing.width,
		overflow: 'hidden',
		lineHeight: 1.5,
		transition: 'border .3s ease,background .3s ease',
		userSelect: 'none',

		// the thumb/dot
		'::after': {
			content: '""',
			height: `calc(${sizing.height} - ${sizing.borderWidth} - ${sizing.borderWidth})`,
			width: `calc(${sizing.height} - ${sizing.borderWidth} - ${sizing.borderWidth})`,
			display: 'block',
			position: 'absolute',
			left: checked ? '100%' : 0,
			transform: checked ? 'translateX(-100%)' : null,
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
		},
		'body:not(.isMouseMode) input:focus ~ &': {
			...PACKS.focus,
		},
	})[0];
};
