/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

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
	const mq = paint(breakpoints);

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

	// Reponsive styling (button size and block)
	const styleResponsive = () => {
		const sizeArr = asArray(size);
		const blockArr = asArray(block);

		const padding = [],
			fontSize = [],
			height = [];

		sizeArr.forEach(s => {
			const pad = button.size[s].padding;
			if (trim) pad[1] = 0;
			padding.push(pad.join(' '));
			fontSize.push(button.size[s].fontSize);
			height.push(button.size[s].height);
		});

		return {
			padding,
			fontSize,
			height,
			display: blockArr.map(b => (b ? 'flex' : 'inline-flex')),
			width: blockArr.map(b => (b ? '100%' : 'auto')),
		};
	};

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
			css={mq({
				...styleCommon,
				...styleAppearance,
				...styleResponsive(),
			})}
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
