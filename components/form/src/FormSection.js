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

export const FormSection = ({ noPadding, ...props }) => {
	const { colors, breakpoints, form } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		position: 'relative', //for `.form-section-actions` positioning
		paddingTop: form.section.paddingTop,
		paddingBottom: form.section.paddingBottom, //6px assuming there will be a `.form-group` margin-bottom (30px)
		paddingLeft: noPadding ? null : form.section.paddingLeft,
		paddingRight: noPadding ? null : form.section.paddingRight,

		// TODO apply programatically? (rather than via CSS pseudo-class)
		':first-of-type': {
			paddingTop: 0,
		},
		':last-child': {
			paddingBottom: 0,
		},

		// Subequent sections
		'& + &': {
			borderTop: form.section.borderTop,
		},
	};

	return <div css={mq(common)} {...props} />;
};

// ==============================
// Types
// ==============================

FormSection.propTypes = {
	/**
	 * Remove section padding.
	 *
	 * Defaults to "false"
	 */
	noPadding: PropTypes.bool,

	/**
	 * Component children.
	 */
	children: PropTypes.node,
};

FormSection.defaultProps = {
	noPadding: false,
};
