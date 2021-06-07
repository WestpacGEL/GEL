/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ItemLink = ({ state: _, ...rest }) => <a {...rest} />;

// ==============================
// Styles
// ==============================

const itemLinkStyles = () => {
	return {
		label: getLabel('form-pod-item-link'),
		display: 'inline-block',
		color: 'inherit',
		textDecoration: 'none',
		verticalAlign: 'middle',
	};
};

// ==============================
// Attributes
// ==============================

const itemLinkAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItemLink = {
	component: ItemLink,
	styles: itemLinkStyles,
	attributes: itemLinkAttributes,
};
