/** @jsx jsx */

import { jsx } from '@westpac/core';

const Pagination = ({ state, ...rest }) => <nav {...rest} />;

const paginationStyles = () => ({});

const paginationAttributes = () => ({ 'aria-label': 'Page number' });

export const defaultPagination = {
	component: Pagination,
	styles: paginationStyles,
	attributes: paginationAttributes,
};
