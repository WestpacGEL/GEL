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

export const FormHint = ({ spacing, tag: Tag, ...props }) => {
	const { colors } = useTheme();

	// Common styling
	const styleCommon = {
		color: colors.muted, //TODO token
		fontSize: '14px', //TODO token
		marginTop: '12px',
		marginBottom: spacing === 'large' ? '18px' : '12px',

		// Hint text after a label
		/*.input-label ~ & {
			marginTop: -(@input-label-margin-bottom - @form-hint-gap), //pull up
			marginBottom: @input-label-margin-bottom,
		}
		.input-label-large ~ & {
			marginTop: -(@input-label-large-margin-bottom - @form-hint-gap), //pull up
			marginBottom: @input-label-large-margin-bottom,
		}*/
	};

	return (
		<Tag css={styleCommon} {...props} />
	);
};

// ==============================
// Types
// ==============================

const options = {
	spacing: ['medium', 'large'],
};

FormHint.propTypes = {
	/**
	 * The form group spacing.
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
