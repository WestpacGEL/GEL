/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { useSpring, animated } from '@react-spring/web';
import ResizeObserver from 'resize-observer-polyfill';
import BezierEasing from 'bezier-easing';
import useMeasure from 'react-use-measure';

// ==============================
// Component
// ==============================

const Content = ({ open, delay, state: { items, initial }, ...rest }) => {
	const [ref, { height }] = useMeasure({ polyfill: ResizeObserver });

	const animate = useSpring({
		config: {
			duration: 300,
			easing: BezierEasing(0.25, 0.1, 0.25, 1.0), //~CSS 'ease' easing-function
		},
		delay: delay ? 300 : 0,
		immediate: initial && items.length === 1,
		height: open ? height : 0,
	});

	return (
		<animated.div style={{ overflow: 'hidden', ...animate }}>
			<div ref={ref} {...rest} />
		</animated.div>
	);
};

// ==============================
// Styles
// ==============================

const contentStyles = (_, { open }) => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('compacta-content'),
		padding: '0 1.125rem .375rem',
		paddingLeft: [null, null, '3.375rem'],
		visibility: !open && 'hidden',
	})[0];
};

// ==============================
// Attributes
// ==============================

const contentAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
