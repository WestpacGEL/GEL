/** @jsx jsx */

import { jsx, getLabel, getModifier, styleReconciler, formatClassName } from '@westpac/core';
import { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

import { defaultProps } from '../Collapsible';

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

const BlenderContent = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const contentStyles = (_, { isOpen }) => ({
	label: getLabel('collapsible-content'),
	display: isOpen ? 'block' : 'none',
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { isOpen }) => {
	const props = { open: isOpen };
	const baseStyles = contentStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = contentStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { instanceId, isOpen }) => ({
	id: instanceId,
	'aria-hidden': !isOpen,
});

const blenderAttributes = (_, { instanceId, isOpen }) => ({
	...contentAttributes(_, { instanceId, isOpen }),
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
