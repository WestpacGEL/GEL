/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Symbol as SymbolWrapper, symbolStyles } from './overrides/symbol';
import { Svg, svgStyles } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Symbol = ({
	assistiveText,
	viewBoxWidth,
	viewBoxHeight,
	children,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Symbol: {
			styles: symbolStyles,
			component: SymbolWrapper,
			attributes: (_, a) => a,
		},
		Svg: {
			styles: svgStyles,
			component: Svg,
			attributes: (_, a) => a,
		},
	};

	const state = {
		assistiveText,
		viewBoxWidth,
		viewBoxHeight,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Symbol.component
			className={className}
			{...overrides.Symbol.attributes(state)}
			css={overrides.Symbol.styles(state)}
		>
			<overrides.Svg.component
				aria-label={assistiveText}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
				role="img"
				focusable="false"
				style={{ width: '100%', height: '100%' }}
				{...overrides.Svg.attributes(state)}
				css={overrides.Svg.styles(state)}
			>
				{children}
			</overrides.Svg.component>
		</overrides.Symbol.component>
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
