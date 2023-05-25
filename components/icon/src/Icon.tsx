import { useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

import { defaultIcon } from './overrides/icon';
import { defaultSvg } from './overrides/svg';
import pkg from '../package.json';

export interface IconProps {
	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	color?: string;

	/**
	 * String to use as the `aria-label` for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
	 */
	assistiveText?: string;

	/**
	 * Control the size of the icon.
	 *
	 * Defaults to "medium" --> 24px
	 */
	size?:
		| 'xsmall'
		| 'small'
		| 'medium'
		| 'large'
		| 'xlarge'
		| ('xsmall' | 'small' | 'medium' | 'large' | 'xlarge')[];

	/**
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear?: string;

	/**
	 * Define Icon
	 */
	icon: string;

	/**
	 * children prop
	 */
	children?: ReactNode;

	/**
	 * The override API
	 */
	overrides?: {
		Icon?: {
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

// ==============================
// Component
// ==============================

export const Icon = ({
	color,
	size = 'medium',
	assistiveText,
	icon,
	copyrightYear = '',
	children,
	overrides: componentOverrides,
	...rest
}: IconProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Icon: defaultIcon,
		Svg: defaultSvg,
	};

	const state = {
		color,
		size,
		assistiveText,
		icon,
		copyrightYear,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
		Svg: { component: Svg, styles: svgStyles, attributes: svgAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Icon {...rest} state={state} {...iconAttributes(state)} css={iconStyles(state)}>
			<Svg state={state} css={svgStyles(state)} {...svgAttributes(state)}>
				{copyrightYear && (
					<metadata>
						{`Copyright © ${copyrightYear} by Westpac Banking Corporation. All rights reserved.`}
					</metadata>
				)}
				{children}
			</Svg>
		</Icon>
	);
};

Icon.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * String to use as the `aria-label` for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
	 */
	assistiveText: PropTypes.string,
	/**
	 * children prop
	 */
	children: PropTypes.node,
	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	color: PropTypes.string,
	/**
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string,
	/**
	 * Define Icon
	 */
	icon: PropTypes.string.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Icon: PropTypes.shape({
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
	 * Control the size of the icon.
	 *
	 * Defaults to "medium" --> 24px
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall']),
		PropTypes.arrayOf(PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall'])),
	]),
};
