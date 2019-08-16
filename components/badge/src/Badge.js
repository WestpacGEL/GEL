/** @jsx jsx */

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
		color: colors[appearance].foreground,
		backgroundColor: colors[appearance].default,
		borderColor: appearance === 'faint' ? colors.border : colors[appearance].default,
	};

	return (
		<span css={{ ...common, ...styleAppearance }} {...props}>
			{children}
		</span>
	);
};

// ==============================
// Types
// ==============================

Badge.propTypes = {
	/** Badge appearance */
	appearance: PropTypes.oneOf([
		'primary',
		'hero',
		'neutral',
		'faint',
		'success',
		'information',
		'warning',
		'danger',
	]),

	/** Badge text */
	children: PropTypes.node.isRequired,
};

Badge.defaultProps = {
	appearance: 'neutral',
};
