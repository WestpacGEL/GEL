/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const ChitChat = ({ tag: Tag, ...props }) => {
	const {
		COLORS,
		LAYOUT: { breakpoints },
	} = useTheme();
	const mq = paint(breakpoints);

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
