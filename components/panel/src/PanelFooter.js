/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, merge } from '@westpac/core';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelFooter = props => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();
	const mq = useMediaQuery();

	const overrides = {
		footerCSS: {},
	};

	merge(overrides, overridesWithTokens);

	return (
		<div
			css={mq({
				padding: ['0.625rem 0.75rem', '0.625rem 1.5rem'],
				backgroundColor: COLORS.light,
				borderTop: `1px solid ${COLORS.border}`,
				borderBottomRightRadius: `calc(0.1875rem - 1px)`,
				borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
				...overrides.footerCSS,
			})}
			{...props}
		/>
	);
};
