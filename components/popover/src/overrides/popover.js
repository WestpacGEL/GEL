/** @jsx jsx */

import { jsx } from '@westpac/core';
import { forwardRef } from 'react';

export const Popover = forwardRef(
	({ open, title, content, dismissible, position, ...rest }, ref) => <div ref={ref} {...rest} />
);

export const popoverStyles = () => ({
	position: 'relative',
	display: 'inline-block',
});
