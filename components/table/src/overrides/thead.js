/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Tablehead = ({ bordered, ...props }) => <thead {...props} />;

export const theadStyles = (_, { bordered }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		'th, td': { borderTop: !bordered && 0 },
		// `th` cells in the `thead`
		th: {
			verticalAlign: 'bottom',
			borderBottom: `${bordered ? '2px' : '3px'} solid ${COLORS.hero}`,
			color: COLORS.text,
			...TYPE.bodyFont[700],
		},
	};
};
