/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

export const sizeMap = {
	xsmall: 12, // 0.5x
	small: 18, //  0.75x
	medium: 24, // 1x (default)
	large: 36, //  1.5x
	xlarge: 48, // 2x
};
export const getSizeInt = s => sizeMap[s];

const IconWrapper = ({ color, size, ...props }) => (
	<span
		css={{
			display: 'inline-block',
			flexShrink: 0,
			height: size,
			lineHeight: 1,
			verticalAlign: 'middle',
			width: size,
		}}
		{...props}
	/>
);

// ==============================
// Component
// ==============================

export const Icon = ({ children, color, label, size, ...props }) => {
	const sizeInt = getSizeInt(size);

	// TODO Investigate:
	// I suspect that using the style attribute to apply the color property will
	// improve CSS reuse.
	return (
		<IconWrapper color={color} size={sizeInt} style={{ color }} {...props}>
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
	size: PropTypes.oneOf(Object.keys(sizeMap)),
};

export const defaultProps = {
	size: 'medium',
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
