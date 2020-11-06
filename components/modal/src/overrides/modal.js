/** @jsx jsx */

import {
	jsx,
	useMediaQuery,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { useTransition, animated } from 'react-spring';
import { forwardRef } from 'react';

import { defaultProps } from '../Modal';

// ==============================
// Component
// ==============================

const Modal = forwardRef(({ state: { open }, ...rest }, ref) => {
	const { SPACING } = useBrand();

	const modalTransition = useTransition(open, null, {
		from: {
			position: 'fixed',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'baseline',
			left: 0,
			right: 0,
			top: SPACING(5),
			bottom: 0,
			opacity: 0,
			transform: `translateY(-20px)`,
			zIndex: '1002',
		},
		enter: { opacity: 1, transform: `translateY(0px)` },
		leave: { opacity: 0, transform: `translateY(-40px)` },
		config: { duration: 350 },
	});

	return modalTransition.map(
		({ item, key, props }) =>
			item && (
				<animated.div key={key} style={props}>
					<div ref={ref} {...rest} />
				</animated.div>
			)
	);
});

const BlenderModal = forwardRef(({ state, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const modalStyles = (_, { size }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('modal'),
		position: 'relative',
		overflow: 'auto',
		maxHeight: '85%',
		margin: '0 0.75rem',
		backgroundColor: '#fff',
		borderRadius: '0.1875rem',
		boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
		width: [
			'auto',
			null,
			size === 'small' ? '18.75rem' : '37.5rem',
			size === 'large' && '56.25rem',
		],
	})[0];
};

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
