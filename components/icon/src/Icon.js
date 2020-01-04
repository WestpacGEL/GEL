/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { Svg, svgStyles } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Icon = ({
	color,
	size,
	assistiveText,
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
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
			Svg: {
				styles: svgStyles,
				component: Svg,
				attributes: state => state,
			},
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
		componentOverrides,
		state
	);

	return (
		<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
			<overrides.subComponent.Svg.component
				css={overrides.subComponent.Svg.styles}
				{...overrides.subComponent.Svg.attributes(state)}
				aria-label={assistiveText}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				role="img"
				focusable="false"
			>
				{children}
			</overrides.subComponent.Svg.component>
		</overrides.component>
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
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Svg: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

export const defaultProps = {
	size: 'medium',
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
