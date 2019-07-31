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

export const FormSectionImg = ({ spacing, inline, ...props }) => {
	const { breakpoints, form } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		display: 'block',
		margin: form.sectionImg.marginBottom.map(v => `0 auto ${v}px`),
		maxWidth: '100%',
	};

	return <img css={mq({ ...styleCommon })} {...props} />;
};

// ==============================
// Types
// ==============================

FormSectionImg.propTypes = {
	/**
	 * The component src.
	 */
	src: PropTypes.string.isRequired,
};

FormSectionImg.defaultProps = {};
