import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultPictogram } from './overrides/pictogram';
import { defaultSvg } from './overrides/svg';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

// ==============================
// Component
// ==============================

export interface PictogramProps {
	/**
	 * Pictogram
	 */
	pictogram?: any;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 *  The visual style of the pictogram
	 */
	mode?: { highlight: string; outline: string } | 'dark' | 'light' | 'duo';

	/**
	 * Set pictogram width in pixels.
	 *
	 * Pictogram will scale to fit (height will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	width?: number | number[];

	/**
	 * Set a pictogram height in pixels.
	 *
	 * Pictogram will scale to fit (width will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	height?: number | number[];

	/**
	 * The pictogram SVG viewBox (artboard) width
	 */
	viewBoxWidth?: number;

	/**
	 * The pictogram SVG viewBox (artboard) height
	 */
	viewBoxHeight?: number;

	/**
	 * String to use as the `aria-label` for the pictogram. Set to an empty string if you
	 * are rendering the pictogram with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the pictogram name e.g. `WalletPictogram` --> "Wallet"
	 */
	assistiveText?: string;

	/**
	 * The pictogram SVG metadata copyright year text
	 */
	copyrightYear: string;

	/**
	 * The override API
	 */
	overrides?: {
		Pictogram?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Svg?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

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
}: PictogramProps) => {
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

Pictogram.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * String to use as the `aria-label` for the pictogram. Set to an empty string if you
	 * are rendering the pictogram with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the pictogram name e.g. `WalletPictogram` --> "Wallet"
	 */
	assistiveText: PropTypes.string,
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The pictogram SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string.isRequired,
	/**
	 * Set a pictogram height in pixels.
	 *
	 * Pictogram will scale to fit (width will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	height: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
	/**
	 * The visual style of the pictogram
	 */
	mode: PropTypes.oneOfType([
		PropTypes.oneOf(['dark', 'duo', 'light']),
		PropTypes.shape({
			highlight: PropTypes.string.isRequired,
			outline: PropTypes.string.isRequired,
		}),
	]),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Pictogram: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Svg: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Pictogram
	 */
	pictogram: PropTypes.any,
	/**
	 * The pictogram SVG viewBox (artboard) height
	 */
	viewBoxHeight: PropTypes.number,
	/**
	 * The pictogram SVG viewBox (artboard) width
	 */
	viewBoxWidth: PropTypes.number,
	/**
	 * Set pictogram width in pixels.
	 *
	 * Pictogram will scale to fit (height will be set automatically). Note: If both "width" and "height" props are provided "height" will be ignored.
	 */
	width: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
};
