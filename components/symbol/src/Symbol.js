import { useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultSymbol } from './overrides/symbol';
import { defaultSvg } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Symbol = ({
	width,
	height,
	assistiveText,
	viewBoxWidth,
	viewBoxHeight,
	align,
	offset,
	copyrightYear,
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
		height,
		assistiveText,
		viewBoxWidth,
		viewBoxHeight,
		align,
		offset,
		copyrightYear,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Symbol: { component: Symbol, styles: symbolStyles, attributes: symbolAttributes },
		Svg: { component: Svg, styles: svgStyles, attributes: svgAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const getTransform = () => {
		const alignMap = {
			left: offset[0],
			center: offset[1],
			right: offset[2],
		};
		const translate = alignMap[align];

		return translate ? `translate(${translate})` : undefined;
	};

	return (
		<Symbol {...rest} state={state} {...symbolAttributes(state)} css={symbolStyles(state)}>
			<Svg state={state} {...svgAttributes(state)} css={svgStyles(state)}>
				{copyrightYear && (
					<metadata>
						{`Copyright © ${copyrightYear} by Westpac Banking Corporation. All rights reserved.`}
					</metadata>
				)}
				{align && offset ? <g transform={getTransform()}>{children}</g> : children}
			</Svg>
		</Symbol>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
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
	 * The symbol SVG viewBox (artboard) width
	 */
	viewBoxWidth: PropTypes.number,

	/**
	 * The symbol SVG viewBox (artboard) height
	 */
	viewBoxHeight: PropTypes.number,

	/**
	 * Set horizontal alignment
	 */
	align: PropTypes.oneOf(['left', 'center', 'right']).isRequired,

	/**
	 * Set horizontal alignment positioning.
	 *
	 * Offset takes an array of alignment offset values e.g. `[<left-offset>, <center-offset>, <right-offset>]`
	 */
	offset: PropTypes.array,

	/**
	 * String to use as the `aria-label` for the symbol. Set to an empty string if you
	 * are rendering the symbol with visible text to prevent accessibility label
	 * duplication.
	 */
	assistiveText: PropTypes.string,

	/**
	 * The symbol SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string.isRequired,

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

Symbol.propTypes = propTypes;
