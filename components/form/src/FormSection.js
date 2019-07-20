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

export const FormSection = ({ inline, spacing, children, ...props }) => {
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

	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { spacing, inline }) : child;
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

FormSection.propTypes = {};

FormSection.defaultProps = {};
