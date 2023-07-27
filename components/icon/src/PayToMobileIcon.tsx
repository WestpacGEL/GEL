import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PayToMobileIcon = ({
	assistiveText = 'PayToMobile',
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
					d="M6 2C6 0.89543 6.89543 0 8 0H18C19.1046 0 20 0.895431 20 2V22C20 23.1046 19.1046 24 18 24H10V22H17.8471C17.9478 21.3481 18 20.6801 18 20C18 13.1568 12.7124 7.54851 6 7.03789V2Z"
					fill="currentColor"
				/>
				<path d="M5 9V11C9.97 11 14 15.03 14 20H16C16 13.92 11.08 9 5 9Z" fill="currentColor" />
				<path d="M5 15V13C8.87 13 12 16.13 12 20H10C10 17.24 7.76 15 5 15Z" fill="currentColor" />
				<path
					d="M8 20C8 18.34 6.66 17 5 17C3.34315 17 2 18.3431 2 20C2 21.6569 3.34315 23 5 23C6.65685 23 8 21.6569 8 20Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M8 0C6.89543 0 6 0.89543 6 2V7H8V2H18V22H10V24H18C19.1046 24 20 23.1046 20 22V2C20 0.895431 19.1046 0 18 0H8Z"
					fill="currentColor"
				/>
				<path d="M5 11V9C11.08 9 16 13.92 16 20H14C14 15.03 9.97 11 5 11Z" fill="currentColor" />
				<path d="M5 13V15C7.76 15 10 17.24 10 20H12C12 16.13 8.87 13 5 13Z" fill="currentColor" />
				<path
					d="M8 20C8 18.34 6.66 17 5 17C3.34315 17 2 18.3431 2 20C2 21.6569 3.34315 23 5 23C6.65685 23 8 21.6569 8 20Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

PayToMobileIcon.propTypes = {
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
