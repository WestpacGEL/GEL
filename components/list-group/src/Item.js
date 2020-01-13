/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';
import React from 'react';

import { Item as ItemWrapper, itemStyles } from './overrides/item';
import pkg from '../package.json';

// ==============================
// Component
//
// List Group: List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
// Ideal for settings pages or preferences.
// ==============================

export const Item = ({ overrides: componentOverrides, ...rest }) => {
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
	};

	const state = {
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
			{...overrides.Item.attributes(state)}
			css={overrides.Item.styles(state)}
		/>
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
