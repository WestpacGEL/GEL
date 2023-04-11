import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
// import { Label as MainLabel } from '../Label';
// const defaultProps = MainLabel?.defaultProps || {};

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

	return {
		label: getLabel('label'),
		display: 'inline-block',
		border: '1px solid',
		borderRadius: '0.125rem',
		fontSize: '0.75rem',
		lineHeight: 1,
		padding: '0.1875rem 0.375rem 0.125rem',
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		color: look === 'faint' ? COLORS.muted : '#fff',
		backgroundColor: look === 'faint' ? '#fff' : COLORS[look],
		borderColor: look === 'faint' ? COLORS.border : COLORS[look],
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
