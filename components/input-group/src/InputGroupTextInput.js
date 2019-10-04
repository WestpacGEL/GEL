/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { useInputGroupContext } from './InputGroup';

// ==============================
// Component
// ==============================

export const InputGroupTextInput = ({ first, last, ...props }) => {
	const { size } = useInputGroupContext();

	return (
		<TextInput
			css={{
				width: props.tag === 'select' && 'auto',
				marginLeft: props.tag === 'select' && !first && '-1px',
				marginRight: props.tag === 'select' && !last && '-1px',

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
			{...props}
		/>
	);
};
