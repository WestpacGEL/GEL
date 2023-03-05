import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const InputGroup = ({ state: _, ...rest }) => <div {...rest} />;

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
