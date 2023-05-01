import { jsx, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { forwardRef } from 'react';
// ==============================
// Component
// ==============================

const Toggle = forwardRef(({ open, state: _, ...rest }, ref) => (
	// <Button
	// 	ref={ref}
	// 	look="link"
	// 	size="large"
	// 	soft
	// 	iconAfter={open ? ExpandLessIcon : ExpandMoreIcon}
	// 	{...rest}
	// />
	<button ref={ref} {...rest}>
		{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
	</button>
));

Toggle.displayName = 'Toggle';

// ==============================
// Styles
// ==============================

const toggleStyles = () => ({
	label: getLabel('compacta-toggle'),
	marginLeft: 'auto',
	padding: 0,
});

// ==============================
// Attributes
// ==============================

const toggleAttributes = (_, { id, titleId, open }) => ({
	'aria-expanded': open,
	'aria-controls': id,
	'aria-labelledby': titleId,
});

// ==============================
// Exports
// ==============================

export const defaultToggle = {
	component: Toggle,
	styles: toggleStyles,
	attributes: toggleAttributes,
};
