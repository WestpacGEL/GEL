import React, { Children, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ContainerQuery } from '../../core/src';
import { TabItem, TabRow } from './styled';
import { Tab } from './Tab';

let instanceId = 0;

export class Tabcordion extends React.Component {
	state = {
		activeTabIndex: this.props.activeTabIndex,
	};
	instancePrefix = this.props.instanceId || 'gel-tabcordion-' + ++instanceId;

	static propTypes = {
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
	static defaultProps = {
		activeTabIndex: 0,
	};

	setActive = activeTabIndex => () => {
		this.setState({ activeTabIndex });
	};

	getElementId = element => {
		return `${this.instancePrefix}-${element}`;
	};

	render() {
		const { activeTabIndex } = this.state;

		return (
			<ContainerQuery>
				{({ width }) => {
					const mode = this.props.mode || (width < 768 ? 'accordion' : 'tabs');

					return (
						<Fragment>
							{mode === 'tabs' ? (
								<TabRow>
									{Children.map(this.props.children, (child, idx) => (
										<TabItem onClick={this.setActive(idx)} isSelected={activeTabIndex === idx}>
											{child.props.label}
										</TabItem>
									))}
								</TabRow>
							) : null}
							{Children.map(this.props.children, (child, idx) => (
								<Tab
									{...this.state}
									{...child.props}
									key={child.props.label}
									isSelected={activeTabIndex === idx}
									index={idx}
									prefix={this.prefix}
									index={idx}
									onClick={this.setActive(idx)}
									mode={mode}
								/>
							))}
						</Fragment>
					);
				}}
			</ContainerQuery>
		);
	}
}
