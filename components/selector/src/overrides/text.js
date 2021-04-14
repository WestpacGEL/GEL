/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Text = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const textStyles = () => ({
	label: getLabel('selector-text'),
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
