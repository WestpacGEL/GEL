import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CartIcon = ({
	assistiveText = 'Cart',
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
				<path
					d="M0 2H1.41597C1.88002 2 2.2831 2.31925 2.38939 2.77096L5.66378 16.6871C5.98264 18.0423 7.19187 19 8.58403 19H21V17H8.58403C8.11998 17 7.7169 16.6808 7.61061 16.229L7.32143 15H20.3604C21.3138 15 22.1346 14.3271 22.3216 13.3922L24 5H4.96849L4.33622 2.31288C4.01736 0.957735 2.80813 0 1.41597 0H0V2Z"
					fill="currentColor"
				/>
				<path
					d="M11 22C11 23.1046 10.1046 24 9 24C7.89543 24 7 23.1046 7 22C7 20.8954 7.89543 20 9 20C10.1046 20 11 20.8954 11 22Z"
					fill="currentColor"
				/>
				<path
					d="M18 24C19.1046 24 20 23.1046 20 22C20 20.8954 19.1046 20 18 20C16.8954 20 16 20.8954 16 22C16 23.1046 16.8954 24 18 24Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 2H1.41597C1.88002 2 2.2831 2.31925 2.38939 2.77096L5.66378 16.6871C5.98264 18.0423 7.19187 19 8.58403 19H21V17H8.58403C8.11998 17 7.7169 16.6808 7.61061 16.229L7.32143 15H20.3604C21.3138 15 22.1346 14.3271 22.3216 13.3922L24 5H4.96849L4.33622 2.31288C4.01736 0.957735 2.80813 0 1.41597 0H0V2ZM5.43907 7L6.85084 13L20.3604 13L21.5604 7H5.43907Z"
					fill="currentColor"
				/>
				<path
					d="M11 22C11 23.1046 10.1046 24 9 24C7.89543 24 7 23.1046 7 22C7 20.8954 7.89543 20 9 20C10.1046 20 11 20.8954 11 22Z"
					fill="currentColor"
				/>
				<path
					d="M18 24C19.1046 24 20 23.1046 20 22C20 20.8954 19.1046 20 18 20C16.8954 20 16 20.8954 16 22C16 23.1046 16.8954 24 18 24Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

CartIcon.propTypes = {
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
