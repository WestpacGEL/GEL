import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Pagination = ({ state: _, ...rest }) => <nav {...rest} />;

// ==============================
// Styles
// ==============================

const paginationStyles = () => ({
	label: getLabel('pagination'),
});

// ==============================
// Attributes
// ==============================

const paginationAttributes = () => ({ 'aria-label': 'Page number' });

// ==============================
// Exports
// ==============================

export const defaultPagination = {
	component: Pagination,
	styles: paginationStyles,
	attributes: paginationAttributes,
};
