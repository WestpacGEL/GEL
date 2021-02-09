/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const List = ({ state: _, ...rest }) => <ul {...rest} />;

// ==============================
// Styles
// ==============================

const listStyles = () => ({
	label: getLabel('pagination-list'),
	listStyle: 'none',
	display: 'flex',
	paddingLeft: 0,
	margin: '1.3125rem 0',
	borderRadius: '0.1875rem',
	alignItems: 'center',
});

// ==============================
// Attributes
// ==============================

const listAttributes = () => ({
	role: 'list',
});

// ==============================
// Exports
// ==============================

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
