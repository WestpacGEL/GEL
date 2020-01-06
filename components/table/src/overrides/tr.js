/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const TableRow = ({ highlighted, ...props }) => <tr {...props} />;

export const trStyles = (_, { striped, highlighted }) => {
	const { COLORS } = useBrand();

	return {
		transition: !striped && 'background 0.2s ease',
		borderLeft: typeof highlighted === 'boolean' && highlighted ? `6px solid ${COLORS.primary}` : 0,
		borderBottom:
			typeof highlighted === 'boolean' && highlighted
				? `1px solid ${COLORS.primary}`
				: `1px solid ${COLORS.border}`,
		// Hovered row
		':hover': {
			backgroundColor: !striped && COLORS.background,
		},
	};
};
