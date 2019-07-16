/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const PanelBody = ({ appearance, responsive, ...props }) => {
	const { breakpoints, panel } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				padding: responsive ? panel.body.padding.responsive : panel.body.padding.default,
			})}
			{...props}
		/>
	);
};
