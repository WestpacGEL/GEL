import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ServiceBellIcon = ({
	assistiveText = 'Service Bell',
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
					d="M14 2H10C9.44771 2 9 2.44772 9 3C9 3.55228 9.44771 4 10 4H11V7.04484C5.3935 7.55007 1 12.262 1 18H23C23 12.262 18.6065 7.55007 13 7.04484V4H14C14.5523 4 15 3.55228 15 3C15 2.44772 14.5523 2 14 2Z"
					fill="currentColor"
				/>
				<path d="M24 20V22H0V20H24Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14 2H10C9.44771 2 9 2.44772 9 3C9 3.55228 9.44771 4 10 4H11V7.04484C6.06084 7.48993 2.06309 11.1999 1.18138 16C1.06225 16.6486 1 17.317 1 18H23C23 17.317 22.9378 16.6486 22.8186 16C21.9369 11.1999 17.9392 7.48993 13 7.04484V4H14C14.5523 4 15 3.55228 15 3C15 2.44772 14.5523 2 14 2ZM20.777 16C19.8675 11.992 16.2832 9 12 9C7.71683 9 4.13247 11.992 3.22302 16H20.777Z"
					fill="currentColor"
				/>
				<path d="M24 20V22H0V20H24Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);

ServiceBellIcon.propTypes = {
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
