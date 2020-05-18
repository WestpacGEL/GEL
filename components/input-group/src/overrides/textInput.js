/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput as Input } from '@westpac/text-input';

const TextInput = ({ state: { size }, ...rest }) => <Input size={size} {...rest} />;

const textInputStyles = (_, { before, after }) => ({
	boxSizing: 'border-box',
	...(before && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(after && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	}),
});

const textInputAttributes = (_, { instanceId }) => ({
	id: instanceId,
});

export const defaultTextInput = {
	component: TextInput,
	styles: textInputStyles,
	attributes: textInputAttributes,
};
