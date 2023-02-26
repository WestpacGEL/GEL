import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultTd } from './overrides/td';

import { useTableContext } from './Table';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface TdProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Whether or not the cell is highlighted
	 */
	highlighted?: boolean;
	/**
	 * Whether or not the start of the highlighted cells
	 */
	highlightStart?: boolean;
	/**
	 * Bordered mode
	 */
	bordered?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Td?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Td = ({
	highlighted = false,
	highlightStart = false,
	bordered,
	children,
	overrides,
	...rest
}: TdProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Td: defaultTd,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		highlighted,
		highlightStart,
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Td: { component: Td, styles: tdStyles, attributes: tdAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Td {...rest} state={state} {...tdAttributes(state)} css={tdStyles(state)}>
			{children}
		</Td>
	);
};

Td.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Bordered mode
	 */
	bordered: PropTypes.bool,
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Whether or not the cell is highlighted
	 */
	highlighted: PropTypes.bool,
	/**
	 * Whether or not the start of the highlighted cells
	 */
	highlightStart: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Td: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};

Td.defaultProps = { highlighted: false, highlightStart: false };
