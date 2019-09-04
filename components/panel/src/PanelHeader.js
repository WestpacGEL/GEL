/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';
import { propTypes, defaultProps } from './Panel';

// ==============================
// Component
// ==============================

export const PanelHeader = ({ appearance, ...props }) => {
	const { breakpoints, panel } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				padding: panel.header.padding,
				backgroundColor: panel.header.appearance[appearance].backgroundColor,
				borderBottom: `${panel.borderWidth} solid ${
					panel.header.appearance[appearance].borderColor
				}`,
				color: panel.header.appearance[appearance].color,
				borderTopRightRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
				borderTopLeftRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
				fontSize: panel.header.fontSize,

				'@media print': {
					borderBottom: '1px solid #000',
				},
			})}
			{...props}
		/>
	);
};

PanelHeader.propTypes = {
	...propTypes,
};

PanelHeader.defaultProps = {
	...defaultProps,
};
