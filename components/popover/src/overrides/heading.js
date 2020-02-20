/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Heading = ({ open, heading, content, dismissible, position, ...rest }) => (
	<h1 {...rest} />
);

export const headingStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		margin: '0 0 0.75rem',
		color: COLORS.neutral,
		fontSize: '1rem',
		fontWeight: 500,
	};
};
