/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Pagination = ({ current, infinite, back, next, data, overrides, ...rest }) => (
	<ul {...rest} />
);

export const paginationStyles = () => ({
	listStyle: 'none',
	display: 'flex',
	paddingLeft: 0,
	margin: '1.3125rem 0',
	borderRadius: '0.1875rem',
	alignItems: 'center',
});
