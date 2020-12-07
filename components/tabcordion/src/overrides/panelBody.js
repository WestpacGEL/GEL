/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, getLabel, formatClassName } from '@westpac/core';
import { Body } from '@westpac/body';
import { useSpring, animated } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill';
import useMeasure from 'react-use-measure';
import mergeRefs from 'react-merge-refs';

// ==============================
// Component
// ==============================

const PanelBody = forwardRef(({ state: { mode, selected, setPanelBodyHeight }, ...rest }, ref) => {
	const [measureRef, { height: panelBodyHeight }] = useMeasure({ polyfill: ResizeObserver });

	setPanelBodyHeight(panelBodyHeight);

	const AnimatedBody = animated(Body);

	const fade = useSpring({
		config: {
			duration: 300,
		},
		...(mode === 'tabs' && {
			opacity: selected ? 1 : 0,
		}),
		from: {
			opacity: 1, //reset
		},
	});

	return <AnimatedBody ref={mergeRefs([measureRef, ref])} style={fade} {...rest} />;
});

const BlenderPanelBody = ({ className, ...rest }) => (
	<PanelBody className={formatClassName(className)} {...rest} />
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
