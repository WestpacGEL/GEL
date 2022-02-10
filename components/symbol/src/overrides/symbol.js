/** @jsxRuntime classic */
/** @jsx jsx */

import {
	jsx,
	useMediaQuery,
	asArray,
	getLabel,
	getModifier,
	classNames,
	formatClassName,
	styleReconciler,
} from '@westpac/core';
import { defaultProps } from '../Symbol';

// ==============================
// Component
// ==============================

const Symbol = ({ symbol: _, state: __, ...rest }) => <span {...rest} />;

const BlenderSymbol = ({ className, ...rest }) => (
	<Symbol className={formatClassName(className)} {...rest} />
);

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

	return mq({
		label: getLabel('symbol'),
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',

		// We use a <Symbol /> wrapper component alone to generate our baseStyles. Checking for symbol ensures we can run Symbol like this.
		...(symbol && styleSize),

		svg: {
			display: 'block',
		},
	})[0];
};

const blenderStyles = (_, { symbol, width, height, viewBoxWidth, viewBoxHeight }) => {
	const props = { symbol, width, height, viewBoxWidth, viewBoxHeight };
	const baseStyles = symbolStyles(_, defaultProps);

	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = symbolStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'symbol':
			label = `${label}-${symbol}`;
			break;
		default:
			label = `${label}-${modifier}`;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const symbolAttributes = () => null;

const blenderAttributes = (_, { symbol }) => ({
	className: classNames({
		[`__convert__symbol-${symbol}`]: symbol,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultSymbol = {
	component: Symbol,
	styles: symbolStyles,
	attributes: symbolAttributes,
};

export const blenderSymbol = {
	component: BlenderSymbol,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
