/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Item = ({ look, type, nested, spacing, icon, ...rest }) => <li {...rest} />;

export const itemStyles = (_, { type, look, spacing, nested }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		bullet: {
			'::before': {
				content: '""',
				position: 'absolute',
				left: '0.25rem',
				top: '0.375rem',
				display: 'block',
				width: '0.5rem',
				height: '0.5rem',
				borderRadius: '50%',
				border: `0.0625rem solid ${COLORS[look]}`,
				backgroundColor: nested > 0 ? 'transparent' : COLORS[look],
				boxSizing: 'border-box',
			},
		},
		link: {
			'::before': {
				content: "''",
				position: 'absolute',
				left: '0.125rem',
				top: '0.375rem',
				display: 'block',
				width: '0.5rem',
				height: '0.5rem',
				border: `solid ${COLORS.primary}`,
				borderWidth: '0 0.125rem 0.125rem 0',
				transform: 'rotate(-45deg)',
				boxSizing: 'border-box',
			},
			a: {
				color: COLORS.text,
				textDecoration: 'none',

				':hover': {
					textDecoration: 'underline',
				},
			},
		},
		tick: {
			'::before': {
				content: "''",
				position: 'absolute',
				left: '0.125rem',
				top: '0.3125rem',
				display: 'block',
				width: '0.75rem',
				height: '0.375rem',
				border: `solid ${COLORS.hero}`,
				borderWidth: '0 0 0.125rem 0.125rem',
				transform: 'rotate(-44deg)',
				boxSizing: 'border-box',
			},
		},
		unstyled: {
			paddingLeft: 0,
			li: {
				paddingLeft: '1.1875rem',
			},
		},
		icon: {
			paddingLeft: '1.4375rem',
		},
		ordered: {
			paddingLeft: 0,
		},
	};

	return {
		margin: spacing === 'large' ? '0.75rem 0' : '0.375rem 0',
		paddingLeft: '1.1875rem',
		position: 'relative',
		...styleMap[type],
	};
};
