/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormPodPanel = ({ isNoBorderTop, ...props }) => {
	const { formPod } = useTheme();

	const style = {
		...formPod.panel,
		...(isNoBorderTop ? { borderTop: null } : null),
	};

	return <div css={style} {...props} />;
};

// ==============================
// Types
// ==============================

FormPodPanel.propTypes = {
	/**
	 * Remove top border.
	 *
	 * Enable when the 'Error summary' alert is shown.
	 */
	isNoBorderTop: PropTypes.bool,
};
FormPodPanel.defaultProps = {
	isNoBorderTop: false,
};
