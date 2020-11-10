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

const backdropStyles = () => {
	return {
		label: getLabel('modal-backdrop'),
		position: 'fixed',
		zIndex: 1001,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: '#000',
	};
};

const blenderStyles = (_, { open }) => {
	// need to make opacity 0 for base and opacity 1 when open
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
	styles: backdropStyles,
	attributes: backdropAttributes,
};
