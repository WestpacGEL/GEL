/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { forwardRef } from 'react';

export const Title = forwardRef(({ heading, open, onClose, size, dismissible, ...rest }, ref) => (
	<Heading ref={ref} tag="h1" size={7} {...rest} />
));

export const titleStyles = (_, {}) => {
	const { COLORS } = useBrand();

	return {
		color: COLORS.text,
		fontWeight: 700,
	};
};
