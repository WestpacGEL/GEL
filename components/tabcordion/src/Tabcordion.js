/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { createContext, useContext, Children, useEffect, useRef, useState } from 'react';
import { useContainerQuery } from '@westpac/hooks';
import PropTypes from 'prop-types';

import { defaultTabcordion } from './overrides/tabcordion';
import { defaultTabButton } from './overrides/tabButton';
import { defaultTabRow } from './overrides/tabRow';

import { Tab } from './Tab';
import pkg from '../package.json';

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
	mode: tabcordionMode,
	look,
	justify,
	initialTabIndex,
	instanceIdPrefix,
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
		TabButton: defaultTabButton,
		TabRow: defaultTabRow,
	};

	const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);
	const [instanceId, setInstanceId] = useState(instanceIdPrefix);

	const containerRef = useRef();
	const panelRef = useRef();
	const tablistRef = useRef();

	const { width } = useContainerQuery(containerRef);
	const mode =
		tabcordionMode !== 'responsive' ? tabcordionMode : width < 768 ? 'accordion' : 'tabs';

	const setActive = idx => () => setActiveTabIndex(idx);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-tabcordion-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const getId = (type, index) => `${instanceId}-${type}-${index + 1}`;
	const tabCount = Children.count(children);

	const state = {
		mode,
		look,
		justify,
		initialTabIndex: activeTabIndex,
		instanceId,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Tabcordion: {
			component: Tabcordion,
			styles: tabcordionStyles,
			attributes: tabcordionAttributes,
		},
		TabButton: { component: TabButton, styles: tabButtonStyles, attributes: tabButtonAttributes },
		TabRow: { component: TabRow, styles: tabRowStyles, attributes: tabRowAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// conditional logic can't include hooks and since our style functions likely contain hooks we build the JSX before we do the condition
	const TabsContent = (
		<TabRow ref={tablistRef} state={state} {...tabRowAttributes(state)} css={tabRowStyles(state)}>
			{Children.map(children, (child, idx) => {
				const selected = activeTabIndex === idx;
				const last = idx + 1 === tabCount;

				return (
					<TabButton
						key={child.props.text}
						onClick={setActive(idx)}
						state={state}
						{...tabButtonAttributes({
							...state,
							tabId: getId('tab', idx),
							panelId: getId('panel', idx),
							selected,
							last,
						})}
						css={tabButtonStyles({ ...state, selected, last })}
					>
						{child.props.text}
					</TabButton>
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
							last={idx + 1 === tabCount}
							selected={selected}
							mode={mode}
							panelId={getId('panel', idx)}
							tabId={getId('tab', idx)}
							onClick={setActive(idx)}
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
	 * The tab index to mount this component with
	 */
	initialTabIndex: PropTypes.number,

	/**
	 * Define an id prefix for the elements e.g. for a prefix of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc.
	 */
	instanceIdPrefix: PropTypes.string,

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
		TabButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TabRow: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionButton: PropTypes.shape({
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
	}),
};

Tabcordion.defaultProps = {
	look: 'soft',
	initialTabIndex: 0,
	justify: false,
	mode: 'responsive',
};
