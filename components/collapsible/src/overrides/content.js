/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

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

const BlenderContent = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

// ==============================
// Styles
// ==============================

export const contentStyles = (_, { isOpen }) => ({
	label: getLabel('collapsible-content'),
	display: isOpen ? 'block' : 'none',
});

// ==============================
// Blender Styles
// ==============================

// Default state is closed, open state handled at collapsible level
const blenderStyles = (_) => contentStyles(_, { isOpen: false });

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { id, isOpen }) => ({
	id,
	'aria-hidden': !isOpen,
});

const blenderAttributes = (_, props) => ({
	...contentAttributes(_, props),
	'data-js': 'collapsible-content__version__',
});

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};

export const blenderContent = {
	component: BlenderContent,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
