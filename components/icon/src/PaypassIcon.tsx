import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PaypassIcon = ({
	assistiveText = 'Paypass',
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
					d="M19 12C19 7.58171 17.2091 3.58171 14.3137 0.686279L12.8995 2.10049C15.433 4.63399 17 8.13399 17 12C17 15.866 15.433 19.366 12.8995 21.8995L14.3137 23.3137C17.2091 20.4183 19 16.4183 19 12Z"
					fill="currentColor"
				/>
				<path
					d="M15 12C15 8.68628 13.6568 5.68628 11.4853 3.51471L10.071 4.92892C11.8807 6.73856 13 9.23856 13 12C13 14.7614 11.8807 17.2614 10.071 19.0711L11.4853 20.4853C13.6568 18.3137 15 15.3137 15 12Z"
					fill="currentColor"
				/>
				<path
					d="M8.65683 6.34313C10.1045 7.79085 11 9.79085 11 12C11 14.2091 10.1045 16.2091 8.65683 17.6568L7.24261 16.2426C8.3284 15.1568 8.99997 13.6568 8.99997 12C8.99997 10.3431 8.3284 8.84313 7.24261 7.75735L8.65683 6.34313Z"
					fill="currentColor"
				/>
				<path
					d="M6.99997 12C6.99997 10.8954 6.55226 9.89542 5.8284 9.17156L4.41418 10.5858C4.77611 10.9477 4.99997 11.4477 4.99997 12C4.99997 12.5523 4.77611 13.0523 4.41418 13.4142L5.8284 14.8284C6.55226 14.1046 6.99997 13.1046 6.99997 12Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M19.0001 12C19.0001 7.58171 17.2092 3.58171 14.3138 0.686279L12.8996 2.10049C15.4331 4.63399 17.0001 8.13399 17.0001 12C17.0001 15.866 15.4331 19.366 12.8996 21.8995L14.3138 23.3137C17.2092 20.4183 19.0001 16.4183 19.0001 12Z"
					fill="currentColor"
				/>
				<path
					d="M15.0001 12C15.0001 8.68628 13.6569 5.68628 11.4854 3.51471L10.0712 4.92892C11.8808 6.73856 13.0001 9.23856 13.0001 12C13.0001 14.7614 11.8808 17.2614 10.0712 19.0711L11.4854 20.4853C13.6569 18.3137 15.0001 15.3137 15.0001 12Z"
					fill="currentColor"
				/>
				<path
					d="M8.65695 6.34313C10.1047 7.79085 11.0001 9.79085 11.0001 12C11.0001 14.2091 10.1047 16.2091 8.65695 17.6568L7.24273 16.2426C8.32852 15.1568 9.00009 13.6568 9.00009 12C9.00009 10.3431 8.32852 8.84313 7.24273 7.75735L8.65695 6.34313Z"
					fill="currentColor"
				/>
				<path
					d="M7.00009 12C7.00009 10.8954 6.55238 9.89542 5.82852 9.17156L4.41431 10.5858C4.77624 10.9477 5.00009 11.4477 5.00009 12C5.00009 12.5523 4.77624 13.0523 4.41431 13.4142L5.82852 14.8284C6.55238 14.1046 7.00009 13.1046 7.00009 12Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

PaypassIcon.propTypes = {
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
