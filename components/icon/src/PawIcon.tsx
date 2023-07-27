import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PawIcon = ({
	assistiveText = 'Paw',
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
					d="M11 3.99999C11 6.20913 9.76877 7.99999 8.24999 7.99999C6.73121 7.99999 5.49999 6.20913 5.49999 3.99999C5.49999 1.79086 6.73121 0 8.24999 0C9.76877 0 11 1.79086 11 3.99999Z"
					fill="currentColor"
				/>
				<path
					d="M18.5 3.99999C18.5 6.20913 17.2688 7.99999 15.75 7.99999C14.2312 7.99999 13 6.20913 13 3.99999C13 1.79086 14.2312 0 15.75 0C17.2688 0 18.5 1.79086 18.5 3.99999Z"
					fill="currentColor"
				/>
				<path
					d="M21.25 15C22.7688 15 24 13.2091 24 11C24 8.79085 22.7688 6.99999 21.25 6.99999C19.7312 6.99999 18.5 8.79085 18.5 11C18.5 13.2091 19.7312 15 21.25 15Z"
					fill="currentColor"
				/>
				<path
					d="M5.49999 11C5.49999 13.2091 4.26878 15 2.75 15C1.23122 15 0 13.2091 0 11C0 8.79085 1.23122 6.99999 2.75 6.99999C4.26878 6.99999 5.49999 8.79085 5.49999 11Z"
					fill="currentColor"
				/>
				<path
					d="M12 9.49999C13.933 9.49999 15.5 11.067 15.5 13C15.5 14.0851 16.442 14.7464 17.5083 15.4948C18.8985 16.4706 20.5 17.5947 20.5 20C20.5 22.2091 18.7091 24 16.5 24C15.0912 24 14.3175 23.5237 13.6421 23.1078C13.1189 22.7858 12.6547 22.5 12 22.5C11.3452 22.5 10.881 22.7858 10.3579 23.1078C9.68245 23.5237 8.90876 24 7.49999 24C5.29085 24 3.5 22.2091 3.5 20C3.5 17.5947 5.10144 16.4706 6.49169 15.4948C7.55796 14.7464 8.49999 14.0851 8.49999 13C8.49999 11.067 10.067 9.49999 12 9.49999Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M11 3.99999C11 6.20913 9.76877 7.99999 8.24999 7.99999C6.73121 7.99999 5.49999 6.20913 5.49999 3.99999C5.49999 1.79086 6.73121 0 8.24999 0C9.76877 0 11 1.79086 11 3.99999Z"
					fill="currentColor"
				/>
				<path
					d="M18.5 3.99999C18.5 6.20913 17.2688 7.99999 15.75 7.99999C14.2312 7.99999 13 6.20913 13 3.99999C13 1.79086 14.2312 0 15.75 0C17.2688 0 18.5 1.79086 18.5 3.99999Z"
					fill="currentColor"
				/>
				<path
					d="M21.25 15C22.7688 15 24 13.2091 24 11C24 8.79085 22.7688 6.99999 21.25 6.99999C19.7312 6.99999 18.5 8.79085 18.5 11C18.5 13.2091 19.7312 15 21.25 15Z"
					fill="currentColor"
				/>
				<path
					d="M5.49999 11C5.49999 13.2091 4.26878 15 2.75 15C1.23122 15 0 13.2091 0 11C0 8.79085 1.23122 6.99999 2.75 6.99999C4.26878 6.99999 5.49999 8.79085 5.49999 11Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.49999 24C8.90876 24 9.68245 23.5237 10.3579 23.1078C10.881 22.7858 11.3452 22.5 12 22.5C12.6547 22.5 13.1189 22.7858 13.6421 23.1078C14.3175 23.5237 15.0912 24 16.5 24C18.7091 24 20.5 22.2091 20.5 20C20.5 17.5947 18.8985 16.4706 17.5083 15.4948C16.442 14.7464 15.5 14.0851 15.5 13C15.5 11.067 13.933 9.49999 12 9.49999C10.067 9.49999 8.49999 11.067 8.49999 13C8.49999 14.0851 7.55796 14.7464 6.49169 15.4948C5.10144 16.4706 3.5 17.5947 3.5 20C3.5 22.2091 5.29085 24 7.49999 24ZM12 11.5C12.8284 11.5 13.5 12.1716 13.5 13C13.5 14.2049 14.0511 15.106 14.6433 15.7395C15.1571 16.2892 15.8092 16.7462 16.2896 17.0829L16.3592 17.1318C17.8159 18.1542 18.5 18.7372 18.5 20C18.5 21.1045 17.6045 22 16.5 22C16.0358 22 15.7292 21.9242 15.5013 21.8383C15.2494 21.7434 15.037 21.618 14.6906 21.4047L14.6174 21.3594C14.1219 21.0522 13.2314 20.5 12 20.5C10.7686 20.5 9.87805 21.0522 9.38261 21.3594L9.30935 21.4047C8.96294 21.618 8.75055 21.7434 8.4987 21.8383C8.27079 21.9242 7.96414 22 7.49999 22C6.39543 22 5.5 21.1045 5.5 20C5.5 18.7372 6.18407 18.1542 7.64072 17.1318L7.71037 17.0829C8.1907 16.7463 8.84283 16.2892 9.35672 15.7395C9.94887 15.106 10.5 14.2049 10.5 13C10.5 12.1716 11.1716 11.5 12 11.5Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

PawIcon.propTypes = {
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
