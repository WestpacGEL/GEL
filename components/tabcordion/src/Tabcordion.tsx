import PropTypes from 'prop-types';
import React, {
	createContext,
	useContext,
	Children,
	useEffect,
	useRef,
	useState,
	useId,
	useMemo,
	useCallback,
} from 'react';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useContainerQuery } from '@westpac/hooks';

import { defaultTabcordion } from './overrides/tabcordion';
import { defaultTabBtn } from './overrides/tabBtn';
import { defaultTabRow } from './overrides/tabRow';
import pkg from '../package.json';
import { Tab } from './Tab';

// ==============================
// Context and Consumer Hook
// ==============================

const TabcordionContext = createContext<any>(null);

export const useTabcordionContext = () => {
	const context = useContext(TabcordionContext);

	if (!context) {
		throw new Error('<Tab/> components should be wrapped in a <Tabcordion>.');
	}

	return context;
};

export interface TabcordionProps {
	/**
	 * Define an id for the elements e.g. for an instanceId of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc.
	 */
	instanceId?: string;
	/**
	 * Lock the mode to either "accordion" or "tabs". The default is "responsive".
	 */
	mode?: 'responsive' | 'accordion' | 'tabs';
	/**
	 * The look of the tabs
	 */
	look?: 'soft' | 'lego';
	/**
	 * Whether or not tabs should stretch full width
	 */
	justify?: boolean;
	/**
	 * Current open tab (zero-indexed)
	 */
	openTab?: number;
	/**
	 * Callback function run when a tab/panel is open.
	 */
	onOpen?: (...args: unknown[]) => unknown;
	/**
	 * Callback function run when a tab/panel is opening.
	 */
	onOpening?: (...args: unknown[]) => unknown;
	/**
	 * Callback function run when a tab/panel is closed.
	 */
	onClose?: (...args: unknown[]) => unknown;
	/**
	 * Callback function run when a tab/panel is closing.
	 */
	onClosing?: (...args: unknown[]) => unknown;
	/**
	 * An array of Tab components that can be navigated through
	 */
	children: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Tabcordion?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		TabBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		TabRow?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Item?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		AccordionBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		AccordionIcon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Panel?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		PanelBody?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Tabcordion = ({
	instanceId,
	mode: tabcordionMode = 'responsive',
	look = 'soft',
	openTab = 0,
	justify = false,
	onOpen = () => {},
	onOpening = () => {},
	onClose = () => {},
	onClosing = () => {},
	children,
	overrides: componentOverrides,
	...rest
}: TabcordionProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Tabcordion: defaultTabcordion,
		TabBtn: defaultTabBtn,
		TabRow: defaultTabRow,
	};

	const [activeTabIndex, setActiveTabIndex] = useState<number | undefined>(openTab);
	const _id = useId();
	const id = useMemo(() => instanceId || `gel-tabcordion-${_id}`, [_id, instanceId]);

	const containerRef = useRef();
	const panelRef = useRef();
	const tablistRef = useRef();

	const { width } = useContainerQuery(containerRef);
	const mode =
		tabcordionMode !== 'responsive' ? tabcordionMode : width < 768 ? 'accordion' : 'tabs';

	const setActive = useCallback((idx: number) => () => setActiveTabIndex(idx), []);

	useEffect(() => setActiveTabIndex(openTab), [openTab]);

	const getId = useCallback((type: string, index: number) => `${id}-${type}-${index + 1}`, [id]);
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
						key={child?.props.text}
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
						{child?.props.text}
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
							{...child?.props}
							key={child?.props.text}
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

Tabcordion.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * An array of Tab components that can be navigated through
	 */
	children: PropTypes.node,
	/**
	 * Define an id for the elements e.g. for an instanceId of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc.
	 */
	instanceId: PropTypes.string,
	/**
	 * Whether or not tabs should stretch full width
	 */
	justify: PropTypes.bool,
	/**
	 * The look of the tabs
	 */
	look: PropTypes.oneOf(['lego', 'soft']),
	/**
	 * Lock the mode to either "accordion" or "tabs". The default is "responsive".
	 */
	mode: PropTypes.oneOf(['accordion', 'responsive', 'tabs']),
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
	 * Current open tab (zero-indexed)
	 */
	openTab: PropTypes.number,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AccordionBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		AccordionIcon: PropTypes.shape({
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
		TabBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Tabcordion: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		TabRow: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
