import { useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultIcon } from './overrides/icon';
import { defaultSvg } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Icon = ({
	color,
	size,
	assistiveText,
	icon,
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

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	color: PropTypes.string,

	/**
	 * String to use as the `aria-label` for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
	 */
	assistiveText: PropTypes.string,

	/**
	 * Control the size of the icon.
	 *
	 * Defaults to "medium" --> 24px
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])).isRequired,
	]),

	/**
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Icon: PropTypes.shape({
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
	size: 'medium',
	copyrightYear: '',
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
