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

export const useTableContext = () => useContext(TableContext);

// ==============================
// Component
// ==============================
export const Table = ({
	striped,
	bordered,
	responsive,
	overrides: componentOverrides,
	...props
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
		...props,
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
			<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
				<overrides.subComponent.Table.component
					css={overrides.subComponent.Table.styles}
					{...overrides.subComponent.Table.attributes(state)}
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
