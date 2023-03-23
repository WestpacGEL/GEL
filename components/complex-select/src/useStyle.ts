import { getLabel, useBrand, useMediaQuery } from '@westpac/core';
import { ComplexSelectProps } from './ComplexSelect';
import { getHeight, getMaxWidth, sizeMap } from './_utils';
import svgToTinyDataURI from 'mini-svg-data-uri';

export const useStyles = ({ size, width, inline, invalid }: ComplexSelectProps) => {
	const { COLORS, PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	// We’ll add !important to focus state styling to ensure it’s always visible, even with the useFocus helper
	const focus = Object.entries(PACKS.focus).reduce((acc: Record<string, string>, [key, val]) => {
		acc[key] = `${val} !important`;
		return acc;
	}, {});

	return mq({
		// Normalize
		// =========

		// 1. Change the font styles in all browsers.
		// 2. Remove the margin in Firefox and Safari.
		// button, input, optgroup, select, textarea:
		fontFamily: 'inherit', // 1
		fontSize: '100%', // 1
		lineHeight: 1.15, // 1
		margin: 0, // 2
		display: 'flex',
		// Remove the inheritance of text transform in Firefox.
		// select:
		textTransform: 'none',

		// Change the font styles in all browsers.
		optgroup: {
			fontFamily: 'inherit',
			fontSize: 'inherit', //edited
			lineHeight: 'inherit', //edited
			margin: 0, //added (see above), above selector split due to style merge issues with input-group (select)
		},
		// =========

		label: getLabel('select'),
		boxSizing: 'border-box',
		width: inline ? ['100%', 'auto'] : '100%',
		appearance: 'none',
		...(size && {
			fontSize: sizeMap[size].fontSize,
			lineHeight: sizeMap[size].lineHeight,
			border: `${sizeMap[size].borderWidth}px solid ${invalid ? COLORS.danger : COLORS.borderDark}`,
			padding: sizeMap[size].padding.join(' '),
			backgroundPosition: `right ${sizeMap[size].padding[1]} center`,
		}),
		...TYPE.bodyFont[400],
		color: COLORS.text,
		backgroundColor: '#fff',
		borderRadius: '0.1875rem',
		transition: 'border 0.2s ease',
		verticalAlign: inline && 'middle',
		height: getHeight(size),
		maxWidth: width && getMaxWidth(size, width),
		backgroundRepeat: 'no-repeat',

		'::placeholder': {
			opacity: 1, // Override Firefox's unusual default opacity
			color: COLORS.tints.text50,
			...TYPE.bodyFont[300],
		},

		// Focus styling (for all, not just keyboard users), specifying element tag to increase specificity
		'select&:focus': {
			...focus,
		},

		// Disabled input
		':disabled': {
			cursor: 'not-allowed',
			opacity: 1, // iOS fix for unreadable disabled content
			backgroundColor: COLORS.background,
			borderStyle: 'dashed',
			color: COLORS.muted,
		},

		// Disable number input spinners/steppers
		'::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
			margin: 0,
			appearance: 'none',
		},

		// Remove the caret on `<select>`s in IE10+.
		'::-ms-expand': {
			display: 'none',
		},

		'@media print': {
			backgroundColor: 'transparent',

			':disabled': {
				backgroundColor: '#fff',
			},
		},
	})[0];
};
