/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Link = (props) => {
	const { COLORS } = useBrand();
	return <a href="#" css={{ color: COLORS.primary }} {...props} />;
};
