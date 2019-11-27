/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { useTableContext } from './Table';

// ==============================
// Component
// ==============================

export const Tfoot = ({ bordered, ...props }) => {
	const { COLORS, TYPE } = useBrand();

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;

	console.log(bordered);

	return (
		<tfoot
			css={{
				color: COLORS.muted,
				'th, tr, td': { borderBottom: !bordered && 0 },
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================
