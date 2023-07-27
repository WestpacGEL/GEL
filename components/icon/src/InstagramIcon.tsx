import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const InstagramIcon = ({
	assistiveText = 'Instagram',
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
					d="M12 8C9.79125 8 8.00025 9.791 8.00025 11.9998C8.00025 14.2085 9.79125 15.9995 12 15.9995C14.2087 15.9995 15.9998 14.2085 15.9998 11.9998C15.9998 9.791 14.2087 8 12 8Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6C0 2.68629 2.68629 0 6 0ZM12 18.1619C8.5965 18.1619 5.838 15.4034 5.838 11.9999C5.838 8.59639 8.5965 5.83789 12 5.83789C15.4035 5.83789 18.162 8.59639 18.162 11.9999C18.162 15.4034 15.4035 18.1619 12 18.1619ZM16.9657 5.5943C16.9657 6.39005 17.6107 7.0343 18.4057 7.0343C19.2014 7.0343 19.8457 6.39005 19.8457 5.5943C19.8457 4.79855 19.2014 4.1543 18.4057 4.1543C17.6107 4.1543 16.9657 4.79855 16.9657 5.5943Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12 18.162C8.5965 18.162 5.838 15.4035 5.838 12C5.838 8.5965 8.5965 5.838 12 5.838C15.4035 5.838 18.162 8.5965 18.162 12C18.162 15.4035 15.4035 18.162 12 18.162ZM8.00025 12C8.00025 9.79125 9.79125 8.00025 12 8.00025C14.2087 8.00025 15.9998 9.79125 15.9998 12C15.9998 14.2087 14.2087 15.9998 12 15.9998C9.79125 15.9998 8.00025 14.2087 8.00025 12Z"
					fill="currentColor"
				/>
				<path
					d="M16.9657 5.59425C16.9657 6.39 17.6107 7.03425 18.4057 7.03425C19.2014 7.03425 19.8457 6.39 19.8457 5.59425C19.8457 4.7985 19.2014 4.15425 18.4057 4.15425C17.6107 4.15425 16.9657 4.7985 16.9657 5.59425Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

InstagramIcon.propTypes = {
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
