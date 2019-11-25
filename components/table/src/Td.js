/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { useTableContext } from './Table';

// ==============================
// Component
// ==============================

export const Td = ({ highlighted, bordered, ...props }) => {
	const { COLORS, TYPE } = useBrand();

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;

	return (
		<td
			css={{
				padding: '0.75rem',
				verticalAlign: 'top',
				borderLeft: highlighted ? `6px solid ${COLORS.primary}` : 0,
				borderBottom: highlighted ? `1px solid ${COLORS.primary}` : 0,
				border: bordered && `1px solid ${COLORS.border}`,
				// bold scope
				'&[scope=row]': {
					...TYPE.bodyFont[700],
				},
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================
