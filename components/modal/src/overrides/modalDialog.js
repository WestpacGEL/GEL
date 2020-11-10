/** @jsx jsx */

import { jsx, getLabel, useMediaQuery, useBrand } from '@westpac/core';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

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
	});
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
