/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================


// ==============================
// Component
// ==============================

export const Button = ({ appearance, size, soft, block, trim, icon: Icon, iconPosition, justify, children, tag: Tag, onClick, ...props }) => {
	const theme = useTheme();

	// Common styles
	const common = {
		textDecoration: 'none',
		border: '1px solid transparent',
		borderRadius: theme.button.radius,
		fontWeight: 400,
		lineHeight: 1.5,
		display: 'inline-flex',
		flex: 1,
		flexDirection: iconPosition === 'left' ? 'row-reverse' : null,
		textAlign: 'center',
		justifyContent: 'center', //horizontal
		alignItems: 'center', //vertical
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',

		touchAction: 'manipulation',
		cursor: 'pointer',
		userSelect: 'none',
		appearance: 'none',
		transition: 'background 0.2s ease, color 0.2s ease',

		// Hover state
		'&:hover:not(.disabled):not(:disabled)': {
			textDecoration: appearance === 'link' ? 'underline' : 'none',
		},

		// Disabled state
		'&.disabled, &:disabled': {
			opacity: '0.5',
			cursor: 'not-allowed',
		},
		// A hyperlink that’s disabled or inside a disabled fieldset
		'a&.disabled, fieldset[disabled] a&': {
			pointerEvents: 'none'
		},

		// Button text flex child (always `<span>` wrapped)
		'.btn-text': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},

		// Style text/icon gap (if button text provided)
		// TODO Investigate: use of Emotion's component selector? https://emotion.sh/docs/styled#targeting-another-emotion-component
		'.btn-icon': {
			marginLeft: children && iconPosition === 'right' && '0.4em',
			marginRight: children && iconPosition === 'left' && '0.4em',
		},
	};

	// Button appearance
	const styleAppearance = {
		// Default
		color: theme.button.appearance[appearance].default.color,
		backgroundColor: theme.button.appearance[appearance].default.backgroundColor,
		borderColor: theme.button.appearance[appearance].default.borderColor,

		'&:not(.disabled):not(:disabled)': {
			// Hover state
			'&:hover': {
				color: theme.button.appearance[appearance].hover.color,
				backgroundColor: theme.button.appearance[appearance].hover.backgroundColor,
				borderColor: theme.button.appearance[appearance].hover.borderColor,
			},
			// Active state
			'&:active, &.active': {
				color: theme.button.appearance[appearance].active.color,
				backgroundColor: theme.button.appearance[appearance].active.backgroundColor,
				borderColor: theme.button.appearance[appearance].active.borderColor,
			},
		},
	};

	// Button size
	const styleSize = {
		padding: (theme.button.size[size].padding).join(' '), //provided as an array
		fontSize: theme.button.size[size].fontSize,
		height: theme.button.size[size].height,
	};

	// Button style overrides
	const styleOverrides = [
		// Soft option
		soft && {
			color: appearance === 'faint' ? theme.colors.muted : theme.colors.text,
			backgroundColor: '#fff',

			'&:not(.disabled):not(:disabled)': {
				// Hover state
				// (nb. custom 'faint' hover styling)
				'&:hover': {
					color: appearance !== 'faint' && '#fff',
					backgroundColor: appearance === 'faint' && theme.colors.light,
				},
				// Active state (re-implement non-soft button’s active styling)
				'&:active, &.active': {
					color: theme.button.appearance[appearance].active.color,
					backgroundColor: theme.button.appearance[appearance].active.backgroundColor,
					borderColor: theme.button.appearance[appearance].active.borderColor,
				},
			},
		},

		// Block option
		block && {
			display: 'flex', //flex will provide 'block-level' appearance (we use flex so any icon children can be positioned appropriately)
			width: '100%',
		},

		// Justify option
		justify && {
			justifyContent: 'space-between', //any content will be positioned against the inner edges
		},

		// Trim option
		trim && {
			paddingLeft: 0,
			paddingRight: 0,
		},
	];


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

	// Compose a button text + icon fragment, if either of these items are provided
	// (nb. `<input>` elements cannot have children; they would use a `value` prop)
  const buttonContent = Tag !== 'input'
  	? <>
  			{children && <span className="btn-text">{children}</span>}
  			{Icon && <Icon className="btn-icon" size={iconSize[size]} />}
  		</>
  	: null;


	return (
		<Tag
			type={(Tag === 'button' && props.onClick) ? 'button' : undefined}
			css={[common, styleAppearance, styleSize, styleOverrides]}
			{...props}
			onClick={onClick}
		>
			{buttonContent}
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
	 * Button content alignment.
	 */
	 justify: PropTypes.string,

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
	iconPosition: 'right',
	justify: false
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
