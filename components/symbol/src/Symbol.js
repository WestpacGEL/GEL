/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);
const round = f => Math.round(f * 100) / 100; //2DP

const SymbolWrapper = ({ width, height, viewBoxWidth, viewBoxHeight, ...props }) => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	const styleCommon = {
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
	};

	// Reponsive styling (symbol size)
	const styleResponsive = () => {
		const widthArr = asArray(width || viewBoxWidth);
		const heightArr = asArray(height || viewBoxHeight);

		const ratio = viewBoxWidth / viewBoxHeight;
		const resizeByWidth = !!width;

		return {
			width: resizeByWidth ? widthArr : heightArr.map(h => round(h * ratio)),
			height: resizeByWidth ? widthArr.map(w => round(w / ratio)) : heightArr,
		};
	};

	return (
		<span
			css={mq({
				...styleCommon,
				...styleResponsive(),
			})}
			{...props}
		/>
	);
};

// ==============================
// Component
// ==============================

export const Symbol = ({
	label,
	width,
	height,
	viewBoxWidth,
	viewBoxHeight,
	children,
	...props
}) => {
	return (
		<SymbolWrapper
			width={width}
			height={height}
			viewBoxWidth={viewBoxWidth}
			viewBoxHeight={viewBoxHeight}
			{...props}
		>
			<svg
				aria-label={label}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
				role="img"
				focusable="false"
				style={{ width: '100%', height: '100%' }}
			>
				{children}
			</svg>
		</SymbolWrapper>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * String to use as the aria-label for the symbol. Set to an empty string if you
	 * are rendering the symbol with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the symbol name e.g. `HouseSymbol` --> "House"
	 */
	label: PropTypes.string,

	/**
	 * Set a symbol width.
	 *
	 * Symbol will scale to fit (height will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * Set a symbol height.
	 *
	 * Symbol will scale to fit (width will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};

export const defaultProps = {};

Symbol.propTypes = propTypes;
Symbol.defaultProps = defaultProps;
