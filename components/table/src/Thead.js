/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { useTableContext } from './Table';

// ==============================
// Component
// ==============================

export const Thead = ({ bordered, ...props }) => {
	const { COLORS, TYPE } = useBrand();

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;

	return (
		<thead
			css={{
				'th, td': { borderTop: !bordered && 0 },
				// `th` cells in the `thead`
				th: {
					verticalAlign: 'bottom',
					borderBottom: `${bordered ? '2px' : '3px'} solid ${COLORS.hero}`,
					color: COLORS.text,
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
