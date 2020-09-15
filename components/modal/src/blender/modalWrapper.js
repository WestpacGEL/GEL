/** @jsx jsx */

import { jsx, useBrand, getLabel, getModifier, styleReconciler } from '@westpac/core';

import { defaultProps } from './Modal';

// recreating useTransition for blender

// ==============================
// Component
// ==============================

const ModalWrapper = ({ state, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const modalWrapperStyles = (_, { open }) => {
	const { SPACING } = useBrand();
	return {
		label: getLabel('modal-wrapper'),
		position: 'fixed',
		display: open ? 'flex' : 'none',
		justifyContent: 'center',
		alignItems: 'baseline',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: '1002',
		paddingTop: SPACING(5),
		backgroundColor: 'rgba(0,0,0,0.5)',
		animation: 'animateModalWrapper 0.35s',
		'@keyframes animateModalWrapper': {
			from: {
				transform: 'translateY(-20px)',
				opacity: 0,
			},
			to: {
				transform: 'translateY(0px)',
				opacity: 1,
			},
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { open }) => {
	const props = { open };
	const baseStyles = modalWrapperStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = modalWrapperStyles(_, props);
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

const modalWrapperAttributes = () => null;

const blenderAttributes = () => ({ 'data-js': 'modal-wrapper__version__' });

// ==============================
// Exports
// ==============================

export const defaultModalWrapper = {
	component: ModalWrapper,
	styles: modalWrapperStyles,
	attributes: modalWrapperAttributes,
};

export const blenderModalWrapper = {
	component: ModalWrapper,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
