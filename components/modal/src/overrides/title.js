/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { forwardRef } from 'react';

export const Title = forwardRef(
	({ heading, open, onClose, size, dismissible, overrides, ...rest }, ref) => (
		<h1 ref={ref} {...rest} />
	)
);

export const titleStyles = (_, {}) => {
	const { COLORS } = useBrand();

	return {
		fontSize: '1.125rem',
		fontWeight: 700,
		color: COLORS.text,
		margin: 0,
	};
};
