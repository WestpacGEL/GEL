/** @jsx jsx */

import { jsx, getLabel, formatClassName } from '@westpac/core';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { Body } from '@westpac/body';
import { useEffect } from 'react';

// ==============================
// Component
// ==============================

const PanelBody = ({ state: { mode, selected }, setPanelHeight, ...rest }) => {
	const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });

	useEffect(() => {
		setPanelHeight(height);
	});

	const fade = useSpring({
		config: {
			duration: 300, //CSS 'linear' easing-function
		},
		...(mode === 'tabs' && {
			opacity: selected ? 1 : 0,
		}),
		from: {
			opacity: 1, //reset
		},
	});
	const AnimatedBody = animated(Body);

	return <AnimatedBody ref={measureRef} style={fade} {...rest} />;
};

const BlenderPanelBody = ({ className, ...rest }) => (
	<Body className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const panelBodyStyles = () => ({
	label: getLabel('tabcordion-panelBody'),
	padding: '1.5rem 3.22%',
});

// ==============================
// Attributes
// ==============================

const panelBodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPanelBody = {
	component: PanelBody,
	styles: panelBodyStyles,
	attributes: panelBodyAttributes,
};

export const blenderPanelBody = {
	component: BlenderPanelBody,
	styles: panelBodyStyles,
	attributes: panelBodyAttributes,
};
