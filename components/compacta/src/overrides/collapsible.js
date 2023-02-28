import { jsx, getLabel } from '@westpac/core';
import { useSpring, animated } from '@react-spring/web';
import ResizeObserver from 'resize-observer-polyfill';
import BezierEasing from 'bezier-easing';
import useMeasure from 'react-use-measure';

// ==============================
// Component
// ==============================

const Collapsible = ({ open, delay, state: { items, initial }, children, ...rest }) => {
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
			<div ref={ref} {...rest}>
				{children}
			</div>
		</animated.div>
	);
};

// ==============================
// Styles
// ==============================

const collapsibleStyles = () => ({
	label: getLabel('compacta-collapsible'),
});

// ==============================
// Attributes
// ==============================

const collapsibleAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCollapsible = {
	component: Collapsible,
	styles: collapsibleStyles,
	attributes: collapsibleAttributes,
};
