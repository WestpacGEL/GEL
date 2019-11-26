/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { useTableContext } from './Table';

// ==============================
// Component
// ==============================
export const Th = ({ bordered, ...props }) => {
	const { COLORS } = useBrand();

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;

	return (
		<th
			css={{
				padding: '0.75rem',
				verticalAlign: 'top',
				border: `1px solid ${COLORS.border}`,
				borderLeft: !bordered && 0,
				borderRight: !bordered && 0,
				textAlign: 'left',
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================
Th.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,
};
