/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Title = ({ open, heading, size, dismissible, ...props }) => <span {...props} />;

export const titleStyles = (_, {}) => {
	const { COLORS } = useBrand();

	return {
		fontSize: '1.125rem',
		fontWeight: 700,
		color: COLORS.text,
	};
};
