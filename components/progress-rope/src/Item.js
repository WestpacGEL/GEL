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
		ItemButton: {
			styles: itemButtonStyles,
			component: ItemButton,
			attributes: (_, a) => a,
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
			<overrides.ItemButton.component
				onClick={onClick}
				aria-current={active ? 'step' : undefined}
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
	 * Whether or not a end step
	 */
	end: PropTypes.bool,

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
