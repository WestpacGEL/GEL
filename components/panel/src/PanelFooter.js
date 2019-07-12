/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { paint } from './utils';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const PanelFooter = ({ appearance, responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive
					? theme.panel.footer.padding.responsive
					: theme.panel.footer.padding.default,
				backgroundColor: theme.panel.footer.backgroundColor,
				borderTop: `${theme.panel.borderWidth} solid ${theme.panel.footer.borderColor}`,
				borderBottomRightRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
				borderBottomLeftRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
			})}
			{...props}
		/>
	);
};
