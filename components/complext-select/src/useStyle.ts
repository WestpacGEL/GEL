import { useBrand, useMediaQuery } from '@westpac/core';
import { SelectProps } from './Select';

export const useStyles = ({
	size,
	width,
	inline,
	invalid,
	'aria-invalid': ariaInvalid,
}: SelectProps) => {
	const { COLORS, PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	// We’ll add !important to focus state styling to ensure it’s always visible, even with the useFocus helper
	const focus = Object.entries(PACKS.focus).reduce((acc, [key, val]) => {
		acc[key] = `${val} !important`;
		return acc;
	}, {});

	const caretSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="${COLORS.muted}" fillRule="evenodd" d="M0 0l7 8 7-8z"/></svg>`;
	const caretGap = '0.5rem';
	const caretWidth = '14px';
	const extras = `${caretWidth} + ${caretGap}`; // Add width for caret if a select

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
		fontSize: sizeMap[size].fontSize,
		...TYPE.bodyFont[400],
		lineHeight: sizeMap[size].lineHeight,
		color: COLORS.text,
		backgroundColor: '#fff',
		border: `${sizeMap[size].borderWidth}px solid ${
			invalid || ariaInvalid ? COLORS.danger : COLORS.borderDark
		}`,
		borderRadius: '0.1875rem',
		transition: 'border 0.2s ease',
		verticalAlign: inline && 'middle',
		padding: sizeMap[size].padding.join(' '),
		height: getHeight(size),
		maxWidth: width && getMaxWidth(size, width, extras),

		paddingRight: `calc(${sizeMap[size].padding[1]} + ${extras})`,
		backgroundImage: `url("${svgToTinyDataURI(caretSVG)}")`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: `right ${sizeMap[size].padding[1]} center`,

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
