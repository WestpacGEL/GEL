/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

import { ButtonContent } from './styled';

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
	iconAfter,
	iconBefore,
	justify,
	srOnlyText,
	tag: Tag,
	onClick,
	children,
	...props
}) => {
	const { breakpoints, button } = useTheme();
	const mq = paint(breakpoints);

	const style = {
		// Common styling
		common: {
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
		},

		// Button appearance styling
		appearance: {
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
		},

		// Reponsive styling (button size and block)
		responsive: (() => {
			const sizeArr = asArray(size);
			const blockArr = asArray(block);

			return {
				padding: sizeArr.map(s => {
					if (!s) return null;
					let p = button.size[s].padding;
					if (trim) {
						p[1] = 0;
					}

					return p.join(' ');
				}),
				fontSize: sizeArr.map(s => s && button.size[s].fontSize),
				height: sizeArr.map(s => s && button.size[s].height),
				display: blockArr.map(b => b !== null && (b ? 'flex' : 'inline-flex')),
				width: blockArr.map(b => b !== null && (b ? '100%' : 'auto')),
			};
		})(),
	};

	if (props.href) {
		Tag = 'a';
	}

	return (
		<Tag
			type={Tag === 'button' && props.onClick ? 'button' : undefined}
			css={mq({
				...style.common,
				...style.appearance,
				...style.responsive,
			})}
			onClick={onClick}
			{...props}
		>
			{/* `<input>` elements cannot have children; they would use a `value` prop) */}
			{Tag !== 'input' ? (
				<ButtonContent
					size={size}
					block={block}
					iconAfter={iconAfter}
					iconBefore={iconBefore}
					srOnlyText={srOnlyText}
				>
					{children}
				</ButtonContent>
			) : null}
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

export const propTypes = {
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
	 * Enable ‘screen reader only’ text mode
	 */
	srOnlyText: PropTypes.bool,

	/**
	 * Handler to be called on click
	 */
	onClick: PropTypes.func,

	/**
	 * Button text
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	appearance: 'primary',
	size: 'medium',
	tag: 'button',
	soft: false,
	block: false,
	trim: false,
	justify: false,
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
