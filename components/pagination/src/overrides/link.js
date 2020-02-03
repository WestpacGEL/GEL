/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Link = ({
	index,
	nextIndex,
	text,
	first,
	last,
	disabled,
	assistiveText,
	current,
	active,
	overrides,
	...rest
}) => <button type="button" {...rest} />;

export const linkStyles = (_, { active, first, last, disabled }) => {
	const { COLORS } = useBrand();

	return {
		appearance: 'none',
		marginLeft: -1,
		lineHeight: 1.15,
		display: 'inline-block',
		border: `1px solid ${active ? COLORS.hero : COLORS.border}`,
		backgroundColor: active ? COLORS.hero : '#fff',
		padding: '0.4375rem 0.75rem',
		fontSize: '0.875rem',
		color: active ? '#fff' : COLORS.neutral,
		textDecoration: 'none',
		cursor: 'pointer',
		transition: 'background .2s ease, border .2s ease',

		':hover': {
			backgroundColor: !active && COLORS.background,
		},

		...(first && {
			marginLeft: 0,
			borderTopLeftRadius: '0.1875rem',
			borderBottomLeftRadius: '0.1875rem',
		}),
		...(last && {
			borderTopRightRadius: '0.1875rem',
			borderBottomRightRadius: '0.1875rem',
		}),
		...(disabled && {
			color: COLORS.muted,
			backgroundColor: COLORS.light,
			cursor: 'not-allowed',
			opacity: '0.5',
		}),
	};
};
