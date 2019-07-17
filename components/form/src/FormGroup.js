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

export const FormGroup = ({ size, primary, inline, ...props }) => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		display: ['block', (inline ? 'inline-block' : null)],
		verticalAlign: [null, (inline ? 'middle' : null)],
		textAlign: primary ? 'center' : null,
	};

	// Size styling
	const styleSize = {
		marginBottom: size === 'large'
			? ['24px', '30px']
			: ['18px', (inline ? 0 : null)], //TODO token
	};

	return (
		<div css={mq({ ...styleCommon, ...styleSize })} {...props} />
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['medium', 'large'],
};

FormGroup.propTypes = {
	/**
	 * The form group size.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Primary (fork) mode.
	 *
	 * Defaults to "false"
	 */
	primary: PropTypes.bool,

	/**
	 * Inline layout mode.
	 *
	 * Defaults to "false"
	 */
	inline: PropTypes.bool,
};

FormGroup.defaultProps = {
	size: 'medium',
	primary: false,
	inline: false,
};
