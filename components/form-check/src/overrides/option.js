/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Option = ({ value, disabled, type, name, flipped, inline, ...rest }) => (
	<div {...rest} />
);

export const optionStyles = (_, { size, inline, flipped }) => {
	const sizeMap = {
		medium: {
			marginRight: '1.125rem',
			marginBottom: '0.375rem',
			width: '1.5rem',
			height: '1.5rem',
		},
		large: {
			marginRight: '1.125rem',
			marginBottom: '0.75rem',
			width: '1.875rem',
			height: '1.875rem',
		},
	};

	return {
		position: 'relative',
		display: inline ? 'inline-block' : 'block',
		verticalAlign: inline && 'top',
		marginRight: inline && sizeMap[size].marginRight,
		marginBottom: sizeMap[size].marginBottom,
		minHeight: sizeMap[size].height,
		[flipped ? 'paddingRight' : 'paddingLeft']: sizeMap[size].width,
	};
};
