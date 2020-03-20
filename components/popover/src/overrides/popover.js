/** @jsx jsx */

import { jsx } from '@westpac/core';
import { forwardRef } from 'react';

const Popover = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

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
