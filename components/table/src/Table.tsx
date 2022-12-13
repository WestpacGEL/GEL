/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { defaultWrapper } from './overrides/wrapper';
import { defaultTable } from './overrides/table';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const TableContext = createContext(null);

export const useTableContext = () => {
	const context = useContext(TableContext);

	if (!context) {
		throw new Error('Table sub-components should be wrapped in a <Table>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Table = ({
	striped,
	bordered,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Table.propTypes & typeof Table.defaultProps) => {
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

// ==============================
// Types
// ==============================

Table.propTypes = {
	/**
	 * Striped mode
	 */
	striped: PropTypes.bool,
	/**
	 * Bordered mode
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Table: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Caption: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Tbody: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Td: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Tfoot: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Th: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Thead: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Tr: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	bordered: false,
	striped: false,
};

Table.defaultProps = defaultProps;
