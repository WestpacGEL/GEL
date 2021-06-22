/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ItemText = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const itemTextStyles = () => {
	return { label: getLabel('formPod-item-text'), verticalAlign: 'middle' };
};

// ==============================
// Attributes
// ==============================

const itemTextAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItemText = {
	component: ItemText,
	styles: itemTextStyles,
	attributes: itemTextAttributes,
};
