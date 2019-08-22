/** @jsx jsx */

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
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	justify,
	tag: Tag,
	onClick,
	children,
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

		return {
			padding: sizeArr.map(s => {
				if (!s) return null;
				const pad = button.size[s].padding;
				if (trim) pad[1] = 0;
				return pad.join(' ');
			}),
			fontSize: sizeArr.map(s => s && button.size[s].fontSize),
			height: sizeArr.map(s => s && button.size[s].height),
			display: blockArr.map(b => b !== null && (b ? 'flex' : 'inline-flex')),
			width: blockArr.map(b => b !== null && (b ? '100%' : 'auto')),
		};
	};

	if (props.href) {
		Tag = 'a';
	}

	// Compose a button text + icon fragment, if either of these items are provided
	// (nb. `<input>` elements cannot have children; they would use a `value` prop)
	const buttonContent = () => {
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
				{IconBefore && (
					<IconBefore
						css={{ marginRight: children ? '0.4em' : null }}
						size={iconSize[size]}
						color="inherit"
					/>
				)}
				{children && <span css={styleChildren}>{children}</span>}
				{IconAfter && (
					<IconAfter
						css={{ marginLeft: children ? '0.4em' : null }}
						size={iconSize[size]}
						color="inherit"
					/>
				)}
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
			onClick={onClick}
			{...props}
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
};

Button.propTypes = {
	/**
	 * Button appearance
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Button tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Soft mode.
	 *
	 * Removes background colour and adjusts text colour.
	 */
	soft: PropTypes.bool,

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Trim mode.
	 *
	 * Removes horizontal padding.
	 */
	trim: PropTypes.bool,

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Justify align button children
	 */
	justify: PropTypes.bool,

	/**
	 * Button text
	 */
	children: PropTypes.node,

	/**
	 * Handler to be called on click
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
	justify: false,
};
