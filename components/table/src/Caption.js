/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Caption = props => {
	const { TYPE, [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		captionCSS: {},
	};
	merge(overrides, overridesWithTokens);

	return (
		<caption
			css={{
				fontSize: '1.125rem',
				textAlign: 'left',
				marginBottom: '0.75rem',
				...TYPE.bodyFont[300],
				...overrides.captionCSS,
			}}
			{...props}
		/>
	);
};
