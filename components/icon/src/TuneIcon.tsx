import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const TuneIcon = ({
	assistiveText = 'Tune',
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
					d="M16 3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V7C14 7.55228 14.4477 8 15 8C15.5523 8 16 7.55228 16 7V6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4H16V3Z"
					fill="currentColor"
				/>
				<path
					d="M0 5C0 4.44772 0.447715 4 1 4H12V6H1C0.447715 6 0 5.55228 0 5Z"
					fill="currentColor"
				/>
				<path
					d="M0 12C0 11.4477 0.447715 11 1 11H6V10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V13H1C0.447715 13 0 12.5523 0 12Z"
					fill="currentColor"
				/>
				<path
					d="M1 18C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H10V18H1Z"
					fill="currentColor"
				/>
				<path
					d="M23 11H10V13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11Z"
					fill="currentColor"
				/>
				<path
					d="M14 18H23C23.5523 18 24 18.4477 24 19C24 19.5523 23.5523 20 23 20H14V21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21V17C12 16.4477 12.4477 16 13 16C13.5523 16 14 16.4477 14 17V18Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M16 3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V7C14 7.55228 14.4477 8 15 8C15.5523 8 16 7.55228 16 7V6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4H16V3Z"
					fill="currentColor"
				/>
				<path
					d="M0 5C0 4.44772 0.447715 4 1 4H12V6H1C0.447715 6 0 5.55228 0 5Z"
					fill="currentColor"
				/>
				<path
					d="M0 12C0 11.4477 0.447715 11 1 11H6V10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V13H1C0.447715 13 0 12.5523 0 12Z"
					fill="currentColor"
				/>
				<path
					d="M1 18C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H10V18H1Z"
					fill="currentColor"
				/>
				<path
					d="M23 11H10V13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11Z"
					fill="currentColor"
				/>
				<path
					d="M14 18H23C23.5523 18 24 18.4477 24 19C24 19.5523 23.5523 20 23 20H14V21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21V17C12 16.4477 12.4477 16 13 16C13.5523 16 14 16.4477 14 17V18Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

TuneIcon.propTypes = {
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
