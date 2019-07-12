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

export const PanelBody = ({ appearance, responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive
					? theme.panel.body.padding.responsive
					: theme.panel.body.padding.default,
			})}
			{...props}
		/>
	);
};
