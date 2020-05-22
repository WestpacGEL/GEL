/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Hr = (props) => {
	const { COLORS } = useBrand();
	return (
		<hr
			css={{ border: 'none', borderTop: `1px solid ${COLORS.border}`, margin: '1rem 0' }}
			{...props}
		/>
	);
};
