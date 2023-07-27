import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BurgerIcon = ({
	assistiveText = 'Burger',
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
					d="M23.9999 8C23.9999 3 19 1 12 1C4.99992 1 0 3 0 8V10H23.9999V8Z"
					fill="currentColor"
				/>
				<path
					d="M0 21V17H24V21C24 22.1046 23.1046 23 22 23H2C0.89543 23 0 22.1046 0 21Z"
					fill="currentColor"
				/>
				<path
					d="M0 15.0498C1.01586 15.0498 1.74034 14.5574 2.23561 14.2207C2.28137 14.1896 2.3253 14.1598 2.3672 14.1319C2.87989 13.7901 3.30058 13.5498 4 13.5498C4.69942 13.5498 5.12011 13.7901 5.6328 14.1319C5.67465 14.1598 5.71841 14.1895 5.76412 14.2206C6.25939 14.5572 6.98414 15.0498 8 15.0498C9.01586 15.0498 9.74034 14.5574 10.2356 14.2207C10.2814 14.1896 10.3253 14.1598 10.3672 14.1319C10.8799 13.7901 11.3006 13.5498 12 13.5498C12.6994 13.5498 13.1201 13.7901 13.6328 14.1319C13.6747 14.1598 13.7185 14.1896 13.7643 14.2207C14.2596 14.5573 14.9841 15.0498 16 15.0498C17.0159 15.0498 17.7403 14.5574 18.2356 14.2207C18.2814 14.1896 18.3253 14.1598 18.3672 14.1319C18.8799 13.7901 19.3006 13.5498 20 13.5498C20.6994 13.5498 21.1201 13.7901 21.6328 14.1319C21.6746 14.1597 21.7183 14.1895 21.764 14.2205C22.2593 14.5571 22.9841 15.0498 24 15.0498V13.0498C23.6152 13.0498 23.3784 12.892 22.7679 12.4849L22.7422 12.4678C22.1299 12.0596 21.3006 11.5498 20 11.5498C18.6994 11.5498 17.8701 12.0596 17.2578 12.4678L17.2321 12.4849C16.6216 12.892 16.3848 13.0498 16 13.0498C15.6152 13.0498 15.3784 12.892 14.7679 12.4849L14.7422 12.4678C14.1299 12.0596 13.3006 11.5498 12 11.5498C10.6994 11.5498 9.87011 12.0596 9.2578 12.4678L9.23209 12.4849C8.62158 12.892 8.38483 13.0498 8 13.0498C7.61517 13.0498 7.37842 12.892 6.76792 12.4849L6.7422 12.4678C6.12989 12.0596 5.30058 11.5498 4 11.5498C2.69942 11.5498 1.87011 12.0596 1.2578 12.4678L1.23208 12.4849C0.621577 12.892 0.384828 13.0498 0 13.0498V15.0498Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 10V8C0 3 4.99994 1 12 1C19.0001 1 24 3 24 8V10H0ZM19.6892 4.39257C17.9854 3.49054 15.3676 3 12 3C8.63244 3 6.01459 3.49054 4.31076 4.39257C2.7449 5.22156 2.00001 6.34307 2.00001 8H22C22 6.34307 21.2551 5.22156 19.6892 4.39257Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 17V21C0 22.1046 0.89543 23 2 23H22C23.1046 23 24 22.1046 24 21V17H0ZM2 19L2 21H22V19H2Z"
					fill="currentColor"
				/>
				<path
					d="M0 15.0498C1.01586 15.0498 1.74034 14.5574 2.23561 14.2207C2.28142 14.1896 2.32527 14.1598 2.3672 14.1319C2.87989 13.7901 3.30058 13.5498 4 13.5498C4.69942 13.5498 5.12011 13.7901 5.6328 14.1319C5.67473 14.1598 5.71858 14.1896 5.76439 14.2207C6.25966 14.5574 6.98414 15.0498 8 15.0498C9.01586 15.0498 9.74034 14.5574 10.2356 14.2207C10.2814 14.1896 10.3253 14.1598 10.3672 14.1319C10.8799 13.7901 11.3006 13.5498 12 13.5498C12.6994 13.5498 13.1201 13.7901 13.6328 14.1319C13.6747 14.1598 13.7186 14.1896 13.7644 14.2207C14.2597 14.5574 14.9841 15.0498 16 15.0498C17.0159 15.0498 17.7403 14.5574 18.2356 14.2207C18.2814 14.1896 18.3253 14.1598 18.3672 14.1319C18.8799 13.7901 19.3006 13.5498 20 13.5498C20.6994 13.5498 21.1201 13.7901 21.6328 14.1319C21.6747 14.1598 21.7185 14.1895 21.7642 14.2206C22.2595 14.5572 22.9841 15.0498 24 15.0498V13.0498C23.6152 13.0498 23.3784 12.892 22.7679 12.4849L22.7422 12.4678C22.1299 12.0596 21.3006 11.5498 20 11.5498C18.6994 11.5498 17.8701 12.0596 17.2578 12.4678L17.2321 12.4849C16.6216 12.892 16.3848 13.0498 16 13.0498C15.6152 13.0498 15.3784 12.892 14.7679 12.4849L14.7422 12.4678C14.1299 12.0596 13.3006 11.5498 12 11.5498C10.6994 11.5498 9.87011 12.0596 9.2578 12.4678L9.23209 12.4849C8.62158 12.892 8.38483 13.0498 8 13.0498C7.61517 13.0498 7.37842 12.892 6.76792 12.4849L6.7422 12.4678C6.12989 12.0596 5.30058 11.5498 4 11.5498C2.69942 11.5498 1.87011 12.0596 1.2578 12.4678L1.23208 12.4849C0.621577 12.892 0.384828 13.0498 0 13.0498V15.0498Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

BurgerIcon.propTypes = {
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
