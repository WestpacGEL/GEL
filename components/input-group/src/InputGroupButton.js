/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { useInputGroupContext } from './InputGroup';

// ==============================
// Component
// ==============================

export const InputGroupButton = ({ first, last, ...props }) => {
	const { size } = useInputGroupContext();

	return (
		<Button
			css={{
				borderRight: first && 0,
				borderLeft: last && 0,
				...(!first && {
					borderTopLeftRadius: 0,
					borderBottomLeftRadius: 0,
				}),
				...(!last && {
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
				}),
			}}
			size={size}
			appearance="hero"
			{...props}
		/>
	);
};
