/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormHint = ({ spacing, inline, tag: Tag, ...props }) => {
	const { colors } = useTheme();

	// Common styling
	const styleCommon = {
		color: colors.muted, //TODO token
		fontSize: '14px', //TODO token
		marginTop: spacing === 'large' ? '-12px' : '-6px', //to get a 6px gap after the FormLabel
		marginBottom: spacing === 'large' ? '18px' : '12px',
	};

	return <Tag css={styleCommon} {...props} />;
};

// ==============================
// Types
// ==============================

const options = {
	spacing: ['medium', 'large'],
};

FormHint.propTypes = {
	/**
	 * The component vertical spacing.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FormHint.defaultProps = {
	spacing: 'medium',
	tag: 'p',
};
