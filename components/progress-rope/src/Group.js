/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { GroupItems, groupItemsStyles } from './overrides/groupItems';
import { GroupText, groupTextStyles } from './overrides/groupText';
import { Group, groupStyles } from './overrides/group';
import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

export const Group = ({
	index,
	text,
	children,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const { openGroup, ropeGraph, handleClick } = useProgressRopeContext();
	const active = ropeGraph[index].includes('visited');

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Group: {
				styles: groupStyles,
				component: Group,
				attributes: state => state,
			},
			GroupText: {
				styles: groupTextStyles,
				component: GroupText,
				attributes: state => state,
			},
			GroupItems: {
				styles: groupItemsStyles,
				component: GroupItems,
				attributes: state => state,
			},
		},
	};

	const state = {
		text,
		active,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);
	return (
		<overrides.subComponent.Group.component
			className={className}
			{...overrides.subComponent.Group.attributes(state)}
			css={overrides.subComponent.Group.styles}
		>
			<overrides.subComponent.GroupText.component
				onClick={() => handleClick(index)}
				{...overrides.subComponent.GroupText.attributes(state)}
				css={overrides.subComponent.GroupText.styles}
			>
				{text}
			</overrides.subComponent.GroupText.component>
			<overrides.subComponent.GroupItems.component
				hidden={openGroup === null || index !== openGroup}
				{...overrides.subComponent.GroupItems.attributes(state)}
				css={overrides.subComponent.GroupItems.styles}
			>
				{Children.map(children, (child, i) => cloneElement(child, { index: i, groupIndex: index }))}
			</overrides.subComponent.GroupItems.component>
		</overrides.subComponent.Group.component>
	);
};

// ==============================
// Types
// ==============================
Group.propTypes = {
	/**
	 * Group text
	 */
	text: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Group: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			GroupText: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			GroupItems: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
