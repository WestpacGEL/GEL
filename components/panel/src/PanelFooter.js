/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';
import { propTypes, defaultProps } from './Panel';

// ==============================
// Component
// ==============================

export const PanelFooter = ({ appearance, responsive, ...props }) => {
	const { breakpoints, panel } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				padding: responsive ? panel.footer.padding.responsive : panel.footer.padding.default,
				backgroundColor: panel.footer.backgroundColor,
				borderTop: `${panel.borderWidth} solid ${panel.footer.borderColor}`,
				borderBottomRightRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
				borderBottomLeftRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
			})}
			{...props}
		/>
	);
};

PanelFooter.propTypes = {
	...propTypes,
};

PanelFooter.defaultProps = {
	...defaultProps,
};
