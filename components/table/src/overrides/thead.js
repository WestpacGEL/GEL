import { jsx, useBrand, getLabel, getModifier, styleReconciler } from '@westpac/core';
import { Table as MainTable } from '../Table';
const defaultProps = MainTable.defaultProps || {};
// ==============================
// Component
// ==============================

const Thead = ({ state: _, ...rest }) => <thead {...rest} />;

// ==============================
// Styles
// ==============================

const theadStyles = (_, { bordered }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		label: getLabel('table-thead'),
		'th, td': { borderTop: !bordered ? 0 : `1px solid ${COLORS.border}` },
		// `th` cells in the `thead`
		th: {
			verticalAlign: 'bottom',
			borderBottom: `${bordered ? '2px' : '3px'} solid ${COLORS.hero}`,
			color: COLORS.text,
			...TYPE.bodyFont[700],
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_) => theadStyles(_, defaultProps);

export const nestedTheadStyles = (props) => {
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = theadStyles(null, defaultProps);
	const modifierStyles = theadStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const theadAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultThead = {
	component: Thead,
	styles: theadStyles,
	attributes: theadAttributes,
};

export const blenderThead = {
	component: Thead,
	styles: blenderStyles,
	attributes: theadAttributes,
};
