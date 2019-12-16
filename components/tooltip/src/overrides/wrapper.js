import React, { forwardRef } from 'react';

export const Wrapper = forwardRef(({ title, position, visible, ...props }, ref) => (
	<span ref={ref} {...props} />
));

export const wrapperStyles = (_, {}) => ({
	position: 'relative',
	display: 'inline-block',
	cursor: 'help',
});
