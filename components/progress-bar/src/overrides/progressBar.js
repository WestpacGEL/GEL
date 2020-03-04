/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const ProgressBar = ({ look, value, ...rest }) => <div {...rest} />;

export const progressBarStyles = (_, { look }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		default: {
			height: '1.5rem',
			borderRadius: '1.5rem',
		},
		skinny: {
			height: '0.625rem',
			borderRadius: '0.625rem',
		},
	};

	return {
		marginBottom: '1.3125rem',
		overflow: 'hidden',
		backgroundColor: '#fff',
		border: `1px solid ${COLORS.border}`,
		padding: '0.0625rem',
		position: 'relative',
		boxSizing: 'border-box',
		...styleMap[look],
	};
};
