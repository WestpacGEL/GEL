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

export const FormErrorMessage = ({ tag: Tag, inline, ...props }) => {
	const { colors } = useTheme();

	// Common styling
	const styleCommon = {
		fontSize: '14px', //TODO token
		margin: '0 0 12px', //TODO token
		color: colors.danger.default, //TODO token

		// Multiple error messages styled in a list
		'ul&, ol&': {
			listStyle: 'none',
			paddingLeft: 0,
		},
		li: {
			marginBottom: '6px', //TODO token
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
