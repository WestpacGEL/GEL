import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Popover = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const popoverStyles = () => ({
	label: getLabel('popover'),
	position: 'relative',
	display: 'inline-block',
});

// ==============================
// Attributes
// ==============================

const popoverAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPopover = {
	component: Popover,
	styles: popoverStyles,
	attributes: popoverAttributes,
};
