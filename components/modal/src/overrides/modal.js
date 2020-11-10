/** @jsx jsx */

import {
	jsx,
	useMediaQuery,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { useSpring, animated } from 'react-spring';
import { forwardRef } from 'react';

import { defaultProps } from '../Modal';

// ==============================
// Component
// ==============================

const Modal = forwardRef(({ state: { open }, ...rest }, ref) => {
	const fade = useSpring({
		config: { duration: 150 },
		from: { position: 'relative', zIndex: 1002, opacity: 0 },
		_dspl: open ? 1 : 0,
		opacity: open ? 1 : 0,
	});

	return (
		<animated.div
			style={{
				...fade,
				display: fade._dspl.interpolate((d) => (d === 0 ? 'none' : 'block')),
			}}
		>
			<div ref={ref} {...rest} />
		</animated.div>
	);
});

const BlenderModal = forwardRef(({ state, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const modalStyles = (_, { open }) => ({
	label: getLabel('modal'),
	position: 'fixed',
	zIndex: 1002,
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	overflow: 'hidden',

	...(open && {
		overflowX: 'hidden',
		overflowY: 'auto',
	}),
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { size }) => {
	const props = { size };
	const baseStyles = modalStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = modalStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'size':
			label = `${label}-${size}`;
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

const modalAttributes = () => ({ role: 'dialog', 'aria-modal': 'true' });

const blenderAttributes = (_, { size }) => ({
	...modalAttributes(),
	className: classNames({ [`__convert__modal-${size}`]: size !== defaultProps.size }),
});

// ==============================
// Exports
// ==============================

export const defaultModal = {
	component: Modal,
	styles: modalStyles,
	attributes: modalAttributes,
};

export const blenderModal = {
	component: BlenderModal,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
