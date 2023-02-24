import {
	jsx,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
	Global,
} from '@westpac/core';
import { forwardRef, Fragment } from 'react';
import { useTransition, animated } from '@react-spring/web';

import { Modal as MainModal } from '../Modal';
const defaultProps = MainModal?.defaultProps || {};
import { nestedStyles } from './modalDialog';

// ==============================
// Component
// ==============================

const Modal = forwardRef(({ state: { open }, ...rest }, ref) => {
	const transition = useTransition(open, {
		config: { duration: 150 }, //CSS 'linear' easing-function
		from: { opacity: 0 },
		enter: { opacity: 1, delay: 150 }, //delay after Backdrop fade-in
		leave: { opacity: 0 },
	});

	return transition((style, item) => item && <animated.div ref={ref} style={style} {...rest} />);
});
Modal.displayName = 'Modal';

const BlenderModal = forwardRef(({ state, className, ...rest }, ref) => (
	<Fragment>
		<Global
			styles={{
				'body.isModalOpen': { overflow: 'hidden' },
			}}
		/>
		<div ref={ref} className={formatClassName(className)} {...rest} />
	</Fragment>
));
BlenderModal.displayName = 'BlenderModal';
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

const blenderStyles = (_, { open, size }) => {
	const props = { open, size };
	const baseStyles = modalStyles(_, defaultProps);

	Object.assign(baseStyles, {
		display: 'none',
	});

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

	return { label, ...reconciledStyles, ...nestedStyles(props) };
};

// ==============================
// Attributes
// ==============================

const modalAttributes = (_, { open }) => ({
	'aria-modal': 'true',
	'aria-hidden': !open,
});

const blenderAttributes = (_, { open, size }) => ({
	...modalAttributes(_, { open }),
	'data-js': 'modal__version__',
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
