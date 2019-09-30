/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { FormProvider } from './Form.context';

// ==============================
// Component
// ==============================

export const Form = ({ size, spacing, isInline, tag: Tag, children, ...props }) => {
	return (
		<FormProvider value={{ size, spacing, isInline }}>
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
	 * Size of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Vertical spacing of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	isInline: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Form children
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	size: 'medium',
	spacing: 'medium',
	isInline: false,
	tag: 'form',
};
Form.defaultProps = defaultProps;
