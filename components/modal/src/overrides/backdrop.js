import { jsx, getLabel } from '@westpac/core';
import { useTransition, animated } from '@react-spring/web';

// ==============================
// Component
// ==============================

const Backdrop = ({ state: { open }, ...rest }) => {
	const transition = useTransition(open, {
		config: { duration: 150 }, //CSS 'linear' easing-function
		from: { opacity: 0 },
		enter: { opacity: 0.5 },
		leave: { opacity: 0, delay: 300 }, //delay after ModalDialog transform
	});

	return transition((style, item) => item && <animated.div style={style} {...rest} />);
};

const BlenderBackdrop = (props) => <div {...props} />;

// ==============================
// Styles
// ==============================

const backdropStyles = () => ({
	label: getLabel('modal-backdrop'),
	position: 'fixed',
	zIndex: 1001,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	backgroundColor: '#000',
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, props) => {
	const baseStyles = backdropStyles();
	Object.assign(baseStyles, {
		display: 'none',
	});

	return baseStyles;
};

// ==============================
// Attributes
// ==============================

const backdropAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBackdrop = {
	component: Backdrop,
	styles: backdropStyles,
	attributes: backdropAttributes,
};

export const blenderBackdrop = {
	component: BlenderBackdrop,
	styles: blenderStyles,
	attributes: backdropAttributes,
};
