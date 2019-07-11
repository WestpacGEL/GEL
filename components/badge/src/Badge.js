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

export const Badge = ({ appearance, children, ...props }) => {
	const theme = useTheme();

	const common = {
		display: 'inline-block',
		minWidth: '10px',
		padding: '4px 7px',
		lineHeight: 1,
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		textAlign: 'center',
		borderRadius: '12px',
		fontWeight: 700,
		fontSize: '14px',
		border: '1px solid transparent',
	};

	const styleAppearance = {
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
		success: {
			color: '#fff',
			backgroundColor: theme.colors.success,
			borderColor: theme.colors.success,
		},
		info: {
			color: '#fff',
			backgroundColor: theme.colors.information,
			borderColor: theme.colors.information,
		},
		danger: {
			color: '#fff',
			backgroundColor: theme.colors.danger,
			borderColor: theme.colors.danger,
		},
		warning: {
			color: '#fff',
			backgroundColor: theme.colors.warning,
			borderColor: theme.colors.warning,
		},
	};

	return (
		<span css={{ ...common, ...styleAppearance[appearance] }} {...props}>
			{children}
		</span>
	);
};

// ==============================
// Types
// ==============================

Badge.propTypes = {
	/**
	 * The badge appearance.
	 *
	 * Defaults to "neutral"
	 */
	appearance: PropTypes.oneOf([
		'primary',
		'hero',
		'neutral',
		'faint',
		'success',
		'info',
		'warning',
		'danger',
	]),

	/**
	 * The content for this badge.
	 *
	 * This prop is requried.
	 */
	children: PropTypes.node.isRequired,
};

Badge.defaultProps = {
	appearance: 'neutral',
};
