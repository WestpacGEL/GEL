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

export const FormChitChat = ({ inline, tag: Tag, ...props }) => {
	const { colors, breakpoints } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		fontSize: '18px', //TODO token
		color: colors.heading, //TODO token
		lineHeight: 1.4, //TODO token
		fontWeight: 'bold', //TODO token
		textAlign: 'center',
		margin: [0, '0 0 30px'], //TODO token
	};

	return (
		<Tag css={mq({ ...styleCommon })} {...props} />
	);
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
};

FormChitChat.defaultProps = {
	tag: 'p'
};
