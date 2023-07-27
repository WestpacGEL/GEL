import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MobilePayIcon = ({
	assistiveText = 'MobilePay',
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
					d="M6 0C4.89543 0 4 0.89543 4 2V22C4 23.1046 4.89543 24 6 24H16C17.1046 24 18 23.1046 18 22V13H15.584C14.8124 14.7659 13.0503 16 11 16C8.23858 16 6 13.7614 6 11C6 8.94968 7.2341 7.1876 9 6.41604V0H6Z"
					fill="currentColor"
				/>
				<path d="M11 2V0C17.08 0 22 4.92 22 11H20C20 6.03 15.97 2 11 2Z" fill="currentColor" />
				<path d="M11 6V4C14.87 4 18 7.13 18 11H16C16 8.24 13.76 6 11 6Z" fill="currentColor" />
				<path
					d="M14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M4 2C4 0.89543 4.89543 0 6 0H9V2H6V22H16V13H18V22C18 23.1046 17.1046 24 16 24H6C4.89543 24 4 23.1046 4 22V2Z"
					fill="currentColor"
				/>
				<path d="M11 2V0C17.08 0 22 4.92 22 11H20C20 6.03 15.97 2 11 2Z" fill="currentColor" />
				<path d="M11 4V6C13.76 6 16 8.24 16 11H18C18 7.13 14.87 4 11 4Z" fill="currentColor" />
				<path
					d="M14 11C14 9.34 12.66 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14C12.6569 14 14 12.6569 14 11Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

MobilePayIcon.propTypes = {
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
