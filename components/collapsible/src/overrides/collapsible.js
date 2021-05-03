/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Collapsible = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const collapsibleStyles = () => ({
	label: getLabel('collapsible'),
	position: 'relative',
	display: 'inline-block',
});

// ==============================
// Attributes
// ==============================

const collapsibleAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCollapsible = {
	component: Collapsible,
	styles: collapsibleStyles,
	attributes: collapsibleAttributes,
};
