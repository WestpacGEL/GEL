/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Title = ({ title, content, position, open, dismissible, ...props }) => (
	<p {...props} />
);

export const titleStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		margin: 0,
		padding: '0.625rem 0.75rem',
		backgroundColor: COLORS.muted,
		color: '#fff',
		fontSize: '1rem',
	};
};
