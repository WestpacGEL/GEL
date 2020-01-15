/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Pagination = ({ current, infinite, back, next, data, overrides, ...rest }) => (
	<nav {...rest} />
);

export const paginationStyles = () => ({});
