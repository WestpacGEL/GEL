/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';

const Text = ({ state: { name, size, invalid, disabled, readOnly }, ...rest }) => (
	<TextInput
		name={name}
		size={size}
		invalid={invalid}
		disabled={disabled}
		readOnly={readOnly}
		{...rest}
	/>
);

const textStyles = (_, { left, right }) => ({
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

const textAttributes = () => null;

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};
