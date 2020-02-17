/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Item as ItemWrapper, itemStyles } from './overrides/item';
import { ItemButton, itemButtonStyles } from './overrides/itemButton';
import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

export const Item = ({
	index,
	groupIndex,
	end,
	onClick,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const { currStep, currGroup, grouped, ropeGraph } = useProgressRopeContext();

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Item: {
			styles: itemStyles,
			component: ItemWrapper,
			attributes: () => null,
		},
		ItemButton: {
			styles: itemButtonStyles,
			component: ItemButton,
			attributes: () => null,
		},
	};

	const visited =
		(grouped && !end && ropeGraph[groupIndex][index] === 'visited') ||
		((!grouped || end) && ropeGraph[index][0] === 'visited');

	const active =
		(!grouped && index === currStep) ||
		(index === currStep && groupIndex === currGroup) ||
		(end && index === currGroup);

	let furthest = false;

	if (visited) {
		if (grouped && !end) {
			if (ropeGraph[groupIndex][index + 1] && ropeGraph[groupIndex][index + 1] === 'unvisited') {
				furthest = true;
			} else if (
				!ropeGraph[groupIndex][index + 1] &&
				ropeGraph[groupIndex + 1] &&
				ropeGraph[groupIndex + 1][0] === 'unvisited'
			) {
				furthest = true;
			}
		} else if (ropeGraph[index + 1] && ropeGraph[index + 1][0] === 'unvisited') {
			furthest = true;
		}
	}

	const state = {
		index,
		groupIndex,
		end,
		onClick,
		visited,
		grouped,
		active,
		furthest,
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
		<overrides.Item.component
			index={index}
			groupIndex={groupIndex}
			end={end}
			visited={visited}
			grouped={grouped}
			active={active}
			furthest={furthest}
			{...rest}
			{...overrides.Item.attributes(state)}
			css={overrides.Item.styles(state)}
		>
			<overrides.ItemButton.component
				index={index}
				groupIndex={groupIndex}
				end={end}
				onClick={onClick}
				aria-current={active ? 'step' : undefined}
				visited={visited}
				grouped={grouped}
				active={active}
				furthest={furthest}
				{...overrides.ItemButton.attributes(state)}
				css={overrides.ItemButton.styles(state)}
			>
				{children}
			</overrides.ItemButton.component>
		</overrides.Item.component>
	);
};

// ==============================
// Types
// ==============================
Item.propTypes = {
	/**
	 * The index of this item
	 */
	index: PropTypes.number,

	/**
	 * The index of this item
	 */
	groupIndex: PropTypes.number,

	/**
	 * Whether or not a end step
	 */
	end: PropTypes.bool,

	/**
	 * Handler to be called on click
	 */
	onClick: PropTypes.func.isRequired,

	/**
	 * Children
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ItemButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Item.defaultProps = {
	end: false,
};
