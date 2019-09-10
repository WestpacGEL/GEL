/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormPodPanelBody = ({ expanded, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	const style = {
		...formPod.panelInner[expanded ? 'expanded' : 'default'],
	};

	return <div css={mq(style)} {...props} />;
};

// ==============================
// Types
// ==============================

FormPodPanelBody.propTypes = {
	/**
	 * Expanded mode (less horizontal padding).
	 *
	 * Defaults to "false"
	 */
	expanded: PropTypes.bool,
};
FormPodPanelBody.defaultProps = {
	expanded: false,
};
