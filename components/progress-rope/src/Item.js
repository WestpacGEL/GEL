/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Item as ItemWrapper, itemStyles } from './overrides/item';
import { ItemText, itemTextStyles } from './overrides/itemText';
import { useProgressRopeContext } from './ProgressRope';
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
		Item: {
			styles: itemStyles,
			component: ItemWrapper,
			attributes: (_, a) => a,
		},
		ItemText: {
			styles: itemTextStyles,
			component: ItemText,
			attributes: (_, a) => a,
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
		componentOverrides
	);

	return (
		<overrides.Item.component
			className={className}
			{...overrides.Item.attributes(state)}
			css={overrides.Item.styles(state)}
		>
			<overrides.ItemText.component
				onClick={onClick}
				{...overrides.ItemText.attributes(state)}
				css={overrides.ItemText.styles(state)}
			>
				{children}
			</overrides.ItemText.component>
		</overrides.Item.component>
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
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ItemText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Item.defaultProps = {
	review: false,
};
