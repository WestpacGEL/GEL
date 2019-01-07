import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@westpac/core';

// ==============================
// Utils
// ==============================

export const sizeMap = {
	xsmall: 12, //0.5x
	small: 18, //0.75x
	medium: 24, //1x (default)
	large: 36, //1.5x
	xlarge: 48, //2x
};
export const getSizeValue = s => sizeMap[s];

const Wrapper = styled.div(({ size }) => ({
	backgroundSize: 'contain',
	display: 'inline-block',
	lineHeight: '1',
	verticalAlign: 'middle',
	height: size,
	width: size,

	svg: {
		width: ' 100%',
		height: ' 100%',
	},
}));

// ==============================
// Component
// ==============================

// TODO
// create unique id for every SVG instance? seems like it would be easier to
// just apply the label to a `aria-label` attribute on the SVG itself rather
// than binding the title el to the svg with labelledby...

// what about descriptions?

export const Icon = ({ children, label, size }) => {
	const sizeValue = getSizeValue(size);

	return (
		<Wrapper size={sizeValue}>
			<svg
				aria-labelledby={`icon-title-${label}`}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<title id={`icon-title-${label}`} lang="en">
					{label}
				</title>
				{children}
			</svg>
		</Wrapper>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * String to use as the aria-label for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 */
	label: PropTypes.string,
	/**
	 * Control the size of the icon.
	 */
	size: PropTypes.oneOf(Object.keys(sizeMap)),
	/**
	 * The primary color for the icon.
	 */
	primaryColor: PropTypes.string,
	/**
	 * For secondary colour for 2-color icons. Set to inherit to control this via
	 * "fill" in CSS.
	 */
	secondaryColor: PropTypes.string,
};

export const defaultProps = {
	size: 'medium',
	primaryColor: 'currentColor',
};

Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;
