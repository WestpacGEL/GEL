/** @jsx jsx */

import { jsx } from '@westpac/core';

const Text = ({ state, ...rest }) => <span {...rest} />;

const textStyles = () => ({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});

const textAttributes = () => null;

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};
