/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Item = ({
	grouped,
	active,
	visited,
	furthest,
	end,
	current,
	index,
	groupIndex,
	groupItemsId,
	headingsTag,
	assistiveText,
	overrides,
	...rest
}) => <li {...rest} />;

export const itemStyles = (_, { end, visited, grouped, furthest }) => {
	const { COLORS } = useBrand();

	return {
		position: 'relative',
		marginTop: end && (grouped ? '0.375rem' : '0.125rem'),

		':last-of-type': {
			paddingBottom: grouped && !end && '30px',
		},

		// line
		'::before': {
			content: end ? 'none' : '""',
			display: 'block',
			position: 'absolute',
			zIndex: 0,
			borderLeft: `2px ${
				visited && !furthest ? `solid ${COLORS.primary}` : `dashed ${COLORS.border}`
			}`,
			top: 0,
			bottom: 0,
			// right: '2.25rem',
			left: '36px',
			transform: grouped && !end ? 'translateY(0.875rem)' : 'translateY(0.625rem)',
		},
	};
};
