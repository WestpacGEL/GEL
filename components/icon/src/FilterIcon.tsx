import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FilterIcon = ({
	assistiveText = 'Filter',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<Fragment>
				<path d="M4 8H2V6H4V8Z" fill="currentColor" />
				<path d="M2 12H4V10H2V12Z" fill="currentColor" />
				<path d="M2 16H4V14H2V16Z" fill="currentColor" />
				<path d="M6 12H22V10H6V12Z" fill="currentColor" />
				<path d="M22 16H6V14H22V16Z" fill="currentColor" />
				<path d="M6 6V8H22V6H6Z" fill="currentColor" />
				<path d="M19 21L16 18H22L19 21Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path d="M4 8H2V6H4V8Z" fill="currentColor" />
				<path d="M2 12H4V10H2V12Z" fill="currentColor" />
				<path d="M2 16H4V14H2V16Z" fill="currentColor" />
				<path d="M6 12H22V10H6V12Z" fill="currentColor" />
				<path d="M22 16H6V14H22V16Z" fill="currentColor" />
				<path d="M6 6V8H22V6H6Z" fill="currentColor" />
				<path d="M19 21L16 18H22L19 21Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);

FilterIcon.propTypes = {
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
	 * The look of the icon.
	 *
	 * Defaults to the filled version.
	 */
	look: PropTypes.string,
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
