/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormPodPanel = ({ noBorderTop, ...props }) => {
	const { formPod } = useTheme();

	// Common styling
	const style = {
		...formPod.panel,

		...(noBorderTop ? { borderTop: null } : null),
	};

	return <div css={style} {...props} />;
};

// ==============================
// Types™
// ==============================

FormPodPanel.propTypes = {
	/**
	 * Remove top border.
	 *
	 * Required when the 'Error summary' alert is shown.
	 *
	 * Defaults to "false"
	 */
	noBorderTop: PropTypes.bool,
};
FormPodPanel.defaultProps = {
	noBorderTop: false,
};
