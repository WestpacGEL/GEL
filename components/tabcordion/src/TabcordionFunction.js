import React, { Children, Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useContainerQuery } from '@westpac/hooks';

import { TabItem, TabRow } from './styled';
import { Tab } from './Tab';

let instanceId = 0;

export function Tabcordion(props) {
	const [activeTabIndex, setActiveTabIndex] = useState();
	const [instancePrefix, setInstancePrefix] = useState(props.instanceId);

	const ref = useRef();
	const width = useContainerQuery(ref);
	const mode = props.mode || width < 768 ? 'accordion' : 'tabs';
	const setActive = idx => () => setActiveTabIndex(idx);

	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix('gel-tabcordion-' + instanceId++);
		}
	});

	return (
		<div ref={ref}>
			{mode === 'tabs' ? (
				<TabRow>
					{Children.map(props.children, (child, idx) => (
						<TabItem onClick={setActive(idx)} isSelected={activeTabIndex === idx}>
							{child.props.label}
						</TabItem>
					))}
				</TabRow>
			) : null}

			{Children.map(props.children, (child, idx) => (
				<Tab
					{...child.props}
					activeTabIndex={activeTabIndex}
					index={idx}
					index={idx}
					isSelected={activeTabIndex === idx}
					key={child.props.label}
					mode={mode}
					onClick={setActive(idx)}
					prefix={instancePrefix}
				/>
			))}
		</div>
	);
}

Tabcordion.propTypes = {
	/* An array of TabPanes that can be navigated through */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Tab]),
		})
	).isRequired,
	/* Define an id prefix for the select components e.g. {your-id}-value */
	instanceId: PropTypes.string,
	// Lock the mode. Does not respond to changing container widths
	mode: PropTypes.oneOf(['accordion', 'tabs']),
};
Tabcordion.defaultProps = {
	activeTabIndex: 0,
};
