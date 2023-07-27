import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const TakeoutCoffeeIcon = ({
	assistiveText = 'TakeoutCoffee',
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
				<path d="M3 2H5L8 0H16L19 2H21L22 4H2L3 2Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3 5L5.01 22.23C5.13 23.23 5.97 24 7 24H17C18.03 24 18.87 23.23 18.99 22.23L21 5H3ZM12 20C10.34 20 9 18.66 9 17C9 15 12 11.6 12 11.6C12 11.6 15 15 15 17C15 18.66 13.66 20 12 20Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path d="M3 2H5L8 0H16L19 2H21L22 4H2L3 2Z" fill="currentColor" />
				<path
					d="M12 19.9996C10.34 19.9996 9 18.6596 9 16.9996C9 14.9996 12 11.5996 12 11.5996C12 11.5996 15 14.9996 15 16.9996C15 18.6596 13.66 19.9996 12 19.9996Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.99 22.23C18.87 23.23 18.03 24 17 24H7C5.97 24 5.13 23.23 5.01 22.23L3 5H21L18.99 22.23ZM6.99575 21.9917L5.24688 7H18.7531L17.0042 21.9917C17.0039 21.994 17.0032 21.9969 17.0032 21.9969L17.0025 21.9988L17.0018 22L17 22H7L6.99825 22L6.99754 21.9988L6.99678 21.9969C6.99678 21.9969 6.99608 21.994 6.99575 21.9917Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

TakeoutCoffeeIcon.propTypes = {
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
