import React, { Children, Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useContainerQuery, useKeyEvent } from '@westpac/hooks';

import { TabItem, TabRow } from './styled';
import { Tab } from './Tab';

let instanceId = 0;
const VALID_KEYS = ['ArrowLeft', 'ArrowRight', 'PageDown', 'PageUp', 'End', 'Home'];

export const Tabcordion = props => {
	const containerRef = useRef();
	const tablistRef = useRef();
	const { width } = useContainerQuery(containerRef);
	const mode = props.mode !== 'responsive' ? props.mode : width < 768 ? 'accordion' : 'tabs';
	const setActive = idx => () => setActiveTabIndex(idx);

	// unless explicitly provided
	// const initialIndex =
	// 	props.initialTabIndex !== undefined ? props.initialTabIndex : mode === 'accordion' ? null : 0;

	const [activeTabIndex, setActiveTabIndex] = useState(props.initialTabIndex);
	const [instancePrefix, setInstancePrefix] = useState(props.instanceId);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix(`gel-tabcordion-${++instanceId}`);
		}
	});

	// handle keys
	const keyHandler = key => {
		// bail unless a tab belonging to this tablist is focused
		if (!tablistRef.current || !tablistRef.current.contains(document.activeElement)) return;

		// prepare helpers
		let nextIndex;
		let lastIndex = Children.count(props.children) - 1;

		// update index based on key pressed
		switch (key) {
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
		}

		setActiveTabIndex(nextIndex);
	};

	useKeyEvent(
		keyHandler,
		{ detectKeys: VALID_KEYS, preventDefault: true },
		{ dependencies: props.children }
	);

	const getId = (type, index) => `${instancePrefix}-${type}-${index + 1}`;

	return (
		<div ref={containerRef}>
			{mode === 'tabs' ? (
				<TabRow role="tablist" aria-label={props.ariaLabel} ref={tablistRef}>
					{Children.map(props.children, (child, idx) => {
						const isSelected = activeTabIndex === idx;
						return (
							<TabItem
								aria-controls={getId('panel', idx)}
								aria-selected={isSelected}
								appearance={props.appearance}
								id={getId('tab', idx)}
								isJustified={props.justifyTabs}
								isSelected={isSelected}
								key={child.props.label}
								onClick={setActive(idx)}
								role="tab"
							>
								{child.props.label}
							</TabItem>
						);
					})}
				</TabRow>
			) : null}

			{Children.map(props.children, (child, idx) => (
				<Tab
					{...child.props}
					activeTabIndex={activeTabIndex}
					appearance={props.appearance}
					tabId={getId('tab', idx)}
					panelId={getId('panel', idx)}
					isSelected={activeTabIndex === idx}
					key={child.props.label}
					mode={mode}
					onClick={setActive(idx)}
				/>
			))}
		</div>
	);
};

Tabcordion.propTypes = {
	/** The appearance of the tabs */
	appearance: PropTypes.oneOf(['soft', 'lego']),
	/** Provide a label that describes the purpose of the set of tabs. */
	ariaLabel: PropTypes.string,
	/** An array of Tab components that can be navigated through */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Tab]),
		})
	).isRequired,
	/** The tab index to mount this component with */
	initialTabIndex: PropTypes.number,
	/** Define an id prefix for the elements e.g. for a prefix of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc. */
	instanceId: PropTypes.string,
	/** Whether or not tabs should stretch full width */
	justifyTabs: PropTypes.bool,
	/** Lock the mode to either "accordion" or "tabs". The default is responsive. */
	mode: PropTypes.oneOf(['accordion', 'responsive', 'tabs']),
};
Tabcordion.defaultProps = {
	appearance: 'soft',
	initialTabIndex: 0,
	justifyTabs: false,
	mode: 'responsive',
};
