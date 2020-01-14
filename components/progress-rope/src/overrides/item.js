/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Item = ({
	index,
	groupIndex,
	review,
	visited,
	grouped,
	active,
	furthest,
	overrides,
	...props
}) => <li {...props} />;

export const itemStyles = (_, { grouped, review, visited, furthest }) => {
	const { COLORS } = useBrand();

	return {
		padding: `0.5rem 3.5rem 0.875rem ${grouped && !review ? '3rem' : '1.875rem'}`,
		position: 'relative',

		// the line
		'::before': {
			content: review ? 'none' : "''",
			display: 'block',
			position: 'absolute',
			borderLeft: `2px solid ${visited && !furthest ? COLORS.primary : COLORS.border}`,
			top: 0,
			right: '2.25rem',
			bottom: 0,
			height: 'auto',
			transform: 'translateY(0.625rem)',
		},

		// the circle
		':after': {
			content: "''",
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: '0.625rem',
			width: grouped && !review ? '0.375rem' : '0.875rem',
			height: grouped && !review ? '0.375rem' : '0.875rem',
			right: grouped && !review ? '2.125rem' : '1.875rem',
			border: `2px solid ${visited ? COLORS.primary : COLORS.border}`,
			backgroundColor: grouped || review ? (visited ? COLORS.primary : COLORS.border) : '#fff',
			boxSizing: 'border-box',
		},

		':last-child': {
			...(grouped && !review && { paddingBottom: '2.75rem' }),
		},
	};
};
