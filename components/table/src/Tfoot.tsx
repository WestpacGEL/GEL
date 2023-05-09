import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultTfoot } from './overrides/tfoot';

import { useTableContext } from './Table';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface TfootProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Whether or not there should border styling
	 */
	bordered?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Tfoot?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Tfoot = ({ bordered, children, overrides, ...rest }: TfootProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Tfoot: defaultTfoot,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Tfoot: { component: Tfoot, styles: tfootStyles, attributes: tfootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
	return (
		<Tfoot {...rest} state={state} {...tfootAttributes(state)} css={tfootStyles(state)}>
			{children}
		</Tfoot>
	);
};

Tfoot.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tfoot: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
