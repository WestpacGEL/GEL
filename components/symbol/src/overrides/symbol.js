/** @jsx jsx */

import { jsx, useMediaQuery, asArray, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Symbol = ({ symbol: _, state: __, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const symbolStyles = (_, { symbol, width, height, viewBoxWidth, viewBoxHeight }) => {
	const mq = useMediaQuery();

	const round = (f) => Math.round(f * 10) / 10; // 1DP
	const ratio = viewBoxWidth / viewBoxHeight;

	// Size styling (responsive)
	const widthArr = asArray(width || viewBoxWidth);
	const heightArr = asArray(height || viewBoxHeight);
	const styleSize = {
		width: width ? widthArr : heightArr.map((h) => (h !== null ? round(h * ratio) : null)),
		height: width ? widthArr.map((w) => (w !== null ? round(w / ratio) : null)) : heightArr,
	};

	const symbolName = 'symbol-'.concat(symbol.replace('Symbol', ''));

	return mq({
		label: getLabel(symbolName),
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
		...styleSize,
	})[0];
};

// ==============================
// Attributes
// ==============================

const symbolAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultSymbol = {
	component: Symbol,
	styles: symbolStyles,
	attributes: symbolAttributes,
};
