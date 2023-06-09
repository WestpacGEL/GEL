import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';

import { ProgressBar as MainProgressBar } from '../ProgressBar';
const defaultProps = MainProgressBar?.defaultProps || {};
import { nestedBarStyles } from './bar';

// ==============================
// Component
// ==============================

export const ProgressBar = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderProgressBar = ({ className, ...rest }) => (
	<ProgressBar className={formatClassName(className)} {...rest} />
);
// ==============================
// Styles
// ==============================

export const progressBarStyles = (_, { look }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		default: {
			height: '1.5rem',
			borderRadius: '1.5rem',
		},
		skinny: {
			height: '0.625rem',
			borderRadius: '0.625rem',
		},
	};

	return {
		label: getLabel('progressBar'),
		marginBottom: '1.3125rem',
		overflow: 'hidden',
		backgroundColor: COLORS.white,
		border: `1px solid ${COLORS.border}`,
		padding: '0.0625rem',
		position: 'relative',
		boxSizing: 'border-box',
		...styleMap[look],
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { look }) => {
	const props = { look };
	const baseStyles = progressBarStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = progressBarStyles(_, props);
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

	return { label, ...reconciledStyles, ...nestedBarStyles(props) };
};

// ==============================
// Attributes
// ==============================

const progressBarAttributes = (_, { value }) => ({
	role: 'progressbar',
	'aria-valuemin': '0',
	'aria-valuemax': '100',
	'aria-valuenow': value,
	'aria-valuetext': `${value}% complete`,
	'aria-live': 'polite',
});

const blenderAttributes = (_, { look, value }) => ({
	...progressBarAttributes(_, { value }),
	className: classNames({ [`__convert__progressBar-${look}`]: look !== defaultProps.look }),
});
// ==============================
// Exports
// ==============================

export const defaultProgressBar = {
	component: ProgressBar,
	styles: progressBarStyles,
	attributes: progressBarAttributes,
};

export const blenderProgressBar = {
	component: BlenderProgressBar,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
