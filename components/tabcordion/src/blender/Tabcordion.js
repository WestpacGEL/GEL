import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext, Children } from 'react';
import PropTypes from 'prop-types';

import { defaultTabcordion } from '../overrides/tabcordion';
import { defaultTabBtn } from '../overrides/tabBtn';
import { defaultTabRow } from '../overrides/tabRow';

import { Tab } from './Tab';
import pkg from '../../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const TabcordionContext = createContext();

export const useTabcordionContext = () => {
	const context = useContext(TabcordionContext);

	if (!context) {
		throw new Error('<Tab/> components should be wrapped in a <Tabcordion>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Tabcordion = ({
	instanceId = 'gel-tabcordion',
	mode = 'responsive',
	look = 'soft',
	justify = false,
	openTab = 0,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Tabcordion: defaultTabcordion,
		TabBtn: defaultTabBtn,
		TabRow: defaultTabRow,
	};

	const getId = (type, index) => `${instanceId}-${type}-${index + 1}`;
	const tabCount = Children.count(children);

	const state = {
		instanceId,
		mode,
		look,
		justify,
		openTab,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Tabcordion: {
			component: Tabcordion,
			styles: tabcordionStyles,
			attributes: tabcordionAttributes,
		},
		TabBtn: { component: TabBtn, styles: tabBtnStyles, attributes: tabBtnAttributes },
		TabRow: { component: TabRow, styles: tabRowStyles, attributes: tabRowAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// conditional logic can't include hooks and since our style functions likely contain hooks we build the JSX before we do the condition

	const TabsContent = (
		<TabRow state={state} {...tabRowAttributes(state)} css={tabRowStyles(state)}>
			{Children.map(children, (child, idx) => {
				const selected = openTab === idx;
				const first = idx === 0;
				const last = idx + 1 === tabCount;

				return (
					<TabBtn
						key={child.props.text}
						state={state}
						{...tabBtnAttributes({
							...state,
							tabId: getId('tab', idx),
							panelId: getId('panel', idx),
							selected,
							first,
							last,
						})}
						css={tabBtnStyles({ ...state, selected, first, last })}
					>
						{child.props.text}
					</TabBtn>
				);
			})}
		</TabRow>
	);

	return (
		<TabcordionContext.Provider value={{ state }}>
			<Tabcordion
				{...rest}
				state={state}
				{...tabcordionAttributes(state)}
				css={tabcordionStyles(state)}
			>
				{(mode === 'tabs' || mode === 'responsive') && TabsContent}

				{Children.map(children, (child, idx) => {
					const selected = openTab === idx;
					return (
						<Tab
							{...child.props}
							key={child.props.text}
							look={look}
							first={idx === 0}
							last={idx + 1 === tabCount}
							selected={selected}
							mode={mode}
							panelId={getId('panel', idx)}
							tabId={getId('tab', idx)}
							idx={idx}
						/>
					);
				})}
			</Tabcordion>
		</TabcordionContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Tabcordion.propTypes = {
	/**
	 * Define an id for the elements e.g. for an instanceId of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc.
	 */
	instanceId: PropTypes.string,

	/**
	 * Lock the mode to either "accordion" or "tabs". The default is "responsive".
	 */
	mode: PropTypes.oneOf(['responsive', 'accordion', 'tabs']),

	/**
	 * The look of the tabs
	 */
	look: PropTypes.oneOf(['soft', 'lego']),

	/**
	 * Whether or not tabs should stretch full width
	 */
	justify: PropTypes.bool,

	/**
	 * Current open tab (zero-indexed)
	 */
	openTab: PropTypes.number,

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
	 * An array of Tab components that can be navigated through
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tabcordion: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TabBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TabRow: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Item: PropTypes.shape({
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
