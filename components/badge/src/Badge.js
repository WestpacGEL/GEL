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
	const { colors, badge } = useTheme();

	const common = {
		border: `${badge.borderWidth} solid transparent`,
		borderRadius: badge.borderRadius,
		display: 'inline-block',
		fontSize: badge.fontSize,
		fontWeight: badge.fontWeight,
		lineHeight: badge.lineHeight,
		minWidth: badge.minWidth,
		padding: badge.padding,
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
	};

	const styleAppearance = {
		primary: {
			color: '#fff',
			backgroundColor: colors.primary.default,
			borderColor: colors.primary.default,
		},
		hero: {
			color: '#fff',
			backgroundColor: colors.hero.default,
			borderColor: colors.hero.default,
		},
		neutral: {
			color: '#fff',
			backgroundColor: colors.neutral,
			borderColor: colors.neutral,
		},
		faint: {
			color: colors.muted,
			backgroundColor: '#fff',
			borderColor: colors.border,
		},
		success: {
			color: '#fff',
			backgroundColor: colors.success,
			borderColor: colors.success,
		},
		info: {
			color: '#fff',
			backgroundColor: colors.information,
			borderColor: colors.information,
		},
		danger: {
			color: '#fff',
			backgroundColor: colors.danger,
			borderColor: colors.danger,
		},
		warning: {
			color: '#fff',
			backgroundColor: colors.warning,
			borderColor: colors.warning,
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
