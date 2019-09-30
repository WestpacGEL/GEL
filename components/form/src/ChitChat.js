/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const ChitChat = ({ tag: Tag, ...props }) => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();

	return (
		<Tag
			css={mq({
				fontSize: '1.125rem',
				color: COLORS.heading,
				lineHeight: 1.4,
				fontWeight: 'bold',
				textAlign: 'center',
				margin: [0, '0 0 1.875rem'],
			})}
			{...props}
		/>
	);
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
