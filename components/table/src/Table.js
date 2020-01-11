/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { Table as TableWrapper, tableStyles } from './overrides/table';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================
const TableContext = createContext();

export const useTableContext = () => {
	const context = useContext(TableContext);

	if (!context) {
		throw new Error('Table sub-components should be wrapped in <Table>.');
	}

	return context;
};

// ==============================
// Component
// ==============================
export const Table = ({
	striped,
	bordered,
	responsive,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const context = useContext(TableContext);
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Wrapper: {
			styles: wrapperStyles,
			component: Wrapper,
			attributes: (_, a) => a,
		},
		Table: {
			styles: tableStyles,
			component: TableWrapper,
			attributes: (_, a) => a,
		},
	};

	const state = {
		striped,
		responsive,
		bordered,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<TableContext.Provider
			value={{
				bordered,
			}}
		>
			<overrides.Wrapper.component
				className={className}
				{...overrides.Wrapper.attributes(state)}
				css={overrides.Wrapper.styles(state)}
			>
				<overrides.Table.component
					{...overrides.Table.attributes(state)}
					css={overrides.Table.styles(state)}
				/>
			</overrides.Wrapper.component>
		</TableContext.Provider>
	);
};

// ==============================
// Types
// ==============================
Table.propTypes = {
	/**
	 * Bordered mode
	 */
	bordered: PropTypes.bool,

	/**
	 * Striped mode
	 */
	striped: PropTypes.bool,

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

Table.defaultProps = {
	bordered: false,
	striped: false,
};
