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

	return (
		<div
			css={mq({
				...formPod.panelInner[expanded ? 'expanded' : 'default'],
			})}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

FormPodPanelBody.propTypes = {
	/**
	 * Expanded body mode (less horizontal padding)
	 */
	expanded: PropTypes.bool,
};
FormPodPanelBody.defaultProps = {
	expanded: false,
};
