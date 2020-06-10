/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const Table = ({ state, ...rest }) => <table {...rest} />;

const tableStyles = (_, { striped }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('table', { striped }),
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
