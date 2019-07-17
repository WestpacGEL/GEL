/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormLabel = ({ size, spacing, ...props }) => {
	// Common styling
	const styleCommon = {
		display: 'inline-block',
		fontSize: size === 'small'
			? '14px'
			: '16px', //TODO token
		marginBottom: size === 'small'
			? '6px'
			: spacing === 'large'
				? '18px'
				: '12px', //TODO token
		fontWeight: 500,  //TODO token //Medium
	};

	return (
		<label css={styleCommon} {...props} />
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium'],
	spacing: ['medium', 'large'],
};

FormLabel.propTypes = {
	/**
	 * The label text size (ie. 'label' or 'sublabel').
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * The label spacing amount.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),
};

FormLabel.defaultProps = {
	size: 'medium',
	spacing: 'medium',
};
