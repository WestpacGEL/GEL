import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Text = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const textStyles = () => ({
	label: getLabel('selector-option-text'),
	flex: 1,
	width: '100%',
	minWidth: 0, //important for text truncation with ellipsis
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
