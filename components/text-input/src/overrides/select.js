/** @jsx jsx */

import {
	jsx,
	useBrand,
	useMediaQuery,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import svgToTinyDataURI from 'mini-svg-data-uri';
import { sizeMap, getHeight, getMaxWidth } from '../_utils';
import { defaultProps } from '../Select';

// ==============================
// Component
// ==============================

const Select = ({ state: _, ...rest }) => <select {...rest} />;

const BlenderSelect = ({ className, ...rest }) => (
	<Select className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const selectStyles = (_, { size, width, inline, invalid, ...rest }) => {
	const { COLORS, PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	// We'll add important to focus state for text inputs so they are always visible even with the useFocus helper
	const focus = { ...PACKS.focus };
	focus.outline += ' !important';
	const caretSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="${COLORS.muted}" fillRule="evenodd" d="M0 0l7 8 7-8z"/></svg>`;
	const caretGap = '0.5rem';
	const caretWidth = '14px';
	const extras = `${caretWidth} + ${caretGap}`; // Add width for caret if a select

	return mq({
		// Normalize
		// =========

		// Remove the margin in Firefox and Safari.
		// select, optgroup:
		margin: 0,

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
			invalid || rest.ariaInvalid ? COLORS.danger : COLORS.borderDark
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

		// Focus styling (for all, not just keyboard users)
		':focus': {
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

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { size, width, inline, invalid, ariaInvalid }) => {
	const props = { size, width, inline, invalid, ariaInvalid };
	const baseStyles = selectStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = selectStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'size':
			label = `${label}-${size}`;
			break;
		case 'width':
			label = `${label}-width-${width}`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const selectAttributes = () => null;

const blenderAttributes = (_, { size, width, inline, invalid }) => ({
	className: classNames({
		[`__convert__select-${size}`]: size !== defaultProps.size,
		[`__convert__select-width-${width}`]: width,
		[`__convert__select-inline`]: inline,
		[`__convert__select-invalid`]: invalid,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultSelect = {
	component: Select,
	styles: selectStyles,
	attributes: selectAttributes,
};

export const blenderSelect = {
	component: BlenderSelect,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
