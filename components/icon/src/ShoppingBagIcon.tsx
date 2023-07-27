import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ShoppingBagIcon = ({
	assistiveText = 'Shopping Bag',
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 5C17 2.23858 14.7614 0 12 0C9.23858 0 7 2.23858 7 5H4C2.89543 5 2 5.89543 2 7V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V7C22 5.89543 21.1046 5 20 5H17ZM12 2C13.6569 2 15 3.34315 15 5H9C9 3.34315 10.3431 2 12 2ZM12 13C9.23858 13 7 10.7614 7 8H9C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8H17C17 10.7614 14.7614 13 12 13Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M12 13C9.23858 13 7 10.7614 7 8H9C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8H17C17 10.7614 14.7614 13 12 13Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17 5C17 2.23858 14.7614 0 12 0C9.23858 0 7 2.23858 7 5H4C2.89543 5 2 5.89543 2 7V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V7C22 5.89543 21.1046 5 20 5H17ZM12 2C13.6569 2 15 3.34315 15 5H9C9 3.34315 10.3431 2 12 2ZM4 7V22H20V7H4Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ShoppingBagIcon.propTypes = {
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
