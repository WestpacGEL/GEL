/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Fragment } from 'react';

const Icon = ({ state, icon: Icon, left, right, ...rest }) => <Icon {...rest} />;

const iconStyles = (_, { left, right, dropdown, block, hasChildren }) => ({
	label: getLabel('button-icon', { left, right, dropdown, block, hasChildren }),
	...(left ? { marginRight: hasChildren && '0.4em' } : null),
	...(right ? { marginLeft: hasChildren && '0.4em' } : null),
	...(dropdown ? { marginLeft: block ? 'auto' : '0.4em' } : null),
});

const iconAttributes = () => ({
	color: 'inherit',
	'aria-hidden': 'true',
	assistiveText: null,
});

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
