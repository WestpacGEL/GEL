/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { useTableContext } from './Table';

// ==============================
// Component
// ==============================

export const Tr = ({ striped, bordered, ...props }) => {
	const { COLORS, TYPE } = useBrand();

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;

	return (
		<tr
			css={{
				transition: !striped && 'background 0.2s ease',
				borderBottom: `1px solid ${COLORS.border}`,
				// Hovered row
				':hover': {
					backgroundColor: !striped && COLORS.background,
				},
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================
