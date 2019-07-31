/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormSection = ({ size, spacing, inline, noPadding, children, ...props }) => {
	const { colors, breakpoints, form } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		position: 'relative', //for `.form-section-actions` positioning
		paddingTop: form.section.paddingTop,
		paddingBottom: form.section.paddingBottom, //6px assuming there will be a `.form-group` margin-bottom (30px)

		paddingLeft: noPadding ? null : [null, '54px', '46px', '50px'],
		paddingRight: noPadding ? null : [null, '54px', '46px', '50px'],

		// TODO apply programatically? (rather than via CSS pseudo-class)
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

	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { size, spacing, inline }) : child;
	});

	return (
		<div css={mq({ ...styleCommon })} {...props}>
			{giftedChildren}
		</div>
	);
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
};

FormSection.defaultProps = {
	noPadding: false,
};
