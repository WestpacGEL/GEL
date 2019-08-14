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

	return (
		<img
			css={mq({
				display: 'block',
				margin: form.sectionImg.marginBottom.map(mb => `0 auto ${mb}`),
				maxWidth: '100%',
			})}
			{...props}
		/>
	);
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
