/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// ==============================
// Component
// ==============================

const Backdrop = ({ state: { open }, ...rest }) => {
	const [show, setShow] = useState(open);

	const fade = useSpring({
		config: { duration: 150 },
		from: { position: 'relative', zIndex: 1001, opacity: 0 },
		opacity: open ? 0.5 : 0,
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

	return <animated.div style={fade}>{show && <div {...rest} />}</animated.div>;
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
