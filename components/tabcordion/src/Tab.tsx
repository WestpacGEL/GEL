/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

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
		}: typeof Tab.propTypes & typeof Tab.defaultProps,
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
		}, [mode]);

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
	text: PropTypes.node.isRequired,

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
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionBtnIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		PanelBody: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
