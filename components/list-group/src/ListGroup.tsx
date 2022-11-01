/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, GEL } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { defaultListGroup } from './overrides/listGroup';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ListGroupContext = createContext(null);

export const useListGroupContext = () => {
	const context = useContext(ListGroupContext);

	if (!context) {
		throw new Error('<Item/> components should be wrapped in a <ListGroup>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const ListGroup = ({
	children,
	overrides: componentOverrides,
	...rest
}: typeof ListGroup.propTypes & typeof ListGroup.defaultProps) => {
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
