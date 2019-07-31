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

export const FormErrorMessage = ({ tag: Tag, size, spacing, inline, ...props }) => {
	const { form } = useTheme();

	// Common styling
	const styleCommon = {
		...form.errorMessage,

		// Multiple error messages styled in a list
		'ul&, ol&': {
			listStyle: 'none',
			paddingLeft: 0,
		},
	};

	return <Tag css={styleCommon} {...props} />;
};

// ==============================
// Types
// ==============================

FormErrorMessage.propTypes = {
	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FormErrorMessage.defaultProps = {
	tag: 'p',
};
