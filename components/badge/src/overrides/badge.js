/** @jsx jsx */

import {
	jsx,
	useBrand,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
	getLabel,
} from '@westpac/core';
import { defaultProps } from '../Badge';

// ==============================
// Component
// ==============================

const Badge = ({ state: _, ...rest }) => <span {...rest} />;

const BlenderBadge = ({ className, ...rest }) => (
	<Badge className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const badgeStyles = (_, { look }) => {
	const { COLORS, TYPE } = useBrand();

	const styleMap = {
		primary: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		hero: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		neutral: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		faint: {
			color: COLORS.muted,
			backgroundColor: '#fff',
			borderColor: COLORS.border,
		},
		success: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		info: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		warning: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		danger: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
	};

	return {
		label: getLabel('badge'),
		border: `1px solid transparent`,
		borderRadius: '0.75rem',
		display: 'inline-block',
		fontSize: '0.875rem',
		lineHeight: 1,
		minWidth: '0.625rem',
		padding: '0.25rem 0.4375rem',
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		...TYPE.bodyFont[700],
		...(look && styleMap[look]),

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
	const baseStyles = badgeStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = badgeStyles(_, props);
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

const badgeAttributes = () => null;

const blenderAttributes = (_, { look }) => ({
	className: classNames({ [`__convert__badge-${look}`]: look !== defaultProps.look }),
});

// ==============================
// Exports
// ==============================

export const defaultBadge = {
	component: Badge,
	styles: badgeStyles,
	attributes: badgeAttributes,
};

export const blenderBadge = {
	component: BlenderBadge,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
