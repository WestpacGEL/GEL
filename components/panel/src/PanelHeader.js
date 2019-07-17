/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const PanelHeader = ({ appearance, responsive, ...props }) => {
	const { breakpoints, panel } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				padding: responsive ? panel.header.padding.responsive : panel.header.padding.default,
				backgroundColor: panel.header.appearance[appearance].backgroundColor,
				borderBottom: `${panel.borderWidth} solid ${
					panel.header.appearance[appearance].borderColor
				}`,
				color: panel.header.appearance[appearance].color,
				borderTopRightRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
				borderTopLeftRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
				fontSize: '16px', //TODO rems

				'@media print': {
					borderBottom: '1px solid #000',
				},
			})}
			{...props}
		/>
	);
};
