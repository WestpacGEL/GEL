/** @jsx jsx */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { FormProvider } from './Form.context';

// ==============================
// Component
// ==============================

export const Form = ({ size, spacing, inline, tag: Tag, children, ...props }) => {
	return (
		<FormProvider value={{ size, spacing, inline }}>
			<Tag {...props}>{children}</Tag>
		</FormProvider>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
	spacing: ['medium', 'large'],
};

Form.propTypes = {
	/**
	 * Size of children.
	 *
	 * This prop is available to children via `FormContext`.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Vertical spacing of children.
	 *
	 * This prop is available to children via `FormContext`.
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children via `FormContext`.
	 */
	inline: PropTypes.bool,

	/**
	 * Form wrapper tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Form children
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	size: null,
	spacing: 'medium',
	inline: false,
	tag: 'form',
};
Form.defaultProps = defaultProps;
