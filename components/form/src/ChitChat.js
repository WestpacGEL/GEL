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

export const ChitChat = ({ tag: Tag, ...props }) => {
	const { breakpoints, form } = useTheme();
	const mq = paint(breakpoints);

	return <Tag css={mq({ ...form.chitchat })} {...props} />;
};

// ==============================
// Types
// ==============================

ChitChat.propTypes = {
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

ChitChat.defaultProps = {
	tag: 'p',
};
