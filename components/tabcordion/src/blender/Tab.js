import { Fragment, useState, forwardRef } from 'react';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultItem } from '../overrides/item';
import { defaultAccordionBtn } from '../overrides/accordionBtn';
import { defaultAccordionBtnIcon } from '../overrides/accordionBtnIcon';
import { defaultPanel } from '../overrides/panel';
import { defaultPanelBody } from '../overrides/panelBody';
import { useTabcordionContext } from './Tabcordion';
import pkg from '../../package.json';

// ==============================
// Component
// ==============================

export const Tab = forwardRef(
	(
		{ look, first, last, selected, text, mode, panelId, tabId, children, overrides, idx, ...rest },
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const context = useTabcordionContext();

		const [hidden, setHidden] = useState(!selected);

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
			tabId,
			idx,
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

		return (
			<Item state={state} {...itemAttributes(state)} css={itemStyles(state)}>
				{(mode === 'accordion' || mode === 'responsive') && (
					<AccordionBtn
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
					<PanelBody state={state} {...panelBodyAttributes(state)} css={panelBodyStyles(state)}>
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
	mode: PropTypes.oneOf(['responsive', 'accordion', 'tabs']),

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
