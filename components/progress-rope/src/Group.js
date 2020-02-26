/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Group as GroupWrapper, groupStyles } from './overrides/group';
import { GroupItems, groupItemsStyles } from './overrides/groupItems';
import { GroupButton, groupButtonStyles } from './overrides/groupButton';
import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

export const Group = ({ index, text, children, overrides: componentOverrides, ...rest }) => {
	const { openGroup, ropeGraph, handleClick } = useProgressRopeContext();
	const active = ropeGraph[index].includes('visited');
	const complete = ropeGraph[index + 1][0] === 'visited';

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Group: {
			styles: groupStyles,
			component: GroupWrapper,
			attributes: () => null,
		},
		GroupButton: {
			styles: groupButtonStyles,
			component: GroupButton,
			attributes: () => null,
		},
		GroupItems: {
			styles: groupItemsStyles,
			component: GroupItems,
			attributes: () => null,
		},
	};

	const state = {
		index,
		text,
		complete,
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
			index={index}
			text={text}
			complete={complete}
			active={active}
			{...rest}
			{...overrides.Group.attributes(state)}
			css={overrides.Group.styles(state)}
		>
			<overrides.GroupButton.component
				onClick={() => handleClick(index)}
				aria-expanded={openGroup === index}
				index={index}
				text={text}
				complete={complete}
				active={active}
				{...overrides.GroupButton.attributes(state)}
				css={overrides.GroupButton.styles(state)}
			>
				{text}
			</overrides.GroupButton.component>
			<overrides.GroupItems.component
				hidden={openGroup === null || index !== openGroup}
				index={index}
				text={text}
				complete={complete}
				active={active}
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
	 * The index of this item
	 */
	index: PropTypes.number,

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
