import { jsx, getLabel, useBrand } from '@westpac/core';
import { useTransition, animated } from '@react-spring/web';

// ==============================
// Component
// ==============================

const Backdrop = ({ state: { open }, ...rest }) => {
	const transition = useTransition(open, {
		config: { duration: 150 }, //CSS 'linear' easing-function
		from: { opacity: 0 },
		enter: { opacity: 0.5 },
		leave: { opacity: 0, delay: 300 }, //delay after sidebar transform
	});

	return transition((style, item) => item && <animated.div style={style} {...rest} />);
};

// ==============================
// Styles
// ==============================

const backdropStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('sidebar-backdrop'),
		position: 'fixed',
		zIndex: 10,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: COLORS.black,
	};
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
