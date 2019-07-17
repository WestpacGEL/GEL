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

export const FormSection = ({ ...props }) => {
	const { colors, breakpoints } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		position: 'relative', //for `.form-section-actions` positioning
		paddingTop: ['30px', '36px'], //TODO token
		paddingBottom: '6px',  //TODO token //6px assuming there will be a `.form-group` margin-bottom (30px)

		':first-of-type': {
			paddingTop: 0,
		},
		':last-child': {
			paddingBottom: 0,
		},

		// Subequent sections
		'& + &': {
			borderTop: `1px solid ${colors.border}`, //TODO token
		},

	};

	return (
		<div css={mq({ ...styleCommon })} {...props} />
	);
};

// ==============================
// Types
// ==============================

FormSection.propTypes = {};

FormSection.defaultProps = {};
