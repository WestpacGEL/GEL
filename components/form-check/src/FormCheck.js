/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormCheck = ({ type, name, size, inline, flip, children, ...props }) => {
	// Pass the selected props on to children
	const giftedChildren = Children.map(children, child =>
		cloneElement(child, { type, name, size, inline, flip })
	);

	return <div {...props}>{giftedChildren}</div>;
};

// ==============================
// Types
// ==============================

const options = {
	type: ['checkbox', 'radio'],
	size: ['medium', 'large'],
};

FormCheck.propTypes = {
	/**
	 * Form check type.
	 *
	 * This prop is passed to children.
	 */
	type: PropTypes.oneOf(options.type),

	/**
	 * The form check input element’s name.
	 *
	 * This prop is passed to children.
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Form check size.
	 *
	 * This prop is passed to children.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Form check orientation (control on the right).
	 *
	 * This prop is passed to children.
	 */
	flip: PropTypes.bool,

	/**
	 * Form check item(s)
	 */
	children: PropTypes.node.isRequired,
};

FormCheck.defaultProps = {
	type: 'checkbox',
	size: 'medium',
	flip: false,
};
