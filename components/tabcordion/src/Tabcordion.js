import React, { Children, Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useContainerQuery } from '@westpac/hooks';

import { TabItem, TabRow } from './styled';
import { Tab } from './Tab';

let instanceId = 0;

export const Tabcordion = props => {
	const [activeTabIndex, setActiveTabIndex] = useState(props.activeTabIndex);
	const [instancePrefix, setInstancePrefix] = useState(props.instanceId);

	const containerRef = useRef();
	const { width } = useContainerQuery(containerRef);
	const mode = props.mode ? props.mode : width < 768 ? 'accordion' : 'tabs';
	const setActive = idx => () => setActiveTabIndex(idx);

	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix('gel-tabcordion-' + ++instanceId);
		}
	});

	const getId = (type, index) => `${instancePrefix}-${type}-${index + 1}`;

	return (
		<div ref={containerRef}>
			{mode === 'tabs' ? (
				<TabRow role="tablist" aria-label={props.ariaLabel}>
					{Children.map(props.children, (child, idx) => {
						const isSelected = activeTabIndex === idx;
						return (
							<TabItem
								aria-controls={getId('panel', idx)}
								aria-selected={isSelected}
								id={getId('tab', idx)}
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
	/* Provide a label that describes the purpose of the set of tabs. */
	ariaLabel: PropTypes.string,
	/* An array of Tab components that can be navigated through */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Tab]),
		})
	).isRequired,
	/* Define an id prefix for the elements e.g. for a prefix of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc. */
	instanceId: PropTypes.string,
	// Lock the mode to either "accordion" or "tabs". The default is responsive.
	mode: PropTypes.oneOf(['accordion', 'tabs']),
};
Tabcordion.defaultProps = {
	activeTabIndex: 0,
};
