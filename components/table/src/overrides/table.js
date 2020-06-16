/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

const Table = ({ state, ...rest }) => <Body tag="table" {...rest} />;

const tableStyles = (_, { striped }) => {
	const { COLORS } = useBrand();

	return {
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
	};
};

const tableAttributes = () => null;

export const defaultTable = {
	component: Table,
	styles: tableStyles,
	attributes: tableAttributes,
};
