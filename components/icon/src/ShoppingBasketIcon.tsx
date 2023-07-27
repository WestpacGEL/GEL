import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ShoppingBasketIcon = ({
	assistiveText = 'Shopping Basket',
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
				d="M5.45455 9.00001L11.1913 1.11202C11.5906 0.562919 12.4094 0.562919 12.8087 1.11202L18.5455 9.00001H23.3478C23.6768 9.00001 23.9161 9.3123 23.8306 9.63L20.8987 20.52C20.6636 21.3932 19.8718 22 18.9674 22H5.03296C4.12863 22 3.33683 21.3932 3.10173 20.52L0.169813 9.63C0.0842789 9.3123 0.32361 9.00001 0.652621 9.00001H5.45455ZM7.92754 9.00001L12 3.40038L16.0725 9.00001H7.92754ZM14.0002 15C14.0002 16.1046 13.1048 17 12.0002 17C10.8956 17 10.0002 16.1046 10.0002 15C10.0002 13.8954 10.8956 13 12.0002 13C13.1048 13 14.0002 13.8954 14.0002 15Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M14.0002 15C14.0002 16.1046 13.1048 17 12.0002 17C10.8956 17 10.0002 16.1046 10.0002 15C10.0002 13.8954 10.8956 13 12.0002 13C13.1048 13 14.0002 13.8954 14.0002 15Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.45475 9.00001L11.1915 1.11202C11.5908 0.562919 12.4096 0.562919 12.8089 1.11202L18.5457 9.00001H23.3478C23.6768 9.00001 23.9161 9.3123 23.8306 9.63L20.8987 20.52C20.6636 21.3932 19.8718 22 18.9674 22H5.03296C4.12863 22 3.33683 21.3932 3.10173 20.52L0.169813 9.63C0.0842789 9.3123 0.32361 9.00001 0.652621 9.00001H5.45475ZM7.92774 9.00001L12.0002 3.40038L16.0727 9.00001H7.92774ZM2.60988 11L5.03296 20H18.9674L21.3905 11H2.60988Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ShoppingBasketIcon.propTypes = {
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
