import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Text = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const textStyles = () => ({
	label: 'button-text',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});

// ==============================
// Attributes
// ==============================

const textAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};
