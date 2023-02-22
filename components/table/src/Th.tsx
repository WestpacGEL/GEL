import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultTh } from './overrides/th';

import { useTableContext } from './Table';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

interface ThProps {
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
		Th?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Th = ({ bordered, children, overrides, ...rest }: ThProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Th: defaultTh,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Th: { component: Th, styles: thStyles, attributes: thAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
	return (
		<Th {...rest} state={state} {...thAttributes(state)} css={thStyles(state)}>
			{children}
		</Th>
	);
};

Th.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
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
		Th: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
