/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Group as GroupWrapper, groupStyles } from './overrides/group';
import { GroupItems, groupItemsStyles } from './overrides/groupItems';
import { GroupButton, groupButtonStyles } from './overrides/groupButton';
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
		Group: {
			styles: groupStyles,
			component: GroupWrapper,
			attributes: (_, a) => a,
		},
		GroupButton: {
			styles: groupButtonStyles,
			component: GroupButton,
			attributes: (_, a) => a,
		},
		GroupItems: {
			styles: groupItemsStyles,
			component: GroupItems,
			attributes: (_, a) => a,
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
		componentOverrides
	);
	return (
		<overrides.Group.component
			className={className}
			{...overrides.Group.attributes(state)}
			css={overrides.Group.styles(state)}
		>
			<overrides.GroupButton.component
				onClick={() => handleClick(index)}
				{...overrides.GroupButton.attributes(state)}
				css={overrides.GroupButton.styles(state)}
			>
				{text}
			</overrides.GroupButton.component>
			<overrides.GroupItems.component
				hidden={openGroup === null || index !== openGroup}
				{...overrides.GroupItems.attributes(state)}
				css={overrides.GroupItems.styles(state)}
			>
				{Children.map(children, (child, i) => cloneElement(child, { index: i, groupIndex: index }))}
			</overrides.GroupItems.component>
		</overrides.Group.component>
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
		Group: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		GroupButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		GroupItems: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
