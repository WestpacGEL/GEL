/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { sizeMap } from './_utils';

const Toggle = ({ state, ...rest }) => <span {...rest} />;

const toggleStyles = (_, { size }) => {
	const mq = useMediaQuery();
	const { COLORS, PACKS } = useBrand();
	const sizing = sizeMap(size);
	const sizeArr = sizing.height.map((h) => h || null);
	const borderWidthArr = sizeArr.map((w) => w && `${parseFloat(w) / 2}rem`);

	return mq({
		label: getLabel('switch-toggle', { size }),
		display: 'block',
		position: 'relative',
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: sizing.borderRadius,
		backgroundColor: '#fff',
		height: sizing.height,
		width: sizing.width,
		overflow: 'hidden',
		transition: 'border .3s ease,background .3s ease',
		userSelect: 'none',

		// Toggle thumb/dot and high contrast mode 'on' fill
		'::after, ::before': {
			boxSizing: 'border-box',
			content: '""',
			position: 'absolute',
		},

		// Toggle thumb/dot
		'::after': {
			height: sizeArr,
			width: sizeArr,
			display: 'block',
			left: 0,
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			boxShadow: '0.1875rem 0 0.375rem 0 rgba(0,0,0,0.53)',
			transition: 'all .3s ease',
		},

		'input:checked ~ &': {
			border: `1px solid ${COLORS.hero}`,
			backgroundColor: COLORS.hero,

			'&::after': {
				left: '100%',
				transform: 'translateX(-100%)',
			},

			// a11y: high contrast mode 'on' fill
			'&::before': {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				border: 'solid transparent',
				borderWidth: borderWidthArr,
			},
		},

		'body:not(.isMouseMode) input:focus ~ &': {
			...PACKS.focus,
		},
	})[0];
};

const toggleAttributes = () => null;

export const defaultToggle = {
	component: Toggle,
	styles: toggleStyles,
	attributes: toggleAttributes,
};
