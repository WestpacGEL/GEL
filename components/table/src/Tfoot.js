/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { useTableContext } from './Table';

// ==============================
// Component
// ==============================
export const Tfoot = ({ bordered, ...props }) => {
	const { COLORS } = useBrand();

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;
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

Tfoot.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,
};
