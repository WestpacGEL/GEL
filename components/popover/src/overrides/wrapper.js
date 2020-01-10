/** @jsx jsx */

import { jsx } from '@westpac/core';
import { forwardRef } from 'react';

export const Wrapper = forwardRef(
	({ title, content, position, open, dismissible, ...props }, ref) => <div ref={ref} {...props} />
);

export const wrapperStyles = (_, {}) => {
	return {
		position: 'relative',
		display: 'inline-block',
	};
};
