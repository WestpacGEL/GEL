/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Crumb = ({ current, text, href, ...props }) => <li {...props} />;

export const crumbStyles = () => {
	const { COLORS } = useBrand();

	return {
		boxSizing: 'border-box',
		display: 'inline-block',
		position: 'relative',
		color: COLORS.text,
		verticalAlign: 'middle',
	};
};
