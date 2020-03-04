/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const TableHeader = ({ bordered, ...rest }) => <th {...rest} />;

export const thStyles = (_, { bordered }) => {
	const { COLORS } = useBrand();

	return {
		padding: '0.75rem',
		verticalAlign: 'top',
		border: `1px solid ${COLORS.border}`,
		borderLeft: !bordered && 0,
		borderRight: !bordered && 0,
		textAlign: 'left',
	};
};
