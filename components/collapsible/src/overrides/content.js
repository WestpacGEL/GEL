/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

// ==============================
// Component
// ==============================

const Content = forwardRef(({ state: { open, setClosed }, ...rest }, ref) => {
	const fade = useSpring({
		config: {
			duration: 150, //CSS 'linear' easing-function
		},
		opacity: open ? 1 : 0,
		from: {
			opacity: 0, //reset
		},
		onStart: () => {
			setClosed(false);
		},
		onRest: () => {
			setClosed(!open);
		},
	});

	return <animated.div ref={ref} style={fade} {...rest} />;
});

// ==============================
// Styles
// ==============================

const contentStyles = (_, { open }) => ({
	label: getLabel('collapsible-content'),
	display: open ? 'block' : 'none',
});

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { instanceId, open }) => ({
	id: instanceId,
	'aria-hidden': !open,
});

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
