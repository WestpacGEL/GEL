/** @jsx jsx */

import React from 'react';
import { jsx, useTheme } from '@westpac/core';
import { paint } from './utils';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const PanelHeader = ({ appearance, responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive
					? theme.panel.header.padding.responsive
					: theme.panel.header.padding.default,
				backgroundColor: theme.panel.header.appearance[appearance].backgroundColor,
				borderBottom: `${theme.panel.borderWidth} solid ${
					theme.panel.header.appearance[appearance].borderColor
				}`,
				color: theme.panel.header.appearance[appearance].color,
				borderTopRightRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
				borderTopLeftRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
				fontSize: '16px', //TODO rems

				'@media print': {
					borderBottom: '1px solid #000',
				},
			})}
			{...props}
		/>
	);
};
