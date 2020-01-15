/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

export const PopoverBody = ({ title, content, position, open, dismissible, ...props }) => (
	<Body {...props} />
);

export const bodyStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		margin: 0,
		padding: '0.625rem 0.75rem',
		color: COLORS.neutral,
	};
};
