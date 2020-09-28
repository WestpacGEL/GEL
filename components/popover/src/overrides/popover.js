/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Popover = ({ state: _, ...rest }) => <div {...rest} />;

const popoverStyles = () => ({
	label: getLabel('popover'),
	position: 'relative',
	display: 'inline-block',
});

const popoverAttributes = () => null;

export const defaultPopover = {
	component: Popover,
	styles: popoverStyles,
	attributes: popoverAttributes,
};
