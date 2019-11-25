/** @jsx jsx */

import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';

// ==============================
// Context and Consumer Hook
// ==============================
const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

// ==============================
// Component
// ==============================

const Wrapper = props => {
	const {
		COLORS,
		LAYOUT: { breakpoints },
	} = useBrand();

	// find screen width
	const maxWidth = width => `@media (max-width: ${width}px)`;
	const xsOnly = maxWidth(breakpoints.sm - 1);

	console.log('xs', xsOnly);

	return xsOnly ? <div css={{}}>{props.children}</div> : props.children;
};

export const Table = ({ striped, bordered, responsive, ...props }) => {
	const { COLORS, TYPE } = useBrand();

	const context = useTableContext();

	bordered = (context && context.bordered) || bordered;

	return (
		<TableContext.Provider
			value={{
				bordered,
			}}
		>
			<Wrapper>
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
					}}
					{...props}
				/>
			</Wrapper>
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
};

Table.defaultProps = {
	bordered: false,
};
