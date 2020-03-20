/** @jsx jsx */

import { jsx } from '@westpac/core';

const Group = ({ state, ...rest }) => <li {...rest} />;

const groupStyles = () => ({});

const groupAttributes = () => null;

export const defaultGroup = {
	component: Group,
	styles: groupStyles,
	attributes: groupAttributes,
};
