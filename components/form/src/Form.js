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

export const Form = ({ size, spacing, inline, children, ...props }) => {
	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { size, spacing, inline }) : child;
	});

	return <form {...props}>{giftedChildren}</form>;
};

// ==============================
// Types
// ==============================

Form.propTypes = {
	/**
	 * The component vertical spacing.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(['medium', 'large']),

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
