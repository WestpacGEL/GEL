/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tfoot = ({ bordered, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		tfootCSS: {},
	};
	merge(overrides, overridesWithTokens);

	const { bordered: borderedCtx } = useTableContext();
	bordered = bordered || borderedCtx;
	return (
		<tfoot
			css={{
				color: COLORS.muted,
				'th, tr, td': { borderBottom: !bordered && 0 },
				...overrides.tfootCSS,
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
