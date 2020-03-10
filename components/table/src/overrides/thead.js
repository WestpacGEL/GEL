/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Thead = ({ state, ...rest }) => <thead {...rest} />;

const theadStyles = (_, { bordered }) => {
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

const theadAttributes = () => null;

export const defaultThead = {
	component: Thead,
	styles: theadStyles,
	attributes: theadAttributes,
};
