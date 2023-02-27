import { jsx, useBrand, getLabel, getModifier, styleReconciler } from '@westpac/core';
import { ProgressBar as MainProgressBar } from '../ProgressBar';
const defaultProps = MainProgressBar?.defaultProps || {};

// ==============================
// Component
// ==============================

const Bar = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const barStyles = (_, { look }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		label: getLabel('progressBar-bar'),
		position: 'relative',
		zIndex: 0,
		float: 'left',
		borderRadius: look === 'skinny' ? '0.625rem' : '1.5rem',
		height: '100%',
		width: 0,
		fontSize: '0.875rem',
		color: '#fff',
		lineHeight: '1.25rem',
		textAlign: 'right',
		backgroundColor: COLORS.hero,
		overflow: 'hidden',
		transition: 'width 0.6s ease',
		boxSizing: 'border-box',
		...TYPE.bodyFont[700],

		//a11y: for high contrast mode
		'::after': {
			content: '""',
			position: 'absolute',
			zIndex: 0,
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			border: `${look === 'skinny' ? '0.1875rem' : '0.625rem'} solid transparent`,
		},

		'@media print': {
			backgroundColor: '#000 !important',
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_) => barStyles(_, defaultProps);

export const nestedBarStyles = (props) => {
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = barStyles(null, defaultProps);
	const modifierStyles = barStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const barAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBar = {
	component: Bar,
	styles: barStyles,
	attributes: barAttributes,
};

export const blenderBar = {
	component: Bar,
	styles: blenderStyles,
	attributes: barAttributes,
};
