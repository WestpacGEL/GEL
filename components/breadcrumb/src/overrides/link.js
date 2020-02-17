/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Link = ({ current, href, text, assistiveText, ...rest }) => {
	const Tag = href ? 'a' : 'button';
	if (!href) {
		rest.type = 'button';
	}

	return <Tag href={href} {...rest} />;
};

export const linkStyles = (_, { current }) => {
	const { COLORS } = useBrand();

	return {
		color: COLORS.text,
		boxSizing: 'border-box',
		textDecoration: 'none',
		verticalAlign: 'middle',
		cursor: current ? 'auto' : 'pointer',
		appearance: 'none',
		background: 'none',
		border: 'none',
		padding: 0,
		margin: 0,
		display: 'inline',

		':focus, :hover': {
			textDecoration: current ? 'none' : 'underline',
		},
	};
};
