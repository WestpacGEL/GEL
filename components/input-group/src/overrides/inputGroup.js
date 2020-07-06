/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const InputGroup = ({ state, ...rest }) => <div {...rest} />;

const inputGroupStyles = () => ({
	label: getLabel('inputGroup'),
	display: 'flex',
});

const inputGroupAttributes = () => null;

export const defaultInputGroup = {
	component: InputGroup,
	styles: inputGroupStyles,
	attributes: inputGroupAttributes,
};
