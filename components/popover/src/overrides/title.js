/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Title = ({ open, title, content, dismissible, position, ...rest }) => <p {...rest} />;

export const titleStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		margin: 0,
		padding: '0.625rem 0.75rem',
		backgroundColor: COLORS.muted,
		color: '#fff',
		fontSize: '1rem',
		fontWeight: 'normal',
		minHeight: '1em',
	};
};
