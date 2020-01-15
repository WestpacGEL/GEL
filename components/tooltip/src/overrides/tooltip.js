import React, { forwardRef } from 'react';

export const Tooltip = forwardRef(({ text, title, position, visible, ...props }, ref) => (
	<span ref={ref} {...props} />
));

export const tooltipStyles = (_, {}) => ({
	position: 'relative',
	display: 'inline-block',
	cursor: 'help',
});
