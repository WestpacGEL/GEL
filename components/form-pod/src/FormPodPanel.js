/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

import { FormPodPanelInner } from './styled';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormPodPanel = ({ expanded, children, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		...formPod.panel,
	};

	return (
		<div css={mq(styleCommon)} {...props}>
			<FormPodPanelInner expanded={expanded}>{children}</FormPodPanelInner>
		</div>
	);
};

// ==============================
// Types™
// ==============================

FormPodPanel.propTypes = {
	/**
	 * Expanded mode (less horizontal panel padding).
	 *
	 * Defaults to "false"
	 */
	expanded: PropTypes.bool,
};
FormPodPanel.defaultProps = {
	expanded: false,
};
