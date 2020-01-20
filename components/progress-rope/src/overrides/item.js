/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Item = ({
	index,
	groupIndex,
	end,
	visited,
	grouped,
	active,
	furthest,
	overrides,
	...props
}) => <li {...props} />;

export const itemStyles = (_, { grouped, end }) => {
	return {
		position: 'relative',
		marginTop: end && (grouped ? '0.375rem' : '0.125rem'),
	};
};
