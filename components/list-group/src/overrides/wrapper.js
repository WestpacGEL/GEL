/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { List } from '@westpac/list';
import React from 'react';

export const Wrapper = props => <List {...props} />;

export const wrapperStyles = () => {
	const { COLORS } = useBrand();

	return {
		display: 'inline-block',
		border: `1px solid ${COLORS.border}`,
		borderBottom: 0,
		borderRadius: '0.1875rem',

		'@media print': {
			borderColor: '#000',
		},
	};
};

export const wrapperAttributes = () => {
	const { COLORS } = useBrand();

	return {
		overrides: {
			subComponent: {
				Item: {
					styles: styles => ({
						...styles,
						margin: 0,
						borderBottom: `1px solid ${COLORS.border}`,
						padding: '0.75rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',

						'@media print': {
							borderColor: '#000',
						},
					}),
				},
			},
		},
	};
};
