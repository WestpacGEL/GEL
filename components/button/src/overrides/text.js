/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Text = ({ state, ...rest }) => <span {...rest} />;

const textStyles = () => ({
	label: getLabel('button-text'),
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});

const textAttributes = () => null;

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};
