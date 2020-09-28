/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Pagination = ({ state: _, ...rest }) => <nav {...rest} />;

const paginationStyles = () => ({
	label: getLabel('pagination'),
});

const paginationAttributes = () => ({ 'aria-label': 'Page number' });

export const defaultPagination = {
	component: Pagination,
	styles: paginationStyles,
	attributes: paginationAttributes,
};
