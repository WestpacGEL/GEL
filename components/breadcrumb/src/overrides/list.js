/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const List = ({ state: _, ...props }) => <ol {...props} />;

// ==============================
// Styles
// ==============================

const listStyles = () => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('breadcrumb-list'),
		padding: '0.375rem 1.125rem',
		marginBottom: SPACING(4, 'minor'),
		fontSize: '0.8125rem',
		listStyle: 'none',
	};
};

// ==============================
// Attributes
// ==============================

const listAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
