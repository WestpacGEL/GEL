/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Link = ({ current, assistiveText, text, ...props }) => <a {...props} />;

export const linkStyles = (_, { current }) => {
	const { COLORS } = useBrand();

	return {
		color: COLORS.text,
		textDecoration: 'none',
		verticalAlign: 'middle',
		cursor: current ? 'auto' : 'pointer',

		':focus, :hover': {
			textDecoration: current ? 'none' : 'underline',
		},
	};
};
