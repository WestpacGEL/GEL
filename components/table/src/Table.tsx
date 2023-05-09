import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { createContext, ReactNode, useContext } from 'react';

import { defaultWrapper } from './overrides/wrapper';
import { defaultTable } from './overrides/table';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const TableContext = createContext<any>(null);

export const useTableContext = () => {
	const context = useContext<any>(TableContext);

	if (!context) {
		throw new Error('Table sub-components should be wrapped in a <Table>.');
	}

	return context;
};

export interface TableProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Striped mode
	 */
	striped?: boolean;
	/**
	 * Bordered mode
	 */
	bordered?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Table?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Caption?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Tbody?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Td?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Tfoot?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Th?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Thead?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Tr?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Table = ({
	striped = false,
	bordered = false,
	children,
	overrides: componentOverrides,
	...rest
}: TableProps) => {
	const context = useContext(TableContext);
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Wrapper: defaultWrapper,
		Table: defaultTable,
	};

	const state = {
		striped,
		bordered,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Wrapper: { component: Wrapper, styles: wrapperStyles, attributes: wrapperAttributes },
		Table: { component: Table, styles: tableStyles, attributes: tableAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TableContext.Provider
			value={{
				striped,
				bordered,
				state,
			}}
		>
			<Wrapper state={state} {...wrapperAttributes(state)} css={wrapperStyles(state)}>
				<Table {...rest} state={state} {...tableAttributes(state)} css={tableStyles(state)}>
					{children}
				</Table>
			</Wrapper>
		</TableContext.Provider>
	);
};

Table.propTypes = {
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
	 * The override API
	 */
	overrides: PropTypes.shape({
		Caption: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Table: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Tbody: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Td: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Tfoot: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Th: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Thead: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Tr: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Striped mode
	 */
	striped: PropTypes.bool,
};
