import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MoneyInIcon = ({
	assistiveText = 'MoneyIn',
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
					d="M2.14761 18.8524C4.31568 21.9638 7.91995 24 12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C7.91995 0 4.31568 2.03618 2.14761 5.14761L3.58899 6.58899C5.3688 3.8281 8.47091 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.47091 22 5.3688 20.1719 3.58899 17.411L2.14761 18.8524Z"
					fill="currentColor"
				/>
				<path d="M0 6L6 12L0 18V6Z" fill="currentColor" />
				<path
					d="M7 14.7036C7.06874 16.7978 8.57453 18.1651 11 18.4462V20H13V18.4377C15.4771 18.1268 17 16.6734 17 14.5208C17 12.6052 15.9157 11.5255 13.4286 10.9856L11.9225 10.6634C10.494 10.3326 9.89157 9.89719 9.89157 9.12224C9.89157 8.19056 10.7522 7.57234 12.0344 7.57234C13.3339 7.57234 14.2547 8.21668 14.3408 9.27897H16.7762C16.7383 7.27356 15.3199 5.86481 13 5.56127V4H11V5.57422C8.77904 5.90649 7.27539 7.3299 7.27539 9.34863C7.27539 11.1859 8.40275 12.3614 10.6919 12.8577L12.3098 13.2147C13.8072 13.5543 14.401 14.007 14.401 14.8255C14.401 15.7485 13.4544 16.419 12.0688 16.419C10.6919 16.419 9.62478 15.7398 9.5043 14.7036H7Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M24 12C24 18.6274 18.6274 24 12 24C8.16386 24 4.74813 22.1999 2.5514 19.3984L3.9781 17.9717C5.80116 20.4167 8.71569 22 12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C8.71569 2 5.80116 3.58333 3.97809 6.02833L2.55139 4.60163C4.74812 1.80007 8.16386 0 12 0C18.6274 0 24 5.37258 24 12Z"
					fill="currentColor"
				/>
				<path
					d="M11.0001 18.4462C8.57459 18.1651 7.0688 16.7978 7.00006 14.7036H9.50436C9.62485 15.7398 10.692 16.419 12.0689 16.419C13.4544 16.419 14.4011 15.7485 14.4011 14.8255C14.4011 14.007 13.8073 13.5543 12.3099 13.2147L10.692 12.8577C8.40281 12.3614 7.27545 11.1859 7.27545 9.34863C7.27545 7.3299 8.7791 5.90649 11.0001 5.57422V4H13.0001V5.56127C15.3199 5.86481 16.7383 7.27356 16.7763 9.27897H14.3409C14.2548 8.21668 13.334 7.57234 12.0345 7.57234C10.7522 7.57234 9.89163 8.19056 9.89163 9.12224C9.89163 9.89719 10.494 10.3326 11.9226 10.6634L13.4286 10.9856C15.9157 11.5255 17.0001 12.6052 17.0001 14.5208C17.0001 16.6734 15.4772 18.1268 13.0001 18.4377V20H11.0001V18.4462Z"
					fill="currentColor"
				/>
				<path
					d="M0 7.70712L4.29289 12L0 16.2929L1.41421 17.7071L7.12132 12L1.41421 6.29291L0 7.70712Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

MoneyInIcon.propTypes = {
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
