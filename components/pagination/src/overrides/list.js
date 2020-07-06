/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const List = ({ state, ...rest }) => <ul {...rest} />;

const listStyles = () => ({
	label: getLabel('pagination-list'),
	listStyle: 'none',
	display: 'flex',
	paddingLeft: 0,
	margin: '1.3125rem 0',
	borderRadius: '0.1875rem',
	alignItems: 'center',
});

const listAttributes = () => null;

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
