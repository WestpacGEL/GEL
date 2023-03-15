import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const InputGroup = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);
InputGroup.displayName = 'InputGroup';

// ==============================
// Styles
// ==============================

const inputGroupStyles = () => ({
	label: getLabel('inputGroup'),
	display: 'flex',
});

// ==============================
// Attributes
// ==============================

const inputGroupAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultInputGroup = {
	component: InputGroup,
	styles: inputGroupStyles,
	attributes: inputGroupAttributes,
};
