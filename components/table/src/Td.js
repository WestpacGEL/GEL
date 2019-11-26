/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { useTableContext } from './Table';

// ==============================
// Component
// ==============================

export const Td = ({ highlighted, highlightStart, bordered, ...props }) => {
	const { COLORS, TYPE } = useBrand();

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;

	return (
		<td
			css={{
				padding: '0.75rem',
				verticalAlign: 'top',
				borderLeft: highlightStart ? `6px solid ${COLORS.primary}` : 0,
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

Td.propTypes = {
	/**
	 * Whether or not the cell is highlighted
	 */
	highlighted: PropTypes.bool,

	/**
	 * Whether or not the start of the highlighted cells
	 */
	highlightStart: PropTypes.bool,
};

Td.defaultProps = {
	highlighted: false,
	highlightStart: false,
};
