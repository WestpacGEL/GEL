/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultSymbol } from './overrides/symbol';
import { defaultSvg } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Symbol = ({
	width,
	assistiveText,
	viewBoxWidth,
	viewBoxHeight,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Symbol: defaultSymbol,
		Svg: defaultSvg,
	};

	const state = {
		width,
		assistiveText,
		viewBoxWidth,
		viewBoxHeight,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Symbol: { component: Symbol, styles: symbolStyles, attributes: symbolAttributes },
		Svg: { component: Svg, styles: svgStyles, attributes: svgAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Symbol {...rest} state={state} {...symbolAttributes(state)} css={symbolStyles(state)}>
			<Svg state={state} {...svgAttributes(state)} css={svgStyles(state)}>
				{children}
			</Svg>
		</Symbol>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * String to use as the `aria-label` for the symbol. Set to an empty string if you
	 * are rendering the symbol with visible text to prevent accessibility label
	 * duplication.
	 */
	assistiveText: PropTypes.string,

	/**
	 * Set a symbol width in pixels.
	 *
	 * Symbol will scale to fit (height will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * Set a symbol height in pixels.
	 *
	 * Symbol will scale to fit (width will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Symbol: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Svg: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {};

Symbol.propTypes = propTypes;

Symbol.defaultProps = defaultProps;
