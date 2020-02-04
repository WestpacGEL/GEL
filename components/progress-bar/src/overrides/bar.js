/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Bar = props => <div {...props} />;

export const barStyles = (_, { look, value }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		position: 'relative',
		float: 'left',
		width: `${value}%`,
		borderRadius: look === 'skinny' ? '0.625rem' : '1.5rem',
		height: '100%',
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
		color: '#fff',
		textAlign: 'right',
		backgroundColor: COLORS.hero,
		zIndex: 2,
		overflow: 'hidden',
		boxSizing: 'border-box',
		transition: 'width .6s ease',
		...TYPE.bodyFont[700],

		'@media print': {
			backgroundColor: '#000 !important',
		},
	};
};
