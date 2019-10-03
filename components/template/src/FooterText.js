/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FooterText = props => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();

	return (
		<div
			css={mq({
				overflow: [null, 'hidden'], //icon wrapping (SM+)
				color: COLORS.muted,

				'p:first-of-type': {
					marginTop: 0,
				},
				'p:last-child': {
					marginBottom: 0,
				},
			})}
			{...props}
		/>
	);
};
