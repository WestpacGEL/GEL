/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Title = (props) => {
	const { COLORS } = useBrand();
	return <p css={{ fontStyle: 'italic', color: COLORS.muted }} {...props} />;
};
