import { jsx, useBrand, getLabel, getModifier, styleReconciler } from '@westpac/core';

import { defaultProps } from '../Table';
// ==============================
// Component
// ==============================

const TFoot = ({ state: _, ...rest }) => <tfoot {...rest} />;

// ==============================
// Styles
// ==============================

const tfootStyles = (_, { bordered }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('table-tfoot'),
		color: COLORS.muted,
		'th, tr, td': { borderBottom: !bordered ? `0` : `1px solid ${COLORS.border}` },
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_) => tfootStyles(_, defaultProps);

export const nestedTfootStyles = (props) => {
	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = tfootStyles(null, defaultProps);
	const modifierStyles = tfootStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const tfootAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTfoot = {
	component: TFoot,
	styles: tfootStyles,
	attributes: tfootAttributes,
};

export const blenderTfoot = {
	component: TFoot,
	styles: blenderStyles,
	attributes: tfootAttributes,
};
