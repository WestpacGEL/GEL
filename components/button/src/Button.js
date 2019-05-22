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

export const Button = ({ appearance, size, tag: Tag, outline, block, children, onClick, ...props }) => {
	const theme = useTheme();
	const common = {
		textDecoration: 'none',
		borderRadius: '3px',
		fontWeight: 400,
		lineHeight: 1.5,
		whiteSpace: 'nowrap',
		display: block ? 'block' : 'inline-block',
		textAlign: 'center',
		verticalAlign: 'middle',
		touchAction: 'manipulation',
		cursor: 'pointer',
		border: '1px solid transparent',
		userSelect: 'none',
		appearance: 'none',
		transition: 'background 0.2s ease, color 0.2s ease',

		// Block mode...
		width: block ? '100%' : null,
		overflow: block ? 'hidden' : null,
		textOverflow: block ? 'ellipses' : null,
	};
	const styles = {
		appearance: {
			primary: {
				color: '#fff',
				backgroundColor: theme.colors.primary.default,
				borderColor: theme.colors.primary.default,
			},
			hero: {
				color: '#fff',
				backgroundColor: theme.colors.hero.default,
				borderColor: theme.colors.hero.default,
			},
			neutral: {
				color: '#fff',
				backgroundColor: theme.colors.neutral,
				borderColor: theme.colors.neutral,
			},
			faint: {
				color: theme.colors.muted,
				backgroundColor: '#fff',
				borderColor: theme.colors.border,
			},
			link: {
				color: theme.colors.primary.default,
				backgroundColor: 'transparent',
				borderColor: 'transparent',
			}
		},
		size: {
			small: {
				padding: '3px 9px 4px',
				fontSize: '14px',
				height: '30px',
			},
			medium: {
				padding: '5px 12px',
				fontSize: '16px',
				height: '36px',
			},
			large: {
				padding: '8px 15px',
				fontSize: '16px',
				height: '42px',
			},
			xlarge: {
				padding: '9px 18px 10px',
				fontSize: '18px',
				height: '48px',
			},
		}
	};

	if (props.href && Tag === 'button') {
    Tag = 'a';
  }

	return (
		<Tag
			type={(Tag === 'button' && props.onClick) ? 'button' : undefined}
			css={{ ...common, ...styles.appearance[appearance], ...styles.size[size] }}
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
	 * Outline mode.
	 *
	 * Defaults to "false"
	 */
	 outline: PropTypes.bool,

	/**
	 * Block mode.
	 *
	 * Defaults to "false"
	 */
	 block: PropTypes.bool,

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
	outline: false,
	block: false
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
