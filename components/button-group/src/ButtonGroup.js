/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';


// ==============================
// Utils
// ==============================


// ==============================
// Component
// ==============================

export const ButtonGroup = ({ children, ...props }) => {

	// Common styles
	const common = {
		display: 'inline-flex',
		alignItems: 'center', //vertical
		verticalAlign: 'middle'
	};

	// Add props to children
	const childrenWithProps = Children.map(children, child => {
		// console.log(props, child.props, { ...props, ...child.props });
		return cloneElement(child, { ...props, ...child.props });
	});


	return (
		<div
			css={{ ...common }}
			{...props}
		>
			{childrenWithProps}
		</div>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * The button appearance.
	 *
	 * Defaults to "primary"
	 */
	 appearance: PropTypes.oneOf(['primary', 'hero', 'neutral', 'faint', 'link']),

	/**
	 * The button group size.
	 *
	 * Defaults to "medium"
	 */
	 size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),

	/**
	 * Soft mode. Removes background colour and adjusts text colour.
	 *
	 * Defaults to "true"
	 */
	 soft: PropTypes.bool,

	/**
	 * Block mode.
	 *
	 * Defaults to "false"
	 */
	 block: PropTypes.bool,

	/**
	 * The button content for this button group.
	 */
	 children: PropTypes.node,
};

export const defaultProps = {
	appearance: 'hero',
	size: 'medium',
	soft: true,
	block: false,
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
