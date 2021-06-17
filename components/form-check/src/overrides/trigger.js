/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { defaultProps } from '../FormCheck';
import { Button } from '@westpac/button';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Trigger = forwardRef(({ state: { isOpen, revealCount }, ...rest }, ref) => (
	<Button ref={ref} look="link" size="small" {...rest}>
		{isOpen ? 'Hide' : 'Show'} {revealCount} {revealCount === 1 ? 'item' : 'items'}
	</Button>
));

// ==============================
// Styles
// ==============================

const triggerStyles = (_, { isOpen }) => {
	return {
		label: getLabel('formCheck-trigger'),
		paddingLeft: 0,
		paddingRight: 0,
		display: isOpen && 'none',
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => triggerStyles(null, defaultProps);

// ==============================
// Attributes
// ==============================

const triggerAttributes = (_, { instanceId, open }) => ({
	'aria-controls': `${instanceId}-panel`,
	'aria-expanded': open,
});

// ==============================
// Exports
// ==============================

export const defaultTrigger = {
	component: Trigger,
	styles: triggerStyles,
	attributes: triggerAttributes,
};

export const blenderTrigger = {
	component: Trigger,
	styles: blenderStyles,
	attributes: triggerAttributes,
};
