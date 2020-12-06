/** @jsx jsx */

import { useState, forwardRef, useEffect } from 'react';
import { jsx, useBrand, overrideReconciler, getLabel } from '@westpac/core';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill';
import useMeasure from 'react-use-measure';
import BezierEasing from 'bezier-easing';

import { defaultAccordionButton } from './overrides/accordionButton';
import { defaultAccordionButtonIcon } from './overrides/accordionButtonIcon';
import { defaultPanel } from './overrides/panel';
import { defaultPanelBody } from './overrides/panelBody';
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
			first,
			last,
			selected,
			text,
			mode,
			panelId,
			tabId,
			onClick,
			onOpening,
			onOpen,
			onClosing,
			onClose,
			idx,
			children,
			overrides,
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
		const [initial, setInitial] = useState(true);
		const [closed, setClosed] = useState(true);
		const [measureRef, { height: panelBodyHeight }] = useMeasure({ polyfill: ResizeObserver });

		const defaultOverrides = {
			AccordionButton: defaultAccordionButton,
			AccordionButtonIcon: defaultAccordionButtonIcon,
			Panel: defaultPanel,
			PanelBody: defaultPanelBody,
		};

		const componentOverrides = overrides || context.state.overrides;

		const state = {
			hidden,
			look,
			first,
			last,
			selected,
			text,
			mode,
			panelId,
			onClick,
			onOpening,
			onOpen,
			onClosing,
			onClose,
			tabId,
			initial,
			idx,
			closed,
			context: context.state,
			overrides: componentOverrides,
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
			PanelBody: { component: PanelBody, styles: panelBodyStyles, attributes: panelBodyAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		const handleAccordionClick = () => {
			setInitial(false);
			setHidden(!hidden);
			onClick();
		};

		useEffect(() => {
			setHidden(!selected);
		}, [mode]);

		const prevSelected = usePrevious(selected);
		const prevHidden = usePrevious(hidden);

		const AnimatedPanel = animated(Panel);

		const animate = useSpring({
			config: {
				duration: 300,
				easing: BezierEasing(0.25, 0.1, 0.25, 1.0), //~'ease' CSS transition timing function
			},
			...(mode === 'accordion' && {
				height: hidden ? 0 : panelBodyHeight,
			}),
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
						// Opening
						onOpening({ idx, tabId });
					} else if (hidden && !prevHidden) {
						// Closing
						onClosing({ idx, tabId });
					}
				}
			},
			onRest: () => {
				if (mode === 'accordion') {
					if (hidden) {
						// Closed
						setClosed(true);
						onClose({ idx, tabId });
					} else if (!hidden) {
						// Opened
						setClosed(false);
						onOpen({ idx, tabId });
					}
				}
			},
		});

		return (
			<div css={{ label: getLabel('tabcordion-item') }}>
				{mode === 'accordion' && (
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
				)}

				<AnimatedPanel
					ref={ref}
					style={animate}
					state={state}
					{...panelAttributes(state)}
					css={panelStyles(state)}
				>
					<PanelBody
						ref={measureRef}
						state={state}
						{...panelBodyAttributes(state)}
						css={panelBodyStyles(state)}
					>
						{children}
					</PanelBody>
				</AnimatedPanel>
			</div>
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
	 * Indicator if this is the first tab
	 */
	first: PropTypes.bool,

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
