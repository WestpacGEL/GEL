/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Td = ({ highlighted, highlightStart, bordered, ...props }) => {
	const { COLORS, TYPE, [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		tdCSS: {},
	};
	merge(overrides, overridesWithTokens);

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
				...overrides.tdCSS,
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
