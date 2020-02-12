/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Select as SelectInput } from '@westpac/text-input';
import React from 'react';

export const Select = ({ position, ...rest }) => <SelectInput {...rest} />;

export const selectStyles = (_, { position }) => ({
	boxSizing: 'border-box',
	width: 'auto',
	marginLeft: position === 'right' && '-1px',
	marginRight: position === 'left' && '-1px',

	...(position === 'right' && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(position === 'left' && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	}),
});
