/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, GEL } from '@westpac/core';
import PropTypes from 'prop-types';
import React from 'react';

import {
	ListGroup as ListGroupWrapper,
	listGroupStyles,
	listGroupAttributes,
} from './overrides/listGroup';
import pkg from '../package.json';

// ==============================
// Component
//
// List Group: List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
// Ideal for settings pages or preferences.
// ==============================

export const ListGroup = ({ className, overrides: componentOverrides, ...rest }) => {
	const brand = useBrand();
	const tokenOverrides = brand.OVERRIDES[pkg.name];
	const brandOverrides = brand[pkg.name];

	const defaultOverrides = {
		ListGroup: {
			styles: listGroupStyles,
			component: ListGroupWrapper,
			attributes: (_, state) => ({ ...state, ...listGroupAttributes(state) }),
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
		<GEL
			brand={{
				...brand,
				// We have to pass on the overrides to our list Item component in it's own name-space
				'@westpac/list': {
					...(overrides.Item && {
						Item: overrides.Item,
					}),
				},
			}}
		>
			<overrides.ListGroup.component
				type="unstyled"
				className={className}
				{...overrides.ListGroup.attributes(state)}
				css={overrides.ListGroup.styles(state)}
			/>
		</GEL>
	);
};

// ==============================
// Types
// ==============================

ListGroup.propTypes = {
	/**
	 * The content for this list group
	 */
	children: PropTypes.node,

	/**
	 * Data for the crumbs
	 */
	data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ListGroup: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ListGroup.defaultProps = {};
