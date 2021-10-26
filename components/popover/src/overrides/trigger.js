/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Trigger = forwardRef(({ state: _, ...rest }, ref) => <Button ref={ref} {...rest} />);

// ==============================
// Styles
// ==============================

const triggerStyles = () => ({});

// ==============================
// Attributes
// ==============================

	'aria-controls': instanceId,
const triggerAttributes = (_, { instanceId, isOpen }) => ({
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
