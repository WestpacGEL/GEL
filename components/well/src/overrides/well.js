/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

export const Well = props => <div {...props} />;

export const wellStyles = () => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	return mq({
		padding: ['0.75rem', '1.5rem'],
		marginBottom: '1.125rem',
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.border}`,
		borderRadius: '0.1875rem',

		// Nested Well styling
		'& &': {
			backgroundColor: '#fff',
			margin: '0.75rem 0',
		},
	})[0];
};
