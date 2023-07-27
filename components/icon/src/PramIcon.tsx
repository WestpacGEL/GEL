import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PramIcon = ({
	assistiveText = 'Pram',
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
					d="M1.41597 2H0V0H1.41597C2.80813 0 4.01736 0.957735 4.33622 2.31288L6.14496 10H24L23.3216 13.3922C23.1346 14.3271 22.3138 15 21.3604 15H7.32143L7.61061 16.229C7.7169 16.6808 8.11998 17 8.58403 17H21V19H8.58403C7.19187 19 5.98264 18.0423 5.66378 16.6871L2.38939 2.77096C2.2831 2.31925 1.88002 2 1.41597 2Z"
					fill="currentColor"
				/>
				<path
					d="M24 8C24 3.58172 20.4183 0 16 0V7C16 7.55228 16.4477 8 17 8H24Z"
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
					d="M1.41597 2H0V0H1.41597C2.80813 0 4.01736 0.957735 4.33622 2.31288L6.14496 10H24L23.3216 13.3922C23.1346 14.3271 22.3138 15 21.3604 15H7.32143L7.61061 16.229C7.7169 16.6808 8.11998 17 8.58403 17H21V19H8.58403C7.19187 19 5.98264 18.0423 5.66378 16.6871L2.38939 2.77096C2.2831 2.31925 1.88002 2 1.41597 2ZM6.85084 13L6.61554 12H21.5604L21.3604 13H6.85084Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18 0.252035C20.8112 0.975592 23.0244 3.18879 23.748 6C23.9125 6.63924 24 7.3094 24 8H17C16.4477 8 16 7.55228 16 7V0C16.6906 0 17.3608 0.087506 18 0.252035ZM18 2.34141C19.7048 2.94398 21.056 4.29517 21.6586 6H18V2.34141Z"
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

PramIcon.propTypes = {
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
