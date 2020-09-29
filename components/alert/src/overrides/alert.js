/** @jsx jsx */

import { AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';
import {
	jsx,
	useBrand,
	useMediaQuery,
	getModifier,
	styleReconciler,
	classNames,
} from '@westpac/core';

import { defaultProps } from '../Alert';

// ==============================
// Component
// ==============================

const Alert = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const alertStyles = (_, { dismissible, look }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const styleMap = {
		success: {
			icon: TickIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		info: {
			icon: InfoIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		warning: {
			icon: AlertIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		danger: {
			icon: AlertIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		system: {
			icon: AlertIcon,
			css: {
				backgroundColor: COLORS.system,
				color: 'black',
				borderColor: COLORS.system,
			},
		},
	};

	return mq({
		label: 'alert',
		marginBottom: '1.3125rem',
		padding: dismissible ? '1.125rem 1.875rem 1.125rem 1.125rem' : '1.125rem',
		position: 'relative',
		display: [null, 'flex'],
		zIndex: 1,
		transition: 'opacity 300ms ease-in-out',
		opacity: 1,
		borderTop: '1px solid',
		borderBottom: '1px solid',
		...styleMap[look].css,
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { dismissible, look }) => {
	const props = { dismissible: dismissible ? dismissible : false, look };
	const baseStyles = alertStyles(_, defaultProps);

	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = alertStyles(_, props);
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

const alertAttributes = () => null;

const blenderAttributes = (_, { look, dismissible }) => ({
	className: classNames({
		[`__convert__alert-${look}`]: look !== defaultProps.look,
		[`__convert__alert-dismissible`]: dismissible,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultAlert = {
	component: Alert,
	styles: alertStyles,
	attributes: alertAttributes,
};

export const blenderAlert = {
	component: Alert,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
