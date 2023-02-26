import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { useState, forwardRef, useEffect } from 'react';

import { defaultAccordionBtnIcon } from './overrides/accordionBtnIcon';
import { defaultAccordionBtn } from './overrides/accordionBtn';
import { defaultPanelBody } from './overrides/panelBody';
import { useTabcordionContext } from './Tabcordion';
import { defaultPanel } from './overrides/panel';
import { defaultItem } from './overrides/item';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export interface TabProps {
	/**
	 * Idx
	 */
	idx?: string;
	/**
	 * The look of the tabs
	 */
	look?: 'soft' | 'lego';
	/**
	 * Indicator if this is the first tab
	 */
	first?: boolean;
	/**
	 * Indicator if this is the last tab
	 */
	last?: boolean;
	/**
	 * Whether this tab/panel is selected/expanded
	 */
	selected?: boolean;
	/**
	 * The text label for this tab
	 */
	text: React.ReactNode;
	/**
	 * Render as either an accordion or tabs
	 */
	mode?: 'accordion' | 'tabs';
	/**
	 * The id for this tab's panel
	 */
	panelId?: string;
	/**
	 * The id for the tab
	 */
	tabId?: string;
	/**
	 * The onClick handler for the accordion button
	 */
	onClick?(...args: unknown[]): unknown;
	/**
	 * Callback function run when a tab/panel is open.
	 */
	onOpen?(...args: unknown[]): unknown;
	/**
	 * Callback function run when a tab/panel is opening.
	 */
	onOpening?(...args: unknown[]): unknown;
	/**
	 * Callback function run when a tab/panel is closed.
	 */
	onClose?(...args: unknown[]): unknown;
	/**
	 * Callback function run when a tab/panel is closing.
	 */
	onClosing?(...args: unknown[]): unknown;
	/**
	 * The panel content for this tab
	 */
	children: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Item?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
		AccordionBtn?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
		AccordionBtnIcon?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
		Panel?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
		PanelBody?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
	};
}
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
			onClick = () => {},
			onOpening,
			onOpen = () => {},
			onClosing,
			onClose = () => {},
			idx,
			children,
			overrides,
			...rest
		}: TabProps,
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
		const [panelHeight, setPanelHeight] = useState(null);

		const defaultOverrides = {
			Item: defaultItem,
			AccordionBtn: defaultAccordionBtn,
			AccordionBtnIcon: defaultAccordionBtnIcon,
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
			setClosed,
			panelHeight,
			context: context.state,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
			AccordionBtn: {
				component: AccordionBtn,
				styles: accordionBtnStyles,
				attributes: accordionBtnAttributes,
			},
			AccordionBtnIcon: {
				component: AccordionBtnIcon,
				styles: accordionBtnIconStyles,
				attributes: accordionBtnIconAttributes,
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
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [mode]);

		useEffect(() => {
			if (mode === 'tabs') {
				if (selected) {
					onOpen({ idx, tabId });
				} else {
					onClose({ idx, tabId });
				}
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [selected, tabId]);

		return (
			<Item state={state} {...itemAttributes(state)} css={itemStyles(state)}>
				{mode === 'accordion' && (
					<AccordionBtn
						onClick={handleAccordionClick}
						state={state}
						{...accordionBtnAttributes(state)}
						css={accordionBtnStyles(state)}
					>
						<span>{text}</span>
						<AccordionBtnIcon
							state={state}
							{...accordionBtnIconAttributes(state)}
							css={accordionBtnIconStyles(state)}
						/>
					</AccordionBtn>
				)}

				<Panel ref={ref} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
					<PanelBody
						setPanelHeight={setPanelHeight}
						state={state}
						{...panelBodyAttributes(state)}
						css={panelBodyStyles(state)}
					>
						{children}
					</PanelBody>
				</Panel>
			</Item>
		);
	}
);
Tab.displayName = 'Tab';

// ==============================
// Types
// ==============================

Tab.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * The panel content for this tab
	 */
	children: PropTypes.node,
	/**
	 * Indicator if this is the first tab
	 */
	first: PropTypes.bool,
	/**
	 * Idx
	 */
	idx: PropTypes.string,
	/**
	 * Indicator if this is the last tab
	 */
	last: PropTypes.bool,
	/**
	 * The look of the tabs
	 */
	look: PropTypes.oneOf(['lego', 'soft']),
	/**
	 * Render as either an accordion or tabs
	 */
	mode: PropTypes.oneOf(['accordion', 'tabs']),
	/**
	 * The onClick handler for the accordion button
	 */
	onClick: PropTypes.func,
	/**
	 * Callback function run when a tab/panel is closed.
	 */
	onClose: PropTypes.func,
	/**
	 * Callback function run when a tab/panel is closing.
	 */
	onClosing: PropTypes.func,
	/**
	 * Callback function run when a tab/panel is open.
	 */
	onOpen: PropTypes.func,
	/**
	 * Callback function run when a tab/panel is opening.
	 */
	onOpening: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AccordionBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		AccordionBtnIcon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Item: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		PanelBody: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * The id for this tab's panel
	 */
	panelId: PropTypes.string,
	/**
	 * Whether this tab/panel is selected/expanded
	 */
	selected: PropTypes.bool,
	/**
	 * The id for the tab
	 */
	tabId: PropTypes.string,
	/**
	 * The text label for this tab
	 */
	text: PropTypes.node,
};
