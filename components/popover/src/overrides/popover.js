/** @jsx jsx */

import { jsx } from '@westpac/core';
import { forwardRef } from 'react';

export const Popover = forwardRef(
	({ title, content, position, open, dismissible, ...props }, ref) => <div ref={ref} {...props} />
);

export const popoverStyles = (_, {}) => {
	return {
		position: 'relative',
		display: 'inline-block',
	};
};
