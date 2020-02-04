/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Icon as IconWrapper, iconStyles } from './overrides/icon';
import { Svg, svgStyles } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Icon = ({
	color,
	size,
	assistiveText,
	className,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Icon: {
			styles: iconStyles,
			component: IconWrapper,
			attributes: () => null,
		},
		Svg: {
			styles: svgStyles,
			component: Svg,
			attributes: () => null,
		},
	};

	const state = {
		color,
		size,
		assistiveText,
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
		<overrides.Icon.component
			color={color}
			size={size}
			assistiveText={assistiveText}
			className={className}
			{...overrides.Icon.attributes(state)}
			css={overrides.Icon.styles(state)}
		>
			<overrides.Svg.component
				color={color}
				size={size}
				assistiveText={assistiveText}
				css={overrides.Svg.styles(state)}
				{...overrides.Svg.attributes(state)}
			>
				{children}
			</overrides.Svg.component>
		</overrides.Icon.component>
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
		PropTypes.arrayOf(PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])),
	]),

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
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
