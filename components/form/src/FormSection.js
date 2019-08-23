/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormSection = ({ noPadding, ...props }) => {
	const {
		breakpoints,
		form: { section },
	} = useTheme();
	const mq = paint(breakpoints);

	const common = {
		position: 'relative', //for `.form-section-actions` positioning
		paddingLeft: noPadding ? null : section.paddingLeft,
		paddingRight: noPadding ? null : section.paddingRight,

		':not(:first-of-type)': {
			paddingTop: section.paddingTop,
		},
		':not(:last-child)': {
			paddingBottom: section.paddingBottom, //0.6rem assuming there will be a `FormGroup` margin-bottom (3rem)
		},

		// Subequent sections
		'& + &': {
			borderTop: section.borderTop,
		},
	};

	return <div css={mq(common)} {...props} />;
};

// ==============================
// Types
// ==============================

FormSection.propTypes = {
	/**
	 * Remove section padding
	 */
	noPadding: PropTypes.bool,

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

FormSection.defaultProps = {
	noPadding: false,
};
