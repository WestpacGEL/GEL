/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const TableRow = ({ striped, highlighted, ...rest }) => <tr {...rest} />;

export const trStyles = (_, { striped, highlighted }) => {
	const { COLORS } = useBrand();

	return {
		transition: !striped && 'background 0.2s ease',
		borderLeft: typeof highlighted === 'boolean' && highlighted ? `6px solid ${COLORS.primary}` : 0,
		borderBottom:
			typeof highlighted === 'boolean' && highlighted
				? `2px solid ${COLORS.primary}`
				: `1px solid ${COLORS.border}`,
		// Hovered row
		'tbody > &:hover': {
			backgroundColor: !striped && COLORS.background,
		},
	};
};
