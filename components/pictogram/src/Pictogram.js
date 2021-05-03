/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultPictogram } from './overrides/pictogram';
import { defaultSvg } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Pictogram = ({
	mode,
	width,
	height,
	assistiveText,
	viewBoxWidth,
	viewBoxHeight,
	copyrightYear,
	pictogram,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Pictogram: defaultPictogram,
		Svg: defaultSvg,
	};

	const state = {
		mode,
		width,
		height,
		assistiveText,
		viewBoxWidth,
		viewBoxHeight,
		copyrightYear,
		pictogram,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Pictogram: { component: Pictogram, styles: pictogramStyles, attributes: pictogramAttributes },
		Svg: { component: Svg, styles: svgStyles, attributes: svgAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Pictogram {...rest} state={state} {...pictogramAttributes(state)} css={pictogramStyles(state)}>
			<Svg state={state} css={svgStyles(state)} {...svgAttributes(state)}>
				{copyrightYear && (
					<metadata>
						{`Copyright © ${copyrightYear} by Westpac Banking Corporation. All rights reserved.`}
					</metadata>
				)}
				{children}
			</Svg>
		</Pictogram>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 *  The visual style of the pictogram
	 */
	mode: PropTypes.oneOfType([
		PropTypes.shape({ highlight: PropTypes.string, outline: PropTypes.string }),
		PropTypes.oneOf(['dark', 'light', 'duo']),
	]),

	/**
	 * Set pictogram width in pixels.
	 *
	 * Pictogram will scale to fit (height will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * Set a pictogram height in pixels.
	 *
	 * Pictogram will scale to fit (width will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * The pictogram SVG viewBox (artboard) width
	 */
	viewBoxWidth: PropTypes.number,

	/**
	 * The pictogram SVG viewBox (artboard) height
	 */
	viewBoxHeight: PropTypes.number,

	/**
	 * String to use as the `aria-label` for the pictogram. Set to an empty string if you
	 * are rendering the pictogram with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the pictogram name e.g. `WalletPictogram` --> "Wallet"
	 */
	assistiveText: PropTypes.string,

	/**
	 * The pictogram SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Pictogram: PropTypes.shape({
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

export const defaultProps = {
	mode: 'duo',
};

Pictogram.propTypes = propTypes;
Pictogram.defaultProps = defaultProps;
