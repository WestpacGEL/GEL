/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button as ButtonInput } from '@westpac/button';
import React from 'react';

export const Button = ({ position, data, ...rest }) => <ButtonInput {...rest} />;

export const buttonStyles = (_, { position }) => ({
	boxSizing: 'border-box',
	borderRight: position === 'left' && 0,
	borderLeft: position === 'right' && 0,

	...(!(position === 'left') && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(!(position === 'right') && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	}),
});
