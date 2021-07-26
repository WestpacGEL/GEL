/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

// ==============================
// Component
// ==============================

const Content = forwardRef(({ state: { isOpen, setClosed }, ...rest }, ref) => {
	const fade = useSpring({
		config: {
			duration: 150, //CSS 'linear' easing-function
		},
		opacity: isOpen ? 1 : 0,
		from: {
			opacity: 0, //reset
		},
		onStart: () => {
			setClosed(false);
		},
		onRest: () => {
			setClosed(!isOpen);
		},
	});

	return <animated.div ref={ref} style={fade} {...rest} />;
});

// ==============================
// Styles
// ==============================

const contentStyles = (_, { isOpen }) => ({
	label: getLabel('collapsible-content'),
	display: isOpen ? 'block' : 'none',
});

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { instanceId, isOpen }) => ({
	id: instanceId,
	'aria-hidden': !isOpen,
});

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
