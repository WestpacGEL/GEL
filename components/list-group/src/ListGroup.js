/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, GEL } from '@westpac/core';
import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper, wrapperStyles, wrapperAttributes } from './overrides/wrapper';
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
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => ({ ...state, ...wrapperAttributes(state) }),
	};

	const state = {
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
		<GEL
			brand={{
				...brand,
				// We have to pass on the overrides to our list Item component in it's own name-space
				'@westpac/list': {
					...(overrides.subComponent && {
						subComponent: {
							Item: {
								styles: overrides.subComponent.Item.styles,
							},
						},
					}),
				},
			}}
		>
			<overrides.component
				type="unstyled"
				className={className}
				{...overrides.attributes(state)}
				css={overrides.styles}
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
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Item: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

ListGroup.defaultProps = {};
