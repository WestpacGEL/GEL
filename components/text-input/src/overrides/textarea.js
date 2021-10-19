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
import { sizeMap, getMaxWidth } from '../_utils';
import { defaultProps } from '../Textarea';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Textarea = forwardRef(({ state: _, ...rest }, ref) => <textarea ref={ref} {...rest} />);

const BlenderTextarea = ({ className, ...rest }) => (
	<Textarea className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const textareaStyles = (_, { size, width, inline, invalid, ...rest }) => {
	const { COLORS, PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	// We'll add important to focus state for text inputs so they are always visible even with the useFocus helper
	const focus = { ...PACKS.focus };
	focus.outline += ' !important';

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

		// Remove the default vertical scrollbar in IE 10+.
		// textarea:
		overflow: 'auto',
		// =========

		label: getLabel('textarea'),
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
		verticalAlign: inline && 'top',
		padding: sizeMap[size].padding.join(' '),
		maxWidth: width && getMaxWidth(size, width),
		minHeight: sizeMap[size].textarea.minHeight,

		'::placeholder': {
			opacity: 1, // Override Firefox's unusual default opacity
			color: COLORS.tints.text50,
			...TYPE.bodyFont[300],
		},

		// Focus styling (for all, not just keyboard users)
		':focus': {
			...focus,
		},

		// Disabled and read-only inputs
		':disabled, &[readonly]': {
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
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { size, width, inline, invalid, ariaInvalid }) => {
	const props = { size, width, inline, invalid, ariaInvalid };
	const baseStyles = textareaStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = textareaStyles(_, props);
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

const textareaAttributes = (_, { invalid }) => ({
	'aria-invalid': invalid ? invalid : undefined,
});
const blenderAttributes = (_, { size, width, inline, invalid }) => ({
	...textareaAttributes(_, { invalid }),
	className: classNames({
		[`__convert__textarea-${size}`]: size !== defaultProps.size,
		[`__convert__textarea-width-${width}`]: width,
		[`__convert__textarea-inline`]: inline,
		[`__convert__textarea-invalid`]: invalid,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultTextarea = {
	component: Textarea,
	styles: textareaStyles,
	attributes: textareaAttributes,
};

export const blenderTextarea = {
	component: BlenderTextarea,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
