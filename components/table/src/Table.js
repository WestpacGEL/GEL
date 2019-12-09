/** @jsx jsx */

import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================
const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

// ==============================
// Component
// ==============================

export const Table = ({ striped, bordered, responsive, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();
	const context = useTableContext();

	const overrides = {
		tableCSS: {},
	};

	merge(overrides, overridesWithTokens);

	bordered = (context && context.bordered) || bordered;

	return (
		<TableContext.Provider
			value={{
				bordered,
			}}
		>
			<div
				css={{
					'@media screen and (max-width: 480px)': {
						width: '100%',
						marginBottom: '1.125rem',
						overflowY: 'hidden',
						overflowX: 'auto',
						border: `1px solid ${COLORS.border}`,
					},
				}}
			>
				<table
					css={{
						width: '100%',
						maxWidth: '100%',
						marginBottom: '1.3125rem',
						backgroundColor: '#fff',
						borderCollapse: 'collapse',

						// Odd row
						'tbody > tr:nth-of-type(even)': {
							backgroundColor: striped && COLORS.light,
						},

						// Adjacent `tbody` elements
						'tbody + tbody': {
							borderTop: `2px solid ${COLORS.hero}`,
						},
						...overrides.tableCSS,
					}}
					{...props}
				/>
			</div>
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
};

Table.defaultProps = {
	bordered: false,
	striped: false,
};
