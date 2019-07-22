/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { Button } from '../../button/src';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const ButtonGroup = ({
	appearance,
	size,
	block,
	icon,
	iconPosition,
	name,
	children,
	...props
}) => {
	// Common styles
	const common = {
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center', //vertical
		verticalAlign: 'middle',
	};

	// Pass these selected props on to children (that way button styling can be set by parent ButtonGroup)
	const giftedChildren = Children.map(children, child =>
		cloneElement(child, { appearance, size, block, icon, iconPosition, name, ...child.props })
	);

	return (
		<div css={{ ...common }} {...props}>
			{giftedChildren}
		</div>
	);
};

// ==============================
// Types
// ==============================

const options = {
	appearance: ['primary', 'hero', 'neutral', 'faint', 'link'],
	size: ['small', 'medium', 'large', 'xlarge'],
};

ButtonGroup.propTypes = {
	/**
	 * The button appearance.
	 *
	 * Defaults to "hero"
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * The button group size.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Block mode.
	 *
	 * Defaults to "false"
	 */
	block: PropTypes.bool,

	/**
	 * Button icon.
	 */
	icon: PropTypes.func,

	/**
	 * Button icon positioning.
	 *
	 * Defaults to "right"
	 */
	iconPosition: PropTypes.string,

	/**
	 * The button group input element’s name.
	 *
	 * This prop is required.
	 */
	name: PropTypes.string.isRequired,

	/**
	 * The button content for this button group.
	 *
	 * This prop is required.
	 */
	children: PropTypes.node.isRequired,
};

ButtonGroup.defaultProps = {
	appearance: 'hero',
	size: 'medium',
	block: false,
};
