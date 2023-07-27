import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WalkIcon = ({
	assistiveText = 'Walk',
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
					d="M15.5 2.25C15.5 3.4875 14.4875 4.5 13.25 4.5C12.0125 4.5 11 3.4875 11 2.25C11 1.0125 12.0125 0 13.25 0C14.4875 0 15.5 1.0125 15.5 2.25Z"
					fill="currentColor"
				/>
				<path
					d="M7.5 24H5.5L8.5 8L6 9V13H4V7.5C4 7.5 9.1383 5.43006 9.46977 5.31078C9.80123 5.19151 10.3628 5.02326 10.6977 5.02326C11.4791 5.02326 12.1488 5.46977 12.5953 6.13953L13.7116 7.92558C14.6047 9.48837 16.3907 11 18.5116 11V13C16.0558 13 13.9512 11.6744 12.5 10L12 13.5L14 16L14.0465 24H12V17L9.5 15L7.5 24Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M15.5 2.25C15.5 3.4875 14.4875 4.5 13.25 4.5C12.0125 4.5 11 3.4875 11 2.25C11 1.0125 12.0125 0 13.25 0C14.4875 0 15.5 1.0125 15.5 2.25Z"
					fill="currentColor"
				/>
				<path
					d="M7.5 24H5.5L8.5 8L6 9V13H4V7.5C4 7.5 9.1383 5.43006 9.46977 5.31078C9.80123 5.19151 10.3628 5.02326 10.6977 5.02326C11.4791 5.02326 12.1488 5.46977 12.5953 6.13953L13.7116 7.92558C14.6047 9.48837 16.3907 11 18.5116 11V13C16.0558 13 13.9512 11.6744 12.5 10L12 13.5L14 16L14.0465 24H12V17L9.5 15L7.5 24Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

WalkIcon.propTypes = {
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
