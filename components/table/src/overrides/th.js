/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Th = ({ state, ...rest }) => <th {...rest} />;

const thStyles = (_, { bordered }) => {
	const { COLORS } = useBrand();

	return {
		padding: '0.75rem',
		verticalAlign: 'top',
		border: `1px solid ${COLORS.border}`,
		borderLeft: !bordered && 0,
		borderRight: !bordered && 0,
		textAlign: 'left',
	};
};

const thAttributes = () => null;

export const defaultTh = {
	component: Th,
	styles: thStyles,
	attributes: thAttributes,
};
