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
import { defaultProps } from '../TextInput';
import { sizeMap, getHeight, getMaxWidth } from '../_utils';

// ==============================
// Component
// ==============================

const TextInput = ({ state: _, ...rest }) => <input {...rest} />;

const BlenderTextInput = ({ className, ...rest }) => (
	<TextInput className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const textInputStyles = (_, { size, width, inline, invalid, ...rest }) => {
	const { COLORS, PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	// We'll add important to focus state for text inputs so they are always visible even with the useFocus helper
	const focus = { ...PACKS.focus };
	focus.outline += ' !important';

	return mq({
		// Normalize
		// =========

		// 1. Remove the margin in Firefox and Safari.
		// 2. Show the overflow in Edge.
		// input:
		margin: 0, // 1
		overflow: 'visible', // 2
		// =========

		label: getLabel('textInput'),
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
		maxWidth: width && getMaxWidth(size, width),

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
	const baseStyles = textInputStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = textInputStyles(_, props);
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

const textInputAttributes = () => null;

const blenderAttributes = (_, { size, width, inline, invalid }) => ({
	className: classNames({
		[`__convert__textInput-${size}`]: size !== defaultProps.size,
		[`__convert__textInput-width-${width}`]: width,
		[`__convert__textInput-inline`]: inline,
		[`__convert__textInput-invalid`]: invalid,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultTextInput = {
	component: TextInput,
	styles: textInputStyles,
	attributes: textInputAttributes,
};

export const blenderTextInput = {
	component: BlenderTextInput,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
