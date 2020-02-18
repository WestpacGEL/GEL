/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const List = ({ data, assistiveText, ...props }) => <ol {...props} />;

export const listStyles = () => {
	const { SPACING } = useBrand();

	return {
		padding: '0.375rem 1.125rem',
		marginBottom: SPACING(4, 'minor'),
		fontSize: '0.8125rem',
		listStyle: 'none',
	};
};
