/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const TableFoot = ({ bordered, ...rest }) => <tfoot {...rest} />;

export const tfootStyles = (_, { bordered }) => {
	const { COLORS } = useBrand();

	return { color: COLORS.muted, 'th, tr, td': { borderBottom: !bordered && 0 } };
};
