/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormPodPanelBody = ({ isExpanded, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				...formPod.panelInner[isExpanded ? 'expanded' : 'default'],
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
	isExpanded: PropTypes.bool,
};
FormPodPanelBody.defaultProps = {
	isExpanded: false,
};
