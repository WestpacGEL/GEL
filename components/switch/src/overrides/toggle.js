/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

export const Toggle = ({
	name,
	label,
	checked,
	size,
	block,
	flipped,
	toggleText,
	disabled,
	assistiveText,
	...rest
}) => <span {...rest} />;

export const toggleStyles = (_, { size, checked }) => {
	const mq = useMediaQuery();
	const { COLORS, PACKS } = useBrand();
	const sizing = sizeMap(size);
	const sizeCalcArr = sizing.height.map((height, i) =>
		height ? `calc(${height} - ${sizing.borderWidth[i]} - ${sizing.borderWidth[i]})` : null
	);

	return mq({
		boxSizing: 'border-box',
		display: 'block',
		position: 'relative',
		borderWidth: sizing.borderWidth,
		borderStyle: 'solid',
		borderColor: checked ? COLORS.hero : COLORS.border,
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
			boxSizing: 'border-box',
			content: '""',
			height: sizeCalcArr,
			width: sizeCalcArr,
			display: 'block',
			position: 'absolute',
			left: checked ? '100%' : 0,
			transform: checked ? 'translateX(-100%)' : null,
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			border: '1px solid transparent', //for high contrast mode
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
		},
		'body:not(.isMouseMode) input:focus ~ &': {
			...PACKS.focus,
		},
	})[0];
};
