/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx, useTheme } from '@westpac/core';

// import { HouseIcon, AlertIcon, ChatIcon, AccessibilityIcon } from '../../icon/src'; //until icon package is published

// ==============================
// Utils
// ==============================


// ==============================
// Component
// ==============================

export const Button = ({ appearance, size, soft, block, trim, icon: Icon, iconPosition, children, tag: Tag, onClick, ...props }) => {
	const theme = useTheme();

	// Common styles
	const common = css(
		{
			textDecoration: 'none',
			borderRadius: theme.button.radius,
			fontWeight: 400,
			lineHeight: 1.5,
			whiteSpace: 'nowrap',
			display: 'inline-block',
			textAlign: 'center',
			verticalAlign: 'middle',
			touchAction: 'manipulation',
			cursor: 'pointer',
			border: '1px solid transparent',
			userSelect: 'none',
			appearance: 'none',
			transition: 'background 0.2s ease, color 0.2s ease',

			'&:hover': {
				textDecoration: appearance === 'link' ? 'underline' : 'none'
			},

			'& .icon': {
				marginLeft: iconPosition === 'right' && '0.3em',
				marginRight: iconPosition === 'left' && '0.3em',
			},
		},
	);

	// Button appearance
	const styleAppearance = css(
		{
			// Default
			color: theme.button.appearance[appearance].default.color,
			backgroundColor: theme.button.appearance[appearance].default.backgroundColor,
			borderColor: theme.button.appearance[appearance].default.borderColor,

			// Hover
			'&:hover': {
				color: theme.button.appearance[appearance].hover.color,
				backgroundColor: theme.button.appearance[appearance].hover.backgroundColor,
				borderColor: theme.button.appearance[appearance].hover.borderColor
			},

			// Active
			'&:active': {
				color: theme.button.appearance[appearance].active.color,
				backgroundColor: theme.button.appearance[appearance].active.backgroundColor,
				borderColor: theme.button.appearance[appearance].active.borderColor
			},
		}
	);

	// Button size
	const styleSize = css(
		{
			padding: (theme.button.size[size].padding).join(' '),
			fontSize: theme.button.size[size].fontSize,
			height: theme.button.size[size].height,
		}
	);

	// Styling overrides
	const styleOverrides = css(
		soft && {
			color: appearance === 'faint' ? theme.colors.muted : theme.colors.text,
			backgroundColor: '#fff',

			// Custom 'faint' hover styling
			'&:hover': {
				color: appearance !== 'faint' && '#fff',
				backgroundColor: appearance === 'faint' && theme.colors.light,
			}
		},
		block && {
			display: 'block',
			width: '100%',
			overflow: 'block',
			textOverflow: 'ellipses'
		},
		trim && {
			paddingLeft: 0,
			paddingRight: 0
		}
	);


	if (props.href && Tag === 'button') {
    Tag = 'a';
  }

  // Map button size to icon size
  const iconSize = {
  	small: 'small', //18px
  	medium: 'small', //18px
  	large: 'medium', //24px
  	xlarge: 'medium', //24px
  };
  const buttonIcon = Icon && <Icon size={iconSize[size]} /> : null;

	return (
		<Tag
			type={(Tag === 'button' && props.onClick) ? 'button' : undefined}
			css={[common, styleAppearance, styleSize, styleOverrides]}
			{...props}
			onClick={onClick}
		>
			{iconPosition === 'left' && buttonIcon}
			{children}
			{iconPosition === 'right' && buttonIcon}
		</Tag>
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
	 * The button size.
	 *
	 * Defaults to "medium"
	 */
	 size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),

	/**
	 * The button tag.
	 *
	 * Defaults to "button"
	 */
	 tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Soft mode. Removes background colour and adjusts text colour.
	 *
	 * Defaults to "false"
	 */
	 soft: PropTypes.bool,

	/**
	 * Block mode.
	 *
	 * Defaults to "false"
	 */
	 block: PropTypes.bool,

	/**
	 * Trim mode. Removes horizontal padding.
	 *
	 * Defaults to "false"
	 */
	 trim: PropTypes.bool,

	/**
	 * Button icon (left).
	 */
	 icon: PropTypes.func,

	/**
	 * Button icon positioning.
	 */
	 iconPosition: PropTypes.string,

	/**
	 * The content for this button.
	 */
	 children: PropTypes.node,

	/**
	 * The onClick handler for this button.
	 */
	 onClick: PropTypes.func,
};

export const defaultProps = {
	appearance: 'primary',
	size: 'medium',
	tag: 'button',
	soft: false,
	block: false,
	trim: false,
	iconPosition: 'right'
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
