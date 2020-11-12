/** @jsx jsx */

import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { defaultProps } from '../Label';

// ==============================
// Component
// ==============================

const Label = ({ state: _, ...rest }) => <span {...rest} />;

const BlenderLabel = ({ className, ...rest }) => (
	<Label className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const labelStyles = (_, { look }) => {
	const { COLORS, TYPE } = useBrand();

	let color = '#fff';
	if (look === 'faint') {
		color = COLORS.muted;
	}

	const styleMap = {
		primary: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		hero: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		neutral: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		faint: {
			color,
			backgroundColor: COLORS.light,
			border: `1px solid ${COLORS.border}`,
		},
		success: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		info: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		warning: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		danger: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
	};

	return {
		label: getLabel('label'),
		display: 'inline-block',
		appearance: 'none',
		borderRadius: '0.125rem',
		fontSize: '0.75rem',
		lineHeight: 'normal',
		padding: '0.0625rem 0.375rem',
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		...styleMap[look],
		...TYPE.bodyFont[400],

		':empty': {
			display: 'none',
		},

		'@media print': {
			color: '#000',
			backgroundColor: '#fff',
			border: '1px solid #000',
		},
	};
};

// ==============================
// Blender Styles
// ==============================
const blenderStyles = (_, { look }) => {
	const props = { look };
	const baseStyles = labelStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = labelStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'look':
			label = `${label}-${look}`;
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

const labelAttributes = () => null;

const blenderAttributes = (_, { look }) => ({
	className: classNames({ [`__convert__label-${look}`]: look !== defaultProps.look }),
});

// ==============================
// Exports
// ==============================

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};

export const blenderLabel = {
	component: BlenderLabel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
