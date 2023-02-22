import { jsx, useBrand, getLabel, getModifier, styleReconciler } from '@westpac/core';
import { Body } from '@westpac/body';
import { sizeMap } from '../_utils';

import { defaultProps } from '../FormCheck';

// ==============================
// Component
// ==============================

const Hint = ({ state: _, ...rest }) => <Body {...rest} />;

const BlenderHint = (props) => (
	<Hint
		overrides={{
			Body: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const hintStyles = (_, { size }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('formCheck-option-hint'),
		paddingLeft: sizeMap[size]['label'].gap,
		color: COLORS.muted,
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => hintStyles(null, defaultProps);

export const nestedHintStyles = ({ size }) => {
	const props = { size };
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = hintStyles(null, defaultProps);
	const modifierStyles = hintStyles(null, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const hintAttributes = (_, { hintId }) => ({ id: hintId });

// ==============================
// Exports
// ==============================

export const defaultHint = {
	component: Hint,
	styles: hintStyles,
	attributes: hintAttributes,
};

export const blenderHint = {
	component: BlenderHint,
	styles: blenderStyles,
	attributes: hintAttributes,
};
