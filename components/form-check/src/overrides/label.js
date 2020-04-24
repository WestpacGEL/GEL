/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Label = ({ state, ...rest }) => <label {...rest} />;

const labelStyles = (_, { disabled, type, size }) => {
	const { COLORS, PACKS } = useBrand();

	const sizeMap = {
		medium: {
			paddingTop: '0.125rem',
			paddingBottom: '0.125rem',
			gap: '0.375rem',
			width: '1.5rem',
			height: '1.5rem',
			checkbox: {
				width: '0.875rem',
				height: '0.5rem',
				stroke: '0.1875rem',
				tweak: '-0.125rem',
			},
			radio: {
				width: '0.75rem',
				height: '0.75rem',
				tweak: '0rem', //must state 'rem', used in calc()
			},
		},
		large: {
			paddingTop: '0.3125rem',
			paddingBottom: '0.3125rem',
			gap: '0.625rem',
			width: '1.875rem',
			height: '1.875rem',
			checkbox: {
				width: '1.125rem',
				height: '0.625rem',
				stroke: '0.25rem',
				tweak: '-0.125rem',
			},
			radio: {
				width: '1rem',
				height: '1rem',
				tweak: '0rem', //must state 'rem', used in calc()
			},
		},
	};

	const checkWidth = sizeMap[size][type].width;
	const checkHeight = sizeMap[size][type].height;
	const checkTweak = sizeMap[size][type].tweak;
	const checkboxStroke = sizeMap[size]['checkbox'].stroke;

	return {
		display: 'inline-block',
		paddingTop: sizeMap[size].paddingTop,
		paddingBottom: sizeMap[size].paddingBottom,
		paddingLeft: sizeMap[size].gap,
		marginBottom: 0,
		cursor: 'pointer',
		touchAction: 'manipulation', // remove 300ms pause on mobile

		// Control outline
		'::before': {
			content: '""',
			boxSizing: 'border-box',
			position: 'absolute',
			top: 0,
			left: 0,
			width: sizeMap[size].width,
			height: sizeMap[size].height,
			border: `1px solid ${disabled ? COLORS.border : COLORS.hero}`,
			background: disabled ? COLORS.light : 'transparent',
			borderRadius: type === 'radio' ? '50%' : 3,

			// Focus state
			'body:not(.isMouseMode) input:focus + &': {
				...PACKS.focus,
			},

			// Disabled state
			'input:disabled + &, fieldset:disabled &': {
				borderColor: COLORS.border,
				backgroundColor: COLORS.light,
			},
		},

		// Control 'check' (tick or dot)

		'input:checked + &::after': {
			content: '""',
			boxSizing: 'border-box',
			position: 'absolute',
			border: `solid ${disabled ? COLORS.border : COLORS.hero}`,
			top: `calc(((${sizeMap[size].height} - ${checkHeight}) / 2) + ${checkTweak})`,
			left: `calc((${sizeMap[size].width} - ${checkWidth}) / 2)`,
			width: type === 'radio' ? 0 : checkWidth,
			height: type === 'radio' ? 0 : checkHeight,
			borderWidth:
				type === 'radio' ? `calc(${checkWidth} / 2)` : `0 0 ${checkboxStroke} ${checkboxStroke}`,
			borderRadius: type === 'radio' && '50%',
			background: type === 'radio' && COLORS.hero,
			transform: type === 'checkbox' && 'rotate(-54deg)',

			// Fix bug in IE11 caused by transform rotate (-54deg)
			borderTopColor: type === 'checkbox' && 'transparent',

			'input:disabled + &, fieldset:disabled &': {
				borderColor: COLORS.border,
			},
		},

		// Disabled state
		'input:disabled + &, fieldset:disabled &': {
			cursor: 'default',
			color: COLORS.muted,
		},
	};
};

const labelAttributes = (_, { optionId }) => ({ htmlFor: optionId });

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};
