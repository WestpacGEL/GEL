/** @jsx jsx */

import { jsx } from '@westpac/core';

const Popover = ({ state, ...rest }) => <div {...rest} />;

const popoverStyles = () => ({
	position: 'relative',
	display: 'inline-block',
});

const popoverAttributes = () => null;

export const defaultPopover = {
	component: Popover,
	styles: popoverStyles,
	attributes: popoverAttributes,
};
