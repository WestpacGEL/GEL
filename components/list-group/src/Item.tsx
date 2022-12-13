/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultItem } from './overrides/item';

import { useListGroupContext } from './ListGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Item = ({
	children,
	overrides,
	...rest
}: typeof Item.propTypes & typeof Item.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const context = useListGroupContext();

	const defaultOverrides = {
		Item: defaultItem,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Item {...rest} {...itemAttributes(state)} css={itemStyles(state)}>
			{children}
		</Item>
	);
};

// ==============================
// Types
// ==============================

Item.propTypes = {
	/**
	 * The content for this list group item
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
	}),
};

Item.defaultProps = {};
