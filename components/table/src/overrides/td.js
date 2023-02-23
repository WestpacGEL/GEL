import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { Td as MainTd } from '../Td';
const defaultProps = MainTd.defaultProps || {};

// ==============================
// Component
// ==============================

const Td = ({ state: _, ...rest }) => <td {...rest} />;

const BlenderTd = ({ className, ...rest }) => (
	<Td className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const tdStyles = (_, { highlighted, highlightStart, bordered }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		label: getLabel('table-td'),
		padding: '0.75rem',
		verticalAlign: 'top',
		border: bordered ? `1px solid ${COLORS.border}` : 'none',
		borderLeft: highlightStart && `6px solid ${COLORS.primary}`,
		borderBottom: highlighted && `3px solid ${COLORS.primary}`, //a11y: highlighted border must be noticeably thicker than non-highlighted

		// bold scope
		'&[scope=row]': {
			...TYPE.bodyFont[700],
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { highlighted, highlightStart }) => {
	const props = { highlighted, highlightStart };
	const baseStyles = tdStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = tdStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	let modifier;

	if (modifiers.length > 1 && modifiers.includes('highlightStart')) {
		modifier = 'highlightStart';
	} else {
		modifier = modifiers[0];
	}

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// split out bordered and highlighted props since bordered is applied at the table level while highlighted is at component tr level
export const nestedTdStyles = (props) => {
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = tdStyles(null, defaultProps);
	const modifierStyles = tdStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const tdAttributes = () => null;

const blenderAttributes = (_, { highlighted, highlightStart }) => ({
	className: classNames({
		[`__convert__table-td-highlighted`]: highlighted && !highlightStart,
		[`__convert__table-td-highlightStart`]: highlightStart,
	}),
});
// ==============================
// Exports
// ==============================

export const defaultTd = {
	component: Td,
	styles: tdStyles,
	attributes: tdAttributes,
};

export const blenderTd = {
	component: BlenderTd,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
