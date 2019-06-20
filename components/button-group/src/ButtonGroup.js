/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { Button } from '../../button/src';


// ==============================
// Utils
// ==============================

export const ButtonGroupButton = ({ appearance, size, icon, iconPosition, name, children, ...props }) => {
	const theme = useTheme();

	return (
		<label
			css={{
				flex: 1,

				// Style internal borders
				'&:not(:last-child) > .btn-group-btn': {
				  borderTopRightRadius: 0,
				  borderBottomRightRadius: 0,
				  borderRight: 'none',
				},
				'&:not(:first-of-type) > .btn-group-btn': {
				  borderTopLeftRadius: 0,
				  borderBottomLeftRadius: 0,
				}
			}}
		>
			<input
				css={{
					position: 'absolute',
					zIndex: -1,
					opacity: 0
				}}
				type="radio"
				name={name}
			/>
			<Button
				className="btn-group-btn"
				css={{
					// Active state styling
					'input:checked + &': {
						color: theme.button.appearance[appearance].default.color,
						backgroundColor: theme.button.appearance[appearance].default.backgroundColor,
						borderColor: theme.button.appearance[appearance].default.borderColor,
					}
				}}
				tag="span"
				appearance={appearance}
				size={size}
				soft={true}
				block={true}
				icon={icon}
				iconPosition={iconPosition}
				{...props}
			>
				{children}
			</Button>
		</label>
	);
};

// ==============================
// Component
// ==============================

export const ButtonGroup = ({ appearance, size, block, icon, iconPosition, name, children, ...props }) => {

	// Common styles
	const common = {
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center', //vertical
		verticalAlign: 'middle'
	};

	// Pass these selected props on to children (that way button styling can be set by parent ButtonGroup)
	const giftedChildren = Children.map(children, child => (
		cloneElement(child, { appearance, size, block, icon, iconPosition, name, ...child.props })
	));


	return (
		<div
			css={{ ...common }}
			{...props}
		>
			{giftedChildren}
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
	 */
	 name: PropTypes.string.isRequired,

	/**
	 * The button content for this button group.
	 */
	 children: PropTypes.node.isRequired,
};

export const defaultProps = {
	appearance: 'hero',
	size: 'medium',
	block: false,
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
