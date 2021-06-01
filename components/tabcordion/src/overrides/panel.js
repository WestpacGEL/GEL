/** @jsx jsx */

import { jsx, useBrand, getLabel, classNames, getModifier, formatClassName } from '@westpac/core';
import { useSpring, animated } from 'react-spring';
import BezierEasing from 'bezier-easing';
import { forwardRef } from 'react';

import { defaultProps } from '../blender/Tabcordion';
import { usePrevious } from '../_utils';

// ==============================
// Component
// ==============================

const Panel = forwardRef(
	(
		{
			state: {
				mode,
				hidden,
				selected,
				onOpening,
				onOpen,
				onClose,
				tabId,
				initial,
				idx,
				onClosing,
				setClosed,
				panelHeight,
			},
			...rest
		},
		ref
	) => {
		const prevSelected = usePrevious(selected);
		const prevHidden = usePrevious(hidden);

		const animate = useSpring({
			config: {
				duration: 300,
				easing: BezierEasing(0.25, 0.1, 0.25, 1.0), //~CSS 'ease' easing-function
			},
			height: hidden ? 0 : panelHeight,
			from: {
				height: '', //reset
			},
			immediate: initial,
			onStart: () => {
				setClosed(false);

				if (mode === 'tabs') {
					if (selected && !prevSelected) {
						onOpening({ idx, tabId });
					} else if (!selected && prevSelected) {
						onClosing({ idx, tabId });
					}
				} else if (mode === 'accordion') {
					if (!hidden && prevHidden) {
						onOpening({ idx, tabId });
					} else if (hidden && !prevHidden) {
						onClosing({ idx, tabId });
					}
				}
			},
			onRest: () => {
				if (mode === 'accordion') {
					if (hidden) {
						setClosed(true);
						onClose({ idx, tabId });
					} else if (!hidden) {
						setClosed(false);
						onOpen({ idx, tabId });
					}
				}
			},
		});

		if (mode === 'accordion') {
			return <animated.div ref={ref} style={animate} {...rest} />;
		} else {
			return <div ref={ref} {...rest} />;
		}
	}
);

const BlenderPanel = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const panelStyles = (_, { mode, look, selected, closed, last }) => {
	const { COLORS } = useBrand();

	const getPanelStyles = (mode, look, selected, closed, last) => {
		switch (mode) {
			case 'accordion':
				return {
					borderWidth: '0 1px',
					borderBottomWidth: last && !closed && '1px',

					...(look === 'soft' &&
						last && {
							borderBottomLeftRadius: '0.1875rem',
							borderBottomRightRadius: '0.1875rem',
						}),
					...(look === 'lego' && {
						borderLeftWidth: '0.375rem',
					}),
				};

			case 'tabs':
				return {
					display: !selected ? 'none' : 'block',
					borderWidth: '1px',
				};

			default:
				return {};
		}
	};

	return {
		label: getLabel('tabcordion-panel'),
		overflow: 'hidden',
		border: `solid ${COLORS.border}`,
		...getPanelStyles(mode, look, selected, closed, last),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { selected }) => {
	const props = { selected };
	const baseStyles = panelStyles(_, defaultProps);

	let modifiers = getModifier({ ...defaultProps, selected: false }, props);
	if (!modifiers.length) return baseStyles;

	let label = baseStyles.label;
	const modifier = modifiers[0];

	let modifierStyles = {};

	switch (modifier) {
		case 'selected':
			label = `${label}-show`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...modifierStyles };
};

// ==============================
// Attributes
// ==============================

const panelAttributes = (_, { panelId, mode, hidden, selected }) => ({
	id: panelId,
	'aria-hidden': mode === 'accordion' ? hidden : !selected,
});

const blenderAttributes = (_, props) => ({
	...panelAttributes(_, props),
	className: classNames({ [`__convert__tabcordion-panel-show`]: props.selected }),
});

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: BlenderPanel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
