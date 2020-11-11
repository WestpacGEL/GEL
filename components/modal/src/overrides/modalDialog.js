/** @jsx jsx */

import {
	jsx,
	useMediaQuery,
	useBrand,
	getModifier,
	styleReconciler,
	getLabel,
	formatClassName,
} from '@westpac/core';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { defaultProps } from '../Modal';

// ==============================
// Component
// ==============================

const ModalDialog = ({ state: { open }, ...rest }) => {
	const [show, setShow] = useState(open);

	const slide = useSpring({
		config: { duration: 300 },
		transform: open ? 'translateY(0px)' : 'translateY(-50px)',
		pointerEvents: 'none',
		onStart: () => {
			if (open) {
				setShow(true);
			}
		},
		onRest: () => {
			if (!open) {
				setShow(false);
			}
		},
	});

	return <animated.div style={slide}>{show && <div {...rest} />}</animated.div>;
};

const BlenderModalDialog = ({ state, className, ...rest }) => (
	<div className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const modalDialogStyles = (_, { size }) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({
		label: getLabel('modal-dialog'),
		position: 'relative',
		margin: [`${SPACING(5)} ${SPACING(2)}`, null, `${SPACING(5)} auto`],
		maxWidth: [
			'auto',
			null,
			size === 'small' ? '18.75rem' : '37.5rem',
			size === 'large' && '56.25rem',
		],
		pointerEvents: 'none',
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, props) => {
	const baseStyles = modalDialogStyles(_, defaultProps);

	return baseStyles;
};

export const nestedStyles = (props) => {
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = modalDialogStyles(null, defaultProps);
	const modifierStyles = modalDialogStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const modalDialogAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultModalDialog = {
	component: ModalDialog,
	styles: modalDialogStyles,
	attributes: modalDialogAttributes,
};

export const blenderModalDialog = {
	component: BlenderModalDialog,
	styles: blenderStyles,
	attributes: modalDialogAttributes,
};
