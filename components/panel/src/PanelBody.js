/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const PanelBody = props => {
	const {
		LAYOUT: { breakpoints },
	} = useTheme();
	const mq = paint(breakpoints);

	return <div css={mq({ padding: ['0.75rem', '1.5rem'] })} {...props} />;
};
