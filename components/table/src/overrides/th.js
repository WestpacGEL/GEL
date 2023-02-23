import { jsx, useBrand, getLabel, getModifier, styleReconciler } from '@westpac/core';
import { Table as MainTable } from '../Table';
const defaultProps = MainTable.defaultProps || {};

// ==============================
// Component
// ==============================

const Th = ({ state: _, ...rest }) => <th {...rest} />;

// ==============================
// Styles
// ==============================

const thStyles = (_, { bordered }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('table-th'),
		padding: '0.75rem',
		verticalAlign: 'top',
		border: `1px solid ${COLORS.border}`,
		borderLeft: !bordered ? 0 : `1px solid ${COLORS.border}`,
		borderRight: !bordered ? 0 : `1px solid ${COLORS.border}`,
		textAlign: 'left',
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_) => thStyles(_, defaultProps);

export const nestedThStyles = (props) => {
	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = thStyles(null, defaultProps);
	const modifierStyles = thStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const thAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTh = {
	component: Th,
	styles: thStyles,
	attributes: thAttributes,
};

export const blenderTh = {
	component: Th,
	styles: blenderStyles,
	attributes: thAttributes,
};
