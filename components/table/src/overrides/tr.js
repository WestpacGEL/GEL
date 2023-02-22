import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { defaultProps } from '../Tr';

// ==============================
// Component
// ==============================

export const Tr = ({ state: _, ...rest }) => <tr {...rest} />;

const BlenderTr = ({ className, ...rest }) => (
	<Tr className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

export const trStyles = (_, { highlighted }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('table-tr'),
		borderLeft: typeof highlighted === 'boolean' && highlighted ? `6px solid ${COLORS.primary}` : 0,
		borderBottom:
			typeof highlighted === 'boolean' && highlighted
				? `3px solid ${COLORS.primary}`
				: `1px solid ${COLORS.border}`, //a11y: highlighted border must be noticeably thicker than non-highlighted
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { highlighted }) => {
	const props = { highlighted };

	const baseStyles = trStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = trStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const trAttributes = () => null;

const blenderAttributes = (_, { highlighted }) => ({
	className: classNames({
		[`__convert__table-tr-highlighted`]: typeof highlighted === 'boolean' && highlighted,
	}),
});
// ==============================
// Exports
// ==============================

export const defaultTr = {
	component: Tr,
	styles: trStyles,
	attributes: trAttributes,
};

export const blenderTr = {
	component: BlenderTr,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
