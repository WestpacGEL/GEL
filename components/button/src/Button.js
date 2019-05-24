/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================


// ==============================
// Component
// ==============================

export const Button = ({ appearance, size, soft, block, trim, children, tag: Tag, onClick, ...props }) => {
	const theme = useTheme();

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
			}
		}
	);

	const styles = css(
		// Appearance
		theme.button.appearance[appearance].default,
		{
			'&:hover': theme.button.appearance[appearance].hover,
			'&:active': theme.button.appearance[appearance].active
		},

		// Size
		theme.button.size[size],

		// Overrides
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

	return (
		<Tag
			type={(Tag === 'button' && props.onClick) ? 'button' : undefined}
			css={[common, styles]}
			{...props}
			onClick={onClick}
		>
			{children}
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
	trim: false
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
