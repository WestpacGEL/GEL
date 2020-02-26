/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Item = ({
	index,
	groupIndex,
	end,
	visited,
	grouped,
	active,
	furthest,
	overrides,
	...rest
}) => <li {...rest} />;

export const itemStyles = (_, { end, visited, grouped, active, furthest }) => {
	const { COLORS } = useBrand();

	return {
		position: 'relative',
		marginTop: end && (grouped ? '0.375rem' : '0.125rem'),

		// the line
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

		// TODO: styling to be applied via a prop (:last-child not liked by SSR)
		':last-of-type': {
			paddingBottom: grouped && !end && '30px',
		},
	};
};
