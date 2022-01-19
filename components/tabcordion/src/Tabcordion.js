/** @jsx jsx */

import { createContext, useContext, Children, useEffect, useRef, useState } from 'react';
import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useContainerQuery } from '@westpac/hooks';
import PropTypes from 'prop-types';

import { defaultTabcordion } from './overrides/tabcordion';
import { defaultTabBtn } from './overrides/tabBtn';
import { defaultTabRow } from './overrides/tabRow';
import pkg from '../package.json';
import { Tab } from './Tab';

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
	instanceId,
	mode: tabcordionMode,
	look,
	justify,
	openTab,
	onOpen = () => {},
	onOpening = () => {},
	onClose = () => {},
	onClosing = () => {},
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

	const [activeTabIndex, setActiveTabIndex] = useState(openTab);
	const [id] = useState(instanceId || `gel-tabcordion-${useInstanceId()}`);

	const containerRef = useRef();
	const panelRef = useRef();
	const tablistRef = useRef();

	const { width } = useContainerQuery(containerRef);
	const mode =
		tabcordionMode !== 'responsive' ? tabcordionMode : width < 768 ? 'accordion' : 'tabs';

	const setActive = (idx) => () => setActiveTabIndex(idx);

	useEffect(() => setActiveTabIndex(openTab), [openTab]);

	const getId = (type, index) => `${id}-${type}-${index + 1}`;
	const tabCount = Children.count(children);

	const state = {
		id,
		mode,
		look,
		justify,
		openTab: activeTabIndex,
		onOpen,
		onOpening,
		onClose,
		onClosing,
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
		<TabRow ref={tablistRef} state={state} {...tabRowAttributes(state)} css={tabRowStyles(state)}>
			{Children.map(children, (child, idx) => {
				const selected = activeTabIndex === idx;
				const first = idx === 0;
				const last = idx + 1 === tabCount;

				return (
					<TabBtn
						key={child.props.text}
						onClick={setActive(idx)}
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
				ref={containerRef}
				{...rest}
				state={state}
				{...tabcordionAttributes(state)}
				css={tabcordionStyles(state)}
			>
				{mode === 'tabs' && TabsContent}

				{Children.map(children, (child, idx) => {
					const selected = activeTabIndex === idx;
					return (
						<Tab
							{...child.props}
							key={child.props.text}
							ref={selected ? panelRef : null}
							look={look}
							first={idx === 0}
							last={idx + 1 === tabCount}
							selected={selected}
							mode={mode}
							panelId={getId('panel', idx)}
							tabId={getId('tab', idx)}
							onClick={setActive(idx)}
							onOpen={onOpen}
							onOpening={onOpening}
							onClose={onClose}
							onClosing={onClosing}
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
		AccordionIcon: PropTypes.shape({
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

Tabcordion.defaultProps = {
	look: 'soft',
	openTab: 0,
	justify: false,
	mode: 'responsive',
};
