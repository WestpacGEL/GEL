import { jsx, getLabel, getModifier, styleReconciler } from '@westpac/core';
// import { FormCheck as MainFormCheck } from '../FormCheck';
// const defaultProps = MainFormCheck?.defaultProps || {};

// ==============================
// Component
// ==============================

const Option = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const optionStyles = (_, { size, inline }) => {
	const sizeMap = {
		medium: {
			marginRight: '1.125rem',
			marginBottom: '0.375rem',
			width: '1.5rem',
			height: '1.5rem',
		},
		large: {
			marginRight: '1.125rem',
			marginBottom: '0.75rem',
			width: '1.875rem',
			height: '1.875rem',
		},
	};

	return {
		label: getLabel('formCheck-option'),
		position: 'relative',
		display: inline ? 'inline-block' : 'block',
		verticalAlign: inline && 'top',
		marginRight: inline && sizeMap[size].marginRight,
		marginBottom: sizeMap[size].marginBottom,
		minHeight: sizeMap[size].height,
		paddingLeft: sizeMap[size].width,
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => optionStyles(null, defaultProps);

export const nestedOptionStyles = ({ size, inline }) => {
	const props = { size, inline };
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = optionStyles(null, defaultProps);
	const modifierStyles = optionStyles(null, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const optionAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultOption = {
	component: Option,
	styles: optionStyles,
	attributes: optionAttributes,
};

export const blenderOption = {
	component: Option,
	styles: blenderStyles,
	attributes: optionAttributes,
};
