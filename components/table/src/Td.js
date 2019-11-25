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

	console.log(bordered);
	return (
		<td
			css={{
				padding: '0.75rem',
				verticalAlign: 'top',
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
