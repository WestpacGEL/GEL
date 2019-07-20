/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Form = ({ spacing, inline, children, ...props }) => {
	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { spacing, inline }) : child;
	});

	return <form {...props}>{giftedChildren}</form>;
};

// ==============================
// Types
// ==============================

const options = {
	spacing: ['medium', 'large'],
};

Form.propTypes = {
	/**
	 * The component vertical spacing.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Inline mode.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "false"
	 */
	inline: PropTypes.bool,
};

Form.defaultProps = {
	spacing: 'medium',
	inline: false,
};
