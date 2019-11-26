/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Thead = ({ bordered, ...props }) => {
	const { COLORS, TYPE, [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		theadCSS: {},
	};
	merge(overrides, overridesWithTokens);

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
				...overrides.theadCSS,
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================
Thead.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,
};
