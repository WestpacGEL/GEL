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

export const FormHint = ({ tag: Tag, size, spacing, inline, ...props }) => {
	const { colors, form } = useTheme();

	// Common styling
	const styleCommon = {
		color: form.hint.color,
		fontSize: form.hint.fontSize,
		...form.hint.spacing[spacing],
	};

	return <Tag css={styleCommon} {...props} />;
};

// ==============================
// Types
// ==============================

FormHint.propTypes = {
	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FormHint.defaultProps = {
	tag: 'p',
};
