import React, { forwardRef } from 'react';

export const Tooltip = forwardRef(({ text, position, visible, ...rest }, ref) => (
	<span ref={ref} {...rest} />
));

export const tooltipStyles = () => ({
	position: 'relative',
	display: 'inline-block',
	cursor: 'help',
});
