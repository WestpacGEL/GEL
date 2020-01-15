/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const ItemText = ({
	index,
	groupIndex,
	review,
	visited,
	grouped,
	active,
	furthest,
	overrides,
	...props
}) => <a {...props} />;

export const itemTextStyles = (_, { active, visited }) => {
	const { COLORS } = useBrand();

	return {
		color: active ? COLORS.primary : visited ? COLORS.neutral : COLORS.tints.muted90,
		textDecoration: 'none',
		pointerEvents: active || visited ? 'auto' : 'none',
		cursor: 'pointer',
	};
};
