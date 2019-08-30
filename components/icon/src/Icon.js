/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

export const sizeMap = {
	xsmall: 12, // 0.5x
	small: 18, //  0.75x
	medium: 24, // 1x (default)
	large: 36, //  1.5x
	xlarge: 48, // 2x
};

const IconWrapper = ({ size, ...props }) => {
	const { colors, breakpoints } = useTheme();
	const mq = paint(breakpoints);

<<<<<<< HEAD
	// Common styling
	const styleCommon = {
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
		color: colors.muted, //default
	};

	// Reponsive styling (icon size)
	const styleResponsive = () => {
		const sizeArr = asArray(size).map(s => sizeMap[s]);

		return {
			height: sizeArr,
			width: sizeArr,
		};
=======
	const style = {
		// Common styling
		common: {
			display: 'inline-block',
			flexShrink: 0,
			lineHeight: 1,
			verticalAlign: 'middle',
		},

		// Reponsive styling (icon size)
		responsive: (() => {
			const sizeArr = asArray(size).map(s => s && sizeMap[s]);

			return {
				height: sizeArr,
				width: sizeArr,
			};
		})(),
>>>>>>> gel-develop
	};

	return (
		<span
			css={mq({
				...style.common,
				...style.responsive,
			})}
			{...props}
		/>
	);
};

// ==============================
// Component
// ==============================

export const Icon = ({ children, color, label, size, ...props }) => {
	const { colors } = useTheme();

	// TODO Investigate:
	// I suspect that using the style attribute to apply the color property will
	// improve CSS reuse.
	return (
<<<<<<< HEAD
		<IconWrapper size={size} style={{ color }} {...props}>
=======
		<IconWrapper size={size} style={{ color: color ? color : colors.muted }} {...props}>
>>>>>>> gel-develop
			<svg
				aria-label={label}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				role="img"
				focusable="false"
			>
				{children}
			</svg>
		</IconWrapper>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	color: PropTypes.string,

	/**
	 * String to use as the aria-label for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
	 */
	label: PropTypes.string,

	/**
	 * Control the size of the icon.
	 *
	 * Defaults to "medium" --> 24px
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(Object.keys(sizeMap)),
		PropTypes.arrayOf(PropTypes.oneOf(Object.keys(sizeMap))),
	]),
};

export const defaultProps = {
	size: 'medium',
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
