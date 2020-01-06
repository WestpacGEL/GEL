/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Wrapper = ({ striped, bordered, ...props }) => <div {...props} />;

export const wrapperStyles = (_, {}) => {
	const { COLORS } = useBrand();

	return {
		'@media screen and (max-width: 480px)': {
			width: '100%',
			marginBottom: '1.125rem',
			overflowY: 'hidden',
			overflowX: 'auto',
			border: `1px solid ${COLORS.border}`,
		},
	};
};

export const TableComponent = ({ striped, bordered, ...props }) => <table {...props} />;

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
