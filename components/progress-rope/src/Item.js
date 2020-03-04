/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultItemRoot } from './overrides/item';
import { defaultItemButton } from './overrides/itemButton';

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
		ItemRoot: defaultItemRoot,
		ItemButton: defaultItemButton,
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
		} else if (end) {
			if (currStep === index) {
				furthest = true;
			} else if (grouped && currGroup === index && currStep === 0) {
				furthest = true;
			}
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

	const {
		ItemRoot: { component: ItemRoot, styles: itemRootStyles, attributes: itemRootAttributes },
		ItemButton: {
			component: ItemButton,
			styles: itemButtonStyles,
			attributes: itemButtonAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ItemRoot state={state} {...rest} {...itemRootAttributes(state)} css={itemRootStyles(state)}>
			<ItemButton
				aria-current={active ? 'step' : undefined}
				onClick={onClick}
				visited={visited}
				state={state}
				{...itemButtonAttributes(state)}
				css={itemButtonStyles(state)}
			>
				{children}
			</ItemButton>
		</ItemRoot>
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
