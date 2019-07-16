/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

const getSizeStyling = (size, trim, button) => {
	const padding = button.size[size].padding;
	if (trim) {
		padding[1] = 0;
	}

	return {
		padding: padding.join(' '), //provided as an array
		fontSize: button.size[size].fontSize,
		height: button.size[size].height,
	};
};

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
	const { breakpoints, button } = useTheme();
	const mq = mediaQueries(breakpoints);

	// Common styling
	const styleCommon = {
		alignItems: 'center', //vertical
		appearance: 'none',
		border: `${button.borderWidth} solid transparent`,
		borderRadius: button.borderRadius,
		cursor: 'pointer',
		flex: 1,
		flexDirection: iconPosition === 'left' ? 'row-reverse' : null,
		fontWeight: button.fontWeight,
		justifyContent: justify ? 'space-between' : 'center', //horizontal
		lineHeight: button.lineHeight,
		textAlign: 'center',
		textDecoration: 'none',
		touchAction: 'manipulation',
		transition: 'background 0.2s ease, color 0.2s ease',
		userSelect: 'none',
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',

		// Hover state (but excluded if disabled or inside a disabled fieldset)
		':hover:not(:disabled), fieldset:not(:disabled) &:hover': {
			textDecoration: appearance === 'link' ? 'underline' : 'none',
		},

		// Disabled via `disabled` attribute or inside a disabled fieldset
		':disabled, fieldset:disabled &': {
			opacity: '0.5',
			pointerEvents: 'none',
		},
	};

	// Button appearance styling
	const styleAppearance = {
		...button.appearance[appearance].standard.default,
		...(soft && appearance !== 'link' && button.appearance[appearance].soft.default),

		':hover': {
			...button.appearance[appearance].standard.hover,
			...(soft && appearance !== 'link' && button.appearance[appearance].soft.hover),
		},
		':active, &.active': {
			...button.appearance[appearance].standard.active,
			...(soft && appearance !== 'link' && button.appearance[appearance].soft.active),
		},
	};

	// Button size styling
	const styleSize = Array.isArray(size)
		? // Size provided as an array
		  size.map((s, i) => {
				return i === 0
					? getSizeStyling(s, trim, button)
					: { [mq[i]]: getSizeStyling(s, trim, button) };
		  })
		: // Size prop provided a string, returned as single index array
		  [getSizeStyling(size, trim, button)];

	// Block styling
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

	// Compose a button text + icon fragment, if either of these items are provided
	// (nb. `<input>` elements cannot have children; they would use a `value` prop)
	const buttonContent = () => {
		// Icon gap styling
		const styleIcon = {
			marginLeft: children && iconPosition === 'right' && '0.4em',
			marginRight: children && iconPosition === 'left' && '0.4em',
		};
		// Map button size to icon size
		const iconSize = {
			small: 'small', //18px
			medium: 'small', //18px
			large: 'medium', //24px
			xlarge: 'medium', //24px
		};
		// Text truncation styling (used in block mode)
		const styleChildren = {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		};

		return Tag !== 'input' ? (
			<>
				{children && <span css={styleChildren}>{children}</span>}
				{Icon && <Icon css={styleIcon} size={iconSize[size]} />}
			</>
		) : null;
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
