/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

export const PopoverBody = ({ open, title, content, dismissible, position, ...rest }) => (
	<Body {...rest} />
);

export const bodyStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		color: COLORS.neutral,
	};
};
