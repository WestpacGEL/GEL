/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormPodActionsText = props => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	return <div css={mq({ ...formPod.actionsText })} {...props} />;
};

// ==============================
// Types
// ==============================

FormPodActionsText.propTypes = {};

FormPodActionsText.defaultProps = {};
