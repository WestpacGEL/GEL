/** @jsx jsx */

import { jsx } from '@westpac/core';

const InputGroup = ({ state: { instanceId }, ...rest }) => <div id={instanceId} {...rest} />;

const inputGroupStyles = () => ({
	display: 'flex',
});

const inputGroupAttributes = () => null;

export const defaultInputGroup = {
	component: InputGroup,
	styles: inputGroupStyles,
	attributes: inputGroupAttributes,
};
