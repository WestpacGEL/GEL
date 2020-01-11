/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import React, { Children, useEffect, useRef, useState, createRef } from 'react';
import { useContainerQuery } from '@westpac/hooks';
import PropTypes from 'prop-types';

import { Tabcordion as TabcordionWrapper, tabcordionStyles } from './overrides/tabcordion';
import { TabItem, tabItemStyles } from './overrides/tabItem';
import { TabRow, tabRowStyles } from './overrides/tabRow';
import pkg from '../package.json';
import { Tab } from './Tab';

const VALID_KEYS = ['ArrowLeft', 'ArrowRight', 'PageDown', 'PageUp', 'Enter', 'End', 'Home'];

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
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Tabcordion: {
			styles: tabcordionStyles,
			component: TabcordionWrapper,
			attributes: (_, a) => a,
		},
		TabItem: {
			styles: tabItemStyles,
			component: TabItem,
			attributes: (_, a) => a,
		},
		TabRow: {
			styles: tabRowStyles,
			component: TabRow,
			attributes: (_, a) => a,
		},
	};

	const state = {
		look,
		justify,
		activeTabIndex,
		instancePrefix,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);
	const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);
	const [instancePrefix, setInstancePrefix] = useState(instanceIdPrefix);

	const containerRef = useRef();
	const panelRef = useRef();
	const tablistRef = useRef();
	const tabRefs = useRef([...Array(Children.count(children))].map(() => createRef()));
	const { width } = useContainerQuery(containerRef);
	const mode =
		tabcordionMode !== 'responsive' ? tabcordionMode : width < 768 ? 'accordion' : 'tabs';

	const setActive = idx => () => setActiveTabIndex(idx);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix(`gel-tabcordion-${useInstanceId()}`);
		}
	}, [instancePrefix]);

	// handle keys
	const keyHandler = event => {
		// bail unless a tab belonging to this tablist is focused
		if (!tablistRef.current || !tablistRef.current.contains(document.activeElement)) return;

		// bail on unknown keys
		if (VALID_KEYS.indexOf(event.key) === -1) return;

		// prevent scrolling when user navigates using keys that would influence
		// page scroll
		if (['PageDown', 'End', 'PageUp', 'Home'].indexOf(event.key) > -1) {
			event.preventDefault();
		}

		let nextIndex;
		let lastIndex = Children.count(children) - 1;

		switch (event.key) {
			case 'Enter':
				document.activeElement.click();
				panelRef.current.focus();
				break;
			case 'ArrowLeft':
				nextIndex = activeTabIndex === 0 ? lastIndex : activeTabIndex - 1;
				break;
			case 'ArrowRight':
				nextIndex = activeTabIndex === lastIndex ? 0 : activeTabIndex + 1;
				break;
			case 'PageDown':
			case 'End':
				nextIndex = lastIndex;
				break;
			case 'PageUp':
			case 'Home':
				nextIndex = 0;
				break;
			default:
				nextIndex = activeTabIndex;
		}

		// only update to valid index
		if (typeof nextIndex === 'number') {
			setActiveTabIndex(nextIndex);
			tabRefs.current[nextIndex].current.focus();
		}
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	const getId = (type, index) => `${instancePrefix}-${type}-${index + 1}`;
	const tabCount = Children.count(children);

	return (
		<overrides.Tabcordion.component
			ref={containerRef}
			className={className}
			{...overrides.Tabcordion.attributes(state)}
			css={overrides.Tabcordion.styles(state)}
		>
			{mode === 'tabs' ? (
				<overrides.TabRow.component
					role="tablist"
					ref={tablistRef}
					{...overrides.TabRow.attributes(state)}
					css={overrides.TabRow.styles(state)}
				>
					{Children.map(children, (child, idx) => {
						const selected = activeTabIndex === idx;
						return (
							<overrides.TabItem.component
								aria-controls={getId('panel', idx)}
								aria-selected={selected}
								id={getId('tab', idx)}
								last={idx + 1 === tabCount}
								selected={selected} //how would this work with styles...
								key={child.props.text}
								onClick={setActive(idx)}
								role="tab"
								ref={tabRefs.current[idx]}
								{...overrides.TabItem.attributes(state)}
								css={overrides.TabItem.styles(state)}
							>
								{child.props.text}
							</overrides.TabItem.component>
						);
					})}
				</overrides.TabRow.component>
			) : null}

			{Children.map(children, (child, idx) => {
				const selected = activeTabIndex === idx;
				return (
					<Tab
						{...child.props}
						activeTabIndex={activeTabIndex}
						look={look}
						selected={selected}
						last={idx + 1 === tabCount}
						key={child.props.text}
						mode={mode}
						onClick={setActive(idx)}
						panelId={getId('panel', idx)}
						ref={selected ? panelRef : null}
						tabId={getId('tab', idx)}
					/>
				);
			})}
		</overrides.Tabcordion.component>
	);
};

// ==============================
// Types
// ==============================
Tabcordion.propTypes = {
	/**
	 * The look of the tabs
	 */
	look: PropTypes.oneOf(['soft', 'lego']),

	/**
	 * An array of Tab components that can be navigated through
	 */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Tab]),
		})
	).isRequired,

	/**
	 * The tab index to mount this component with
	 */
	initialTabIndex: PropTypes.number,

	/**
	 * Define an id prefix for the elements e.g. for a prefix of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc.
	 */
	instanceIdPrefix: PropTypes.string,

	/**
	 * Whether or not tabs should stretch full width
	 */
	justify: PropTypes.bool,

	/**
	 * Lock the mode to either "accordion" or "tabs". The default is "responsive".
	 */
	mode: PropTypes.oneOf(['responsive', 'accordion', 'tabs']),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tabcordion: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TabItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TabRow: PropTypes.shape({
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
