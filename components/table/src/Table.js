/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, wrapperStyles, TableComponent, tableStyles } from './overrides/table';
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
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
			Table: {
				styles: tableStyles,
				component: TableComponent,
				attributes: state => state,
			},
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
		componentOverrides,
		state
	);

	return (
		<TableContext.Provider
			value={{
				bordered,
			}}
		>
			<overrides.component
				className={className}
				{...overrides.attributes(state)}
				css={overrides.styles}
			>
				<overrides.subComponent.Table.component
					{...overrides.subComponent.Table.attributes(state)}
					css={overrides.subComponent.Table.styles}
				/>
			</overrides.component>
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
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Table: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Table.defaultProps = {
	bordered: false,
	striped: false,
};
