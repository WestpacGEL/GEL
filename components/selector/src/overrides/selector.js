/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Selector = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const selectorStyles = () => ({
	label: getLabel('selector'),
	display: 'flex',
	flexDirection: 'column',
});

// ==============================
// Attributes
// ==============================

const selectorAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultSelector = {
	component: Selector,
	styles: selectorStyles,
	attributes: selectorAttributes,
};
