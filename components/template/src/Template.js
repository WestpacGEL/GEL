/** @jsx jsx */

import React from 'react';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Template = props => {
	const { LAYOUT, COLORS } = useTheme();

	return (
		<div
			css={{
				position: 'relative',
				minHeight: '100vh', //fill to (at least) the viewport height (`vh` to incl. IE11 support)
				width: '100%', //fill to viewport width
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: LAYOUT.wrapperMax,
				backgroundColor: COLORS.background,

				[`@media (min-width: ${LAYOUT.wrapperMax})`]: {
					borderLeft: `1px solid ${COLORS.border}`,
					borderRight: `1px solid ${COLORS.border}`,
				},
			}}
			{...props}
		/>
	);
};
