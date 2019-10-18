/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
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
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	// We don't support soft links, so don't want them to cause styling issues
	if (soft && appearance === 'link') soft = false;

	// Common styling
	const styleCommon = {
		alignItems: 'center', //vertical
		appearance: 'none',
		border: '1px solid transparent',
		borderRadius: '0.1875rem',
		cursor: 'pointer',
		fontWeight: 400,
		justifyContent: justify ? 'space-between' : 'center', //horizontal
		lineHeight: 1.5,
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

	// Appearance styling
	const styleAppearance = {
		primary: {
			standard: {
				color: '#fff',
				backgroundColor: COLORS.primary,
				borderColor: COLORS.primary,

				':hover': {
					backgroundColor: COLORS.tints.primary70,
				},
				':active, &.active': {
					backgroundColor: COLORS.tints.primary50,
				},
			},
			soft: {
				color: COLORS.text,
				backgroundColor: '#fff',
				borderColor: COLORS.primary,

				':hover': {
					color: '#fff',
					backgroundColor: COLORS.tints.primary70,
				},
				':active, &.active': {
					color: '#fff',
					backgroundColor: COLORS.tints.primary50,
				},
			},
		},
		hero: {
			standard: {
				color: '#fff', //TODO: STG uses `COLORS.text`
				backgroundColor: COLORS.hero,
				borderColor: COLORS.hero,

				':hover': {
					backgroundColor: COLORS.tints.hero70,
				},
				':active, &.active': {
					backgroundColor: COLORS.tints.hero50,
				},
			},
			soft: {
				color: COLORS.text,
				backgroundColor: '#fff',
				borderColor: COLORS.hero,

				':hover': {
					color: '#fff', //TODO: STG uses `COLORS.text` (i.e. `color: null`)
					backgroundColor: COLORS.tints.hero70,
				},
				':active, &.active': {
					color: '#fff', //TODO: STG uses `COLORS.text` (i.e. `color: null`)
					backgroundColor: COLORS.tints.hero50,
				},
			},
		},
		faint: {
			standard: {
				color: COLORS.muted,
				backgroundColor: COLORS.light,
				borderColor: COLORS.border,

				':hover, :active, &.active': {
					backgroundColor: '#fff',
				},
			},
			soft: {
				color: COLORS.muted,
				backgroundColor: '#fff',
				borderColor: COLORS.border,

				':hover, :active, &.active': {
					backgroundColor: COLORS.light,
				},
			},
		},
		link: {
			standard: {
				color: COLORS.primary,
				backgroundColor: 'transparent',
				borderColor: 'transparent',
			},
		},
	};

	// Size styling (responsive)
	const sizeArr = asArray(size);
	const sizeMap = {
		small: {
			padding: ['0.1875rem', '0.5625rem', '0.25rem'],
			fontSize: '0.875rem',
			height: '1.875rem',
		},
		medium: {
			padding: ['0.3125rem', '0.75rem'],
			fontSize: '1rem',
			height: '2.25rem',
		},
		large: {
			padding: ['0.5rem', '0.9375rem'],
			fontSize: '1rem',
			height: '2.625rem',
		},
		xlarge: {
			padding: ['0.5625rem', '1.125rem', '0.625rem'],
			fontSize: '1.125rem',
			height: '3rem',
		},
	};
	const styleSize = {
		padding: sizeArr.map(s => {
			if (!s) return null;
			const p = [...sizeMap[s].padding];
			if (trim) p[1] = '0';

			return p.join(' ');
		}),
		fontSize: sizeArr.map(s => s && sizeMap[s].fontSize),
		height: sizeArr.map(s => s && sizeMap[s].height),
	};

	// Block styling (responsive)
	const blockArr = asArray(block);
	const styleBlock = {
		display: blockArr.map(b => b !== null && (b ? 'flex' : 'inline-flex')),
		width: blockArr.map(b => b !== null && (b ? '100%' : 'auto')),
	};

	if (props.href) {
		Tag = 'a';
	}

	return (
		<Tag
			type={Tag === 'button' && props.onClick ? 'button' : undefined}
			css={mq({
				...styleCommon,
				...styleAppearance[appearance][soft ? 'soft' : 'standard'],
				...styleSize,
				...styleBlock,
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
	appearance: ['primary', 'hero', 'faint', 'link'],
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
