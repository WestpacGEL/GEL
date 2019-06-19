/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

import { Button } from '../../button/src';


// ==============================
// Utils
// ==============================

export const ButtonGroupButton = ({ appearance, size, soft, icon, children, ...props }) => (
	<label
		css={{
			flex: 1,

			'&:not(:last-child) > button': {
			  borderTopRightRadius: 0,
			  borderBottomRightRadius: 0,
			  borderRight: 'none',
			},
			'&:not(:first-of-type) > button': {
			  borderTopLeftRadius: 0,
			  borderBottomLeftRadius: 0,
			}
		}}
		{...props}
	>
		<input
			css={{
				position: 'absolute',
				zIndex: -1,
				opacity: 0
			}}
			type="radio"
			name=""
		/>
		<Button
			appearance={appearance}
			size={size}
			soft={soft}
			block={true}
			icon={icon}
			{...props}
		>
			{children}
		</Button>
	</label>
);

// ==============================
// Component
// ==============================

export const ButtonGroup = ({ appearance, size, soft, block, children, ...props }) => {

	// Common styles
	const common = {
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center', //vertical
		verticalAlign: 'middle'
	};

	// Pass selected props to children
	const buttonGroupContent = Children.map(children, child => (
		cloneElement(child, { appearance, size, soft, ...props, ...child.props })
	));


	return (
		<div
			css={{ ...common }}
			{...props}
		>
			{buttonGroupContent}
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
	 * Defaults to "hero"
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
