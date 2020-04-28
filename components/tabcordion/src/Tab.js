/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Fragment, useState, forwardRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import PropTypes from 'prop-types';

import { defaultAccordionButton } from './overrides/accordionButton';
import { defaultAccordionButtonIcon } from './overrides/accordionButtonIcon';
import { defaultPanel } from './overrides/panel';

import { useTabcordionContext } from './Tabcordion';
import { usePrevious } from './_utils';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Tab = forwardRef(
	(
		{
			look,
			last,
			selected,
			text,
			mode,
			panelId,
			tabId,
			onClick,
			onOpen,
			onOpening,
			onClose,
			onClosing,
			children,
			overrides,
			idx,
			...rest
		},
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const context = useTabcordionContext();

		const [hidden, setHidden] = useState(!selected);
		const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });
		const [initial, setInitial] = useState(true);
		const prevSelected = usePrevious(selected);
		const prevHidden = usePrevious(hidden);

		const animate = useSpring({
			to: {
				height: mode === 'accordion' ? (hidden ? 0 : height) : 'auto',
				overflow: 'hidden',
			},
			immediate: initial,
			onStart: () => {
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
		});

		const defaultOverrides = {
			AccordionButton: defaultAccordionButton,
			AccordionButtonIcon: defaultAccordionButtonIcon,
			Panel: defaultPanel,
		};

		const componentOverrides = overrides || context.state.overrides;

		const state = {
			hidden,
			look,
			last,
			selected,
			text,
			mode,
			panelId,
			onClick,
			tabId,
			context: context.state,
			overrides: componentOverrides,
			idx,
			...rest,
		};

		const {
			AccordionButton: {
				component: AccordionButton,
				styles: accordionButtonStyles,
				attributes: accordionButtonAttributes,
			},
			AccordionButtonIcon: {
				component: AccordionButtonIcon,
				styles: accordionButtonIconStyles,
				attributes: accordionButtonIconAttributes,
			},
			Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		const handleAccordionClick = () => {
			setInitial(false);
			setHidden(!hidden);
			onClick();
		};

		useEffect(() => {
			setHidden(!selected);
		}, [mode]);

		useEffect(() => {
			if (mode === 'accordion') {
				if (!hidden) {
					onOpen({ idx, tabId });
				} else {
					onClose({ idx, tabId });
				}
			}
		}, [hidden, tabId]);

		useEffect(() => {
			if (mode === 'tabs') {
				if (selected) {
					onOpen({ idx, tabId });
				} else {
					onClose({ idx, tabId });
				}
			}
		}, [selected, tabId]);

		return (
			<Fragment>
				{mode === 'accordion' ? (
					<AccordionButton
						onClick={handleAccordionClick}
						state={state}
						{...accordionButtonAttributes(state)}
						css={accordionButtonStyles(state)}
					>
						<span>{text}</span>
						<AccordionButtonIcon
							state={state}
							{...accordionButtonIconAttributes(state)}
							css={accordionButtonIconStyles(state)}
						/>
					</AccordionButton>
				) : null}

				<animated.div style={animate}>
					<div ref={measureRef}>
						<Panel ref={ref} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
							{children}
						</Panel>
					</div>
				</animated.div>
			</Fragment>
		);
	}
);

// ==============================
// Types
// ==============================

Tab.propTypes = {
	/**
	 * The look of the tabs
	 */
	look: PropTypes.oneOf(['soft', 'lego']),

	/**
	 * Indicator if this is the last tab
	 */
	last: PropTypes.bool,

	/**
	 * Whether this tab/panel is selected/expanded
	 */
	selected: PropTypes.bool,

	/**
	 * The text label for this tab
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Render as either an accordion or tabs
	 */
	mode: PropTypes.oneOf(['accordion', 'tabs']),

	/**
	 * The id for this tab's panel
	 */
	panelId: PropTypes.string,

	/**
	 * The id for the tab
	 */
	tabId: PropTypes.string,

	/**
	 * The onClick handler for the accordion button
	 */
	onClick: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is open.
	 */
	onOpen: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is opening.
	 */
	onOpening: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is closed.
	 */
	onClose: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is closing.
	 */
	onClosing: PropTypes.func,

	/**
	 * The panel content for this tab
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AccordionButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionButtonIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
