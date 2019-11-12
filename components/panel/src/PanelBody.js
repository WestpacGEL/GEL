/** @jsx jsx */

import { jsx, useMediaQuery, useBrand, merge } from '@westpac/core';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelBody = props => {
	const { [pkg.name]: overridesWithTokens } = useBrand();
	const mq = useMediaQuery();

	const overrides = {
		bodyCSS: {},
	};

	merge(overrides, overridesWithTokens);

	return <div css={mq({ padding: ['0.75rem', '1.5rem'], ...overrides.bodyCSS })} {...props} />;
};
