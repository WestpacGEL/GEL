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

export const FormChitChat = ({ tag: Tag, ...props }) => {
	const { breakpoints, form } = useTheme();
	const mq = paint(breakpoints);

	return <Tag css={mq({ ...form.chitchat })} {...props} />;
};

// ==============================
// Types
// ==============================

FormChitChat.propTypes = {
	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component text.
	 *
	 * This prop is required.
	 */
	children: PropTypes.string.isRequired,
};

FormChitChat.defaultProps = {
	tag: 'p',
};
