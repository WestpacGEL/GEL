/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';
import { propTypes, defaultProps } from './Panel';

// ==============================
// Component
// ==============================

export const PanelBody = ({ appearance, ...props }) => {
	const { breakpoints, panel } = useTheme();
	const mq = paint(breakpoints);

	return <div css={mq({ padding: panel.body.padding })} {...props} />;
};

PanelBody.propTypes = {
	...propTypes,
};

PanelBody.defaultProps = {
	...defaultProps,
};
