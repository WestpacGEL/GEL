/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

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
