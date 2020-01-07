/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Wrapper = props => <div {...props} />;

export const wrapperStyles = (_, { look }) => {
	const { COLORS, TYPE } = useBrand();

	const styleMap = {
		default: {
			height: '1.5rem',
			borderRadius: '1.5rem',

			'::after': {
				content: '"0%"',
				position: 'absolute',
				left: '0.625rem',
				top: 0,
				height: '100%',
				color: COLORS.muted,
				fontSize: '0.875rem',
				zIndex: 1,
				...TYPE.bodyFont[700],
			},
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
