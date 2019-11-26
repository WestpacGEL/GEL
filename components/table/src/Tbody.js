/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tbody = ({ ...props }) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		tbodyCSS: {},
	};
	merge(overrides, overridesWithTokens);

	return (
		<tbody
			css={{
				...overrides.tbodyCSS,
			}}
			{...props}
		/>
	);
};
