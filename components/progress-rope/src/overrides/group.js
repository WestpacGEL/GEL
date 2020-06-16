/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Group = ({ state, ...rest }) => <li {...rest} />;

const groupStyles = () => ({ label: getLabel('progressRope-group') });

const groupAttributes = () => null;

export const defaultGroup = {
	component: Group,
	styles: groupStyles,
	attributes: groupAttributes,
};
