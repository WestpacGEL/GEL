/** @jsx jsx */

import { jsx } from '@westpac/core';
import { forwardRef } from 'react';

export const Popover = forwardRef(
	({ open, heading, headingTag, content, dismissible, position, instanceId, ...rest }, ref) => (
		<div ref={ref} {...rest} />
	)
);

export const popoverStyles = () => ({
	position: 'relative',
	display: 'inline-block',
});
