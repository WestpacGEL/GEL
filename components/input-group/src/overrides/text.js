/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import React from 'react';

export const Text = ({ name, data, invalid, disabled, readOnly, look, left, right, ...rest }) => (
	<TextInput {...rest} />
);

export const textStyles = (_, { left, right }) => ({
	boxSizing: 'border-box',
	...(left && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(right && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	}),
});
