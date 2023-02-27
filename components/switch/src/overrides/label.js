import { jsx, getLabel, getModifier, styleReconciler } from '@westpac/core';
import { Switch as MainSwitch } from '../Switch';
const defaultProps = MainSwitch?.defaultProps || {};

// ==============================
// Component
// ==============================

const Label = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const labelStyles = (_, { block }) => {
	return {
		label: getLabel('switch-label'),
		flex: block && 1,
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'normal',
		position: 'relative',
		paddingRight: '0.375rem',

		'input:disabled ~ &': {
			opacity: 0.5,
			cursor: 'not-allowed',
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_) => labelStyles(_, defaultProps);

export const nestedLabelStyles = (props) => {
	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = labelStyles(null, defaultProps);
	const modifierStyles = labelStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const labelAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLabel = { component: Label, styles: labelStyles, attributes: labelAttributes };

export const blenderLabel = {
	component: Label,
	styles: blenderStyles,
	attributes: labelAttributes,
};
