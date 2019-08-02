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

	const common = {
		fontSize: '1.6rem',
		textAlign: ['center', 'left'],
		marginBottom: ['2.4rem', 0],
	};

	return <div css={mq(common)} {...props} />;
};

// ==============================
// Types™
// ==============================

FormPodActionsText.propTypes = {};

FormPodActionsText.defaultProps = {};
