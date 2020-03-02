/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Item = ({
	index,
	current,
	active,
	complete,
	end,
	grouped,
	visited,
	furthest,
	hidden,
	groupIndex,
	groupItemsId,
	instanceIdPrefix,
	headingsTag,
	assistiveText,
	overrides,
	...rest
}) => <li {...rest} />;

export const itemStyles = (_, { end, grouped, visited, furthest }) => {
	const { COLORS } = useBrand();

	return {
		position: 'relative',
		marginTop: end && (grouped ? '0.375rem' : '0.125rem'),
		backgroundColor: '#fff',

		':last-of-type': {
			paddingBottom: grouped && !end && '30px',
		},

		// line
		'::before': {
			// content: end ? 'none' : '""',
			content: '""',
			display: visited && !furthest ? 'block' : 'none',
			position: 'absolute',
			zIndex: 1,
			/* borderLeft: `2px ${
				visited && !furthest ? `solid ${COLORS.primary}` : `dashed ${COLORS.border}`
			}`, */
			borderLeft: visited && !furthest && !end && `2px solid ${COLORS.primary}`,
			top: 0,
			bottom: 0,
			// right: '2.25rem',
			left: '36px',
			transform: grouped && !end ? 'translateY(0.875rem)' : 'translateY(0.625rem)',
		},
	};
};
