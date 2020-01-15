/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Table = ({ striped, bordered, ...props }) => <table {...props} />;

export const tableStyles = (_, { striped }) => {
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
