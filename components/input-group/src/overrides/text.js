/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import React from 'react';

export const Text = ({ data, look, left, right, overrides, ...rest }) => (
	<TextInput
		{...rest}
		css={{
			...(left && {
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
			}),
			...(right && {
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
			}),
		}}
	/>
);

export const textStyles = () => ({
	boxSizing: 'border-box',
});
