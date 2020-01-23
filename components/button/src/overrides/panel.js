/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { forwardRef } from 'react';

export const Panel = forwardRef(
	({ dropdownSize, look, soft, block, justify, iconAfter, iconBefore, ...rest }, ref) => (
		<div ref={ref} {...rest} />
	)
);

export const panelStyles = (_, { open, dropdownSize }) => {
	const { COLORS } = useBrand();

	const sizeMap = {
		small: {
			minWidth: '8.125rem',
		},
		medium: {
			minWidth: '11.875rem',
		},
		large: {
			minWidth: '15.625rem',
		},
	};

	return {
		visibility: open ? 'visible' : 'hidden',
		position: 'absolute',
		left: 0,
		right: 0,
		margin: '0.1875rem 0 0.75rem 0',
		boxShadow: '0 0.375rem 0.75rem rgba(0, 0, 0, 0.175)',
		border: `1px solid ${COLORS.border}`,
		borderRadius: '0.1875rem',
		padding: '0.75rem',
		minWidth: sizeMap[dropdownSize].minWidth,
		backgroundColor: '#fff',
		zIndex: 100,
	};
};
