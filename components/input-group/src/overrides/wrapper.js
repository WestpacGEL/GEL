/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Wrapper = ({
	name,
	size,
	data,
	invalid,
	disabled,
	readOnly,
	value,
	defaultValue,
	look,
	overrides,
	...rest
}) => <div {...rest} />;

export const wrapperStyles = () => ({
	display: 'flex',
});
