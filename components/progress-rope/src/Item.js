/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { useProgressRopeContext } from './ProgressRope';
import { Item, itemStyles } from './overrides/item';
import { ItemText, itemTextStyles } from './overrides/itemText';
import pkg from '../package.json';

export const Item = ({
	index,
	groupIndex,
	review,
	onClick,
	children,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const { currStep, currGroup, grouped, ropeGraph } = useProgressRopeContext();

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Item: {
				styles: itemStyles,
				component: Item,
				attributes: state => state,
			},
			ItemText: {
				styles: itemTextStyles,
				component: ItemText,
				attributes: state => state,
			},
		},
	};

	const visited =
		(grouped && !review && ropeGraph[groupIndex][index] === 'visited') ||
		((!grouped || review) && ropeGraph[index][0] === 'visited');

	const active =
		(!grouped && index === currStep) ||
		(index === currStep && groupIndex === currGroup) ||
		(review && index === currGroup);

	let furthest = false;

	if (visited) {
		if (grouped && !review) {
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
		review,
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
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Item.component
			className={className}
			{...overrides.subComponent.Item.attributes(state)}
			css={overrides.subComponent.Item.styles}
		>
			<overrides.subComponent.ItemText.component
				onClick={onClick}
				{...overrides.subComponent.ItemText.attributes(state)}
				css={overrides.subComponent.ItemText.styles}
			>
				{children}
			</overrides.subComponent.ItemText.component>
		</overrides.subComponent.Item.component>
	);
};

// ==============================
// Types
// ==============================
Item.propTypes = {
	/**
	 * Whether or not a review step
	 */
	review: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Item: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			ItemText: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Item.defaultProps = {
	review: false,
};
