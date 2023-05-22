import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, GEL } from '@westpac/core';
import React, { createContext, useContext } from 'react';

import { defaultListGroup } from './overrides/listGroup';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ListGroupContext = createContext<any>(null);

export const useListGroupContext = () => {
	const context = useContext(ListGroupContext);

	if (!context) {
		throw new Error('<Item/> components should be wrapped in a <ListGroup>.');
	}

	return context;
};

export interface ListGroupProps {
	/**
	 * The content for this list group
	 */
	children?: React.ReactNode;
	/**
	 * Data for the crumbs
	 */
	data?: string | React.ReactNode[];
	/**
	 * The override API
	 */
	overrides?: {
		ListGroup?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Item?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const ListGroup = ({ children, overrides: componentOverrides, ...rest }: ListGroupProps) => {
	const brand = useBrand();
	const tokenOverrides = brand.OVERRIDES[pkg.name];
	const brandOverrides = brand[pkg.name];

	const defaultOverrides = {
		ListGroup: defaultListGroup,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		ListGroup: { component: ListGroup, styles: listGroupStyles, attributes: listGroupAttributes },
		...overrides
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

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
			<ListGroupContext.Provider value={{ state }}>
				<ListGroup
					{...rest}
					state={state}
					{...listGroupAttributes(state)}
					css={listGroupStyles(state)}
				>
					{children}
				</ListGroup>
			</ListGroupContext.Provider>
		</GEL>
	);
};

ListGroup.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * The content for this list group
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Item: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ListGroup: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
