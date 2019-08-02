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

export const FormPodPanelFooter = ({ left, right, ...props }) => {
	const { formPod } = useTheme();

	// Common styling
	const style = {
		display: 'flex',
		alignItems: 'center',
		...formPod.footer,
	};

	return (
		<div css={style} {...props}>
			{left && <div>{left}</div>}
			{right && <div css={{ marginLeft: 'auto' }}>{right}</div>}
		</div>
	);
};

// ==============================
// Types™
// ==============================

FormPodPanelFooter.propTypes = {
	/**
	 * Left 'slot'.
	 */
	left: PropTypes.node,

	/**
	 * Right 'slot'.
	 */
	right: PropTypes.node,
};

FormPodPanelFooter.defaultProps = {};
