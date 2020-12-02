/** @jsx jsx */

import { forwardRef } from 'react';
import {
	jsx,
	useBrand,
	useMediaQuery,
	getLabel,
	classNames,
	getModifier,
	formatClassName,
} from '@westpac/core';
import { useSpring, animated } from 'react-spring';

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
				onClosing,
				onClose,
				tabId,
				initial,
				idx,
				panelBodyHeight,
			},
			...rest
		},
		ref
	) => {
		const prevSelected = usePrevious(selected);
		const prevHidden = usePrevious(hidden);

		const animate = useSpring({
			config: {
				// duration: 350
				tension: 200,
			},
			to: {
				...(mode === 'accordion' && {
					height: hidden ? 0 : panelBodyHeight,
				}),
				...(mode === 'tabs' && { height: 'auto' }),
			},
			immediate: initial,
			onStart: () => {
				// console.log('onStart()');
				if (hidden) {
					console.log('onStart() hidden');
				} else {
					console.log('onStart() !hidden');
				}

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
					// console.log('onRest()');
				}
				if (hidden) {
					console.log('onRest() hidden');
				} else {
					console.log('onRest() !hidden');
				}
			},
		});

		return <animated.div ref={ref} style={animate} {...rest} />;
	}
);

const BlenderPanel = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const panelStyles = (_, { look, mode, last, selected, hidden }) => {
	const { COLORS } = useBrand();

	/* const stylesMap =
		mode === 'accordion'
			? {
					soft: last
						? {
								borderBottomLeftRadius: '0.1875rem',
								borderBottomRightRadius: '0.1875rem',
						  }
						: {},
					lego: {
						borderLeftWidth: '0.375rem',
					},
			  }
			: mode === 'tabs'
			? {
					borderTop: `1px solid ${COLORS.border}`,
			  }
			: {}; */

	const getStyles = (mode, look) => {
		switch (mode) {
			case 'accordion':
				return {
					borderWidth: '0 1px',
					borderBottomWidth: last && !hidden && '1px',

					...(look === 'soft' && {
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
		// display: mode === 'tabs' && !selected ? 'none' : 'block',
		overflow: 'hidden',
		border: `solid ${COLORS.border}`,
		// borderTop: mode === 'tabs' && `1px solid ${COLORS.border}`,
		// borderWidth: mode === 'tabs' ? '1px' : '0 1px',
		// borderBottomWidth: mode === 'accordion' && last && !hidden && '1px',

		...getStyles(mode, look),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { selected }) => {
	const mq = useMediaQuery();
	const props = { selected };
	const baseStyles = panelStyles(_, defaultProps);

	Object.assign(baseStyles, {
		display: 'none',
	});

	let modifiers = getModifier({ ...defaultProps, selected: false }, props);
	if (!modifiers.length) return mq(baseStyles)[0];

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, display: 'block' };
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
	className: classNames({ [`__convert__tabcordion-panel-selected`]: props.selected }),
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
