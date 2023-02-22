import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultThead } from './overrides/thead';

import { useTableContext } from './Table';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

interface TheadProps {
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
		Thead?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Thead = ({ bordered, children, overrides, ...rest }: TheadProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Thead: defaultThead,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Thead: { component: Thead, styles: theadStyles, attributes: theadAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Thead {...rest} state={state} {...theadAttributes(state)} css={theadStyles(state)}>
			{children}
		</Thead>
	);
};

Thead.propTypes = {
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
		Thead: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
