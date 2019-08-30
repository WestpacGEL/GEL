/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const ChitChat = ({ tag: Tag, ...props }) => {
	const {
		breakpoints,
		form: { chitchat },
	} = useTheme();
	const mq = paint(breakpoints);

	return <Tag css={mq({ ...chitchat })} {...props} />;
};

// ==============================
// Types
// ==============================

ChitChat.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component text
	 */
	children: PropTypes.string.isRequired,
};

ChitChat.defaultProps = {
	tag: 'p',
};
