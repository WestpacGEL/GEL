/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput as Input } from '@westpac/text-input';

const TextInput = ({ state: { size }, ...rest }) => <Input size={size} {...rest} />;

const textInputStyles = (_, { left, right }) => ({
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

const textInputAttributes = (_, { id, name, invalid, disabled, readOnly }) => ({
	id,
	name,
	invalid,
	disabled,
	readOnly,
});

export const defaultTextInput = {
	component: TextInput,
	styles: textInputStyles,
	attributes: textInputAttributes,
};
