import {
	jsx,
	useBrand,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
	getLabel,
} from '@westpac/core';
import { Badge as MainBadge } from '../Badge';
const defaultProps = MainBadge?.defaultProps || {};

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

const badgeStyles = (_, { look, type, btnContext }) => {
	const { COLORS, TYPE } = useBrand();

	const invert = btnContext && !(btnContext?.state.look === 'faint' || btnContext?.state.soft);
	console.log(btnContext?.state.look, invert);

	return {
		label: getLabel('badge'),
		display: 'inline-block',
		border: invert ? 'none' : '1px solid',
		borderRadius: type === 'pill' ? '0.75rem' : '0.125rem',
		fontSize: type === 'pill' ? '0.875rem' : '0.75rem',
		lineHeight: 1,
		minWidth: '0.625rem', // double check this
		padding: type === 'pill' ? '0.25rem 0.4375rem' : '0.1875rem 0.375rem 0.125rem',
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		color: look === 'faint' ? COLORS.muted : invert ? COLORS[look] : '#fff',
		backgroundColor: invert || look === 'faint' ? '#fff' : COLORS[look],
		borderColor: look === 'faint' ? COLORS.border : COLORS[look],
		...(type === 'pill' ? TYPE.bodyFont[700] : TYPE.bodyFont[400]),

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
