import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Trigger = forwardRef(({ state: _, ...rest }, ref) => <Button ref={ref} {...rest} />);
Trigger.displayName = 'Trigger';

// ==============================
// Styles
// ==============================

const triggerStyles = () => ({});

// ==============================
// Attributes
// ==============================

const triggerAttributes = (_, { id, isOpen }) => ({
	'aria-controls': id,
	'aria-expanded': isOpen,
});

const blenderAttributes = (_, props) => ({
	...triggerAttributes(_, props),
	'data-js': 'popover__version__',
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
	styles: triggerStyles,
	attributes: blenderAttributes,
};
