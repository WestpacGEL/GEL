/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const List = ({ state: _, ...props }) => <ol {...props} />;

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

const listAttributes = () => null;

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
