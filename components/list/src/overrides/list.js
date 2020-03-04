/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const List = ({ look, type, nested, spacing, icon, assistiveText, data, ...rest }) => {
	const ListType = type === 'ordered' ? 'ol' : 'ul';
	return <ListType {...rest} />;
};

export const listStyles = (_, { type }) => ({
	listStyle: type !== 'ordered' && 'none',
	margin: 0,
	padding: type === 'ordered' ? '0 0 0 1.25rem' : 0,
});
