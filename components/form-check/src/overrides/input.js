/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Input = ({ flipped, inline, ...rest }) => <input {...rest} />;

export const inputStyles = (_, { size, flipped }) => {
	const sizeMap = {
		medium: {
			width: '1.5rem',
		},
		large: {
			width: '1.875rem',
		},
	};

	return {
		position: 'absolute',
		zIndex: 1,
		top: 0,
		[flipped ? 'right' : 'left']: 0,
		width: sizeMap[size].width,
		height: sizeMap[size].width,
		cursor: 'pointer',
		margin: 0,
		opacity: 0, //hide

		':disabled, fieldset:disabled &': {
			cursor: 'default',
		},
	};
};
