import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultTBody } from './overrides/tbody';

import { useTableContext } from './Table';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface TbodyProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Tbody?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Tbody = ({ children, overrides, ...rest }: TbodyProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();

	const defaultOverrides = {
		Tbody: defaultTBody,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Tbody: { component: Tbody, styles: tbodyStyles, attributes: tbodyAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Tbody {...rest} state={state} {...tbodyAttributes(state)} css={tbodyStyles(state)}>
			{children}
		</Tbody>
	);
};

Tbody.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tbody: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
