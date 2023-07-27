import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WheelchairIcon = ({
	assistiveText = 'Wheelchair',
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
					d="M12.25 6.5C13.4926 6.5 14.5 5.49264 14.5 4.25C14.5 3.00736 13.4926 2 12.25 2C11.0074 2 10 3.00736 10 4.25C10 5.49264 11.0074 6.5 12.25 6.5Z"
					fill="currentColor"
				/>
				<path
					d="M20 13.5V11.5C18.5 11.5 17.116 10.9227 16.0194 10.1324C15.3226 9.63025 15.0743 9.30906 14.7466 8.88511C14.5585 8.6418 14.3442 8.36464 14.004 8C13.071 7 12.5 7 12 7C11 7 10 8 10 9.5V16C10 17 10.99 17.9876 12.2 17.9876H18V23H20V17.5C20 16 19.5 15 17.5 15H14.004V11.5C15.423 12.677 18 13.5 20 13.5Z"
					fill="currentColor"
				/>
				<path
					d="M8 13.207C5.6915 13.86 4 15.9824 4 18.5C4 21.5376 6.46243 24 9.5 24C12.0176 24 14.14 22.3085 14.793 20H12.6632C12.1015 21.1825 10.8962 22 9.5 22C7.567 22 6 20.433 6 18.5C6 17.1038 6.81753 15.8985 8 15.3368V13.207Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M12.25 6.5C13.4926 6.5 14.5 5.49264 14.5 4.25C14.5 3.00736 13.4926 2 12.25 2C11.0074 2 10 3.00736 10 4.25C10 5.49264 11.0074 6.5 12.25 6.5Z"
					fill="currentColor"
				/>
				<path
					d="M20 13.5V11.5C18.5 11.5 17.116 10.9227 16.0194 10.1324C15.3226 9.63025 15.0743 9.30906 14.7466 8.88511C14.5585 8.6418 14.3442 8.36464 14.004 8C13.071 7 12.5 7 12 7C11 7 10 8 10 9.5V16C10 17 10.99 17.9876 12.2 17.9876H18V23H20V17.5C20 16 19.5 15 17.5 15H14.004V11.5C15.423 12.677 18 13.5 20 13.5Z"
					fill="currentColor"
				/>
				<path
					d="M8 13.207C5.6915 13.86 4 15.9824 4 18.5C4 21.5376 6.46243 24 9.5 24C12.0176 24 14.14 22.3085 14.793 20H12.6632C12.1015 21.1825 10.8962 22 9.5 22C7.567 22 6 20.433 6 18.5C6 17.1038 6.81753 15.8985 8 15.3368V13.207Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

WheelchairIcon.propTypes = {
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
