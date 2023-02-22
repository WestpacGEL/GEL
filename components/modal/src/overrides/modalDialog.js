import {
	jsx,
	useMediaQuery,
	useBrand,
	getModifier,
	styleReconciler,
	getLabel,
	formatClassName,
} from '@westpac/core';
import { useSpring, animated } from '@react-spring/web';
import BezierEasing from 'bezier-easing';

import { defaultProps } from '../Modal';

// ==============================
// Component
// ==============================

const ModalDialog = ({ state: { open }, ...rest }) => {
	const slide = useSpring({
		config: {
			duration: 300,
			easing: BezierEasing(0, 0, 0.58, 1.0), //~CSS 'ease-out' easing-function
		},
		from: { transform: 'translateY(-50px)' },
		to: { transform: open ? 'translateY(0px)' : 'translateY(-50px)' },
		delay: open ? 150 : 0, //after Backdrop fade-in
	});

	return <animated.div style={slide} {...rest} />;
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
			null,
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
	Object.assign(baseStyles, {
		transform: 'translateY(-50px)',
		transition: 'transform 0.3s ease-out',
	});

	return baseStyles;
};

export const nestedStyles = (props) => {
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = modalDialogStyles(null, defaultProps);
	const modifierStyles = modalDialogStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	const modifier = modifiers[0];

	switch (modifier) {
		case 'open':
			Object.assign(reconciledStyles, {
				transform: 'none',
			});
			break;
		default:
			break;
	}

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
