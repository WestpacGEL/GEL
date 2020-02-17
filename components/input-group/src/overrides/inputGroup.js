/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const InputGroup = ({
	name,
	size,
	data,
	invalid,
	disabled,
	readOnly,
	value,
	defaultValue,
	look,
	...rest
}) => <div {...rest} />;

export const inputGroupStyles = () => ({
	display: 'flex',
});
