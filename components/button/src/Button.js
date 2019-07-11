/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { mediaqueries } from './utils';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Button = ({
	appearance,
	size,
	soft,
	block,
	trim,
	icon: Icon,
	iconPosition,
	justify,
	children,
	tag: Tag,
	onClick,
	...props
}) => {
	const theme = useTheme();
	const mq = mediaqueries(theme.breakpoints);

	// Common styling
	const styleCommon = {
		textDecoration: 'none',
		border: '1px solid transparent',
		borderRadius: theme.button.borderRadius,
		fontWeight: 400,
		lineHeight: 1.5,
		// display: 'inline-flex', //moved - see getStyleDisplay styling (in styleOverrides)
		flex: 1,
		flexDirection: iconPosition === 'left' ? 'row-reverse' : null,
		textAlign: 'center',
		justifyContent: justify ? 'space-between' : 'center', //horizontal
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
			pointerEvents: 'none',
		},
	};

	// Button appearance styling
	const styleAppearance = {
		color: soft
			? // Soft option
			  appearance === 'faint'
				? theme.colors.muted
				: theme.colors.text
			: // Default
			  theme.button.appearance[appearance].default.color,
		backgroundColor: soft
			? // Soft
			  '#fff'
			: // Default
			  theme.button.appearance[appearance].default.backgroundColor,
		borderColor: theme.button.appearance[appearance].default.borderColor,

		'&:not(.disabled):not(:disabled)': {
			// Hover state
			'&:hover': {
				color: soft
					? // Soft
					  appearance !== 'faint'
						? '#fff'
						: theme.button.appearance[appearance].hover.color
					: // Default
					  theme.button.appearance[appearance].hover.color,
				backgroundColor: soft
					? // Soft
					  appearance === 'faint'
						? theme.colors.light
						: theme.button.appearance[appearance].hover.backgroundColor
					: // Default
					  theme.button.appearance[appearance].hover.backgroundColor,
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

	// Button size styling
	const getSizeStyling = size => {
		const padding = theme.button.size[size].padding;
		if (trim) {
			// console.log('lskdnfs');
			padding[1] = 0;
		}

		return {
			padding: padding.join(' '), //provided as an array
			fontSize: theme.button.size[size].fontSize,
			height: theme.button.size[size].height,
		};
	};
	const styleSize = Array.isArray(size)
		? // Size provided as an array
		  size.map((s, i) => {
				return i === 0 ? getSizeStyling(s) : { [mq[i]]: getSizeStyling(s) };
		  })
		: // Size prop provided a string, returned as single index array
		  [getSizeStyling(size)];

	// Block styling
	const getBlockStyling = block => {
		return block
			? // Block mode
			  {
					display: 'flex', //flex will provide 'block-level' appearance (we use flex so any icon children can be positioned appropriately)
					width: '100%',
			  }
			: // Inline mode
			  {
					display: 'inline-flex',
					width: 'auto', //reset
			  };
	};
	const styleBlock = Array.isArray(block)
		? // Block provided as an array
		  block.map((b, i) => {
				return i === 0 ? getBlockStyling(b) : { [mq[i]]: getBlockStyling(b) };
		  })
		: // Block prop provided a string, returned as single index array
		  [getBlockStyling(block)];

	if (props.href) {
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
	const buttonContent = () => {
		const styleIcon = {
			marginLeft: children && iconPosition === 'right' && '0.4em',
			marginRight: children && iconPosition === 'left' && '0.4em',
		};
		return (
			Tag !== 'input' ?
				<>
					{children && <span css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>}
					{Icon && <Icon css={styleIcon} size={iconSize[size]} />}
				</>
			: null
		);
	};

	return (
		<Tag
			type={Tag === 'button' && props.onClick ? 'button' : undefined}
			css={[
				{
					...styleCommon,
					...styleAppearance,
				},
				// Responsive styles (as arrays), cannot be spread
				styleSize,
				styleBlock,
			]}
			{...props}
			onClick={onClick}
		>
			{buttonContent()}
		</Tag>
	);
};

// ==============================
// Types
// ==============================

const options = {
	appearance: ['primary', 'hero', 'neutral', 'faint', 'link'],
	size: ['small', 'medium', 'large', 'xlarge'],
	iconPosition: ['left', 'right'],
};


Button.propTypes = {
	/**
	 * The button appearance.
	 *
	 * Defaults to "primary"
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * The button size.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

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
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Trim mode. Removes horizontal padding.
	 *
	 * Defaults to "false"
	 */
	trim: PropTypes.bool,

	/**
	 * Button icon.
	 */
	icon: PropTypes.func,

	/**
	 * Button icon positioning.
	 *
	 * Defaults to "right"
	 */
	iconPosition: PropTypes.oneOf(options.iconPosition),

	/**
	 * Button content alignment.
	 *
	 * Defaults to "false"
	 */
	justify: PropTypes.bool,

	/**
	 * The content for this button.
	 */
	children: PropTypes.node,

	/**
	 * The onClick handler for this button.
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	appearance: 'primary',
	size: 'medium',
	tag: 'button',
	soft: false,
	block: false,
	trim: false,
	iconPosition: 'right',
	justify: false,
};
