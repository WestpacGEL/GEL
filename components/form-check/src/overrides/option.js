/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Option = ({ value, checked, disabled, type, name, size, inline, ...rest }) => (
	<div {...rest} />
);

export const optionStyles = (_, { size, inline }) => {
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
		paddingLeft: sizeMap[size].width,
	};
};
