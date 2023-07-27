import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MoneyOutIcon = ({
	assistiveText = 'Money Out',
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21.8524 18.8524C19.6843 21.9638 16.0801 24 12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C16.0801 0 19.6843 2.03618 21.8524 5.14761L20.411 6.58899C18.6312 3.8281 15.5291 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C15.5291 22 18.6312 20.1719 20.411 17.411L21.8524 18.8524ZM18 6L24 12L18 18V6ZM6 14.7036C6.06874 16.7978 7.57453 18.1651 10 18.4462V20H12V18.4377C14.4771 18.1268 16 16.6734 16 14.5208C16 12.6052 14.9157 11.5255 12.4286 10.9856L10.9225 10.6634C9.49398 10.3326 8.89157 9.89719 8.89157 9.12224C8.89157 8.19056 9.75215 7.57234 11.0344 7.57234C12.3339 7.57234 13.2547 8.21668 13.3408 9.27897H15.7762C15.7383 7.27356 14.3199 5.86481 12 5.56127V4H10V5.57422C7.77904 5.90649 6.27539 7.3299 6.27539 9.34863C6.27539 11.1859 7.40275 12.3614 9.69191 12.8577L11.3098 13.2147C12.8072 13.5543 13.401 14.007 13.401 14.8255C13.401 15.7485 12.4544 16.419 11.0688 16.419C9.69191 16.419 8.62478 15.7398 8.5043 14.7036H6Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M21.6432 19.1432C19.4567 22.0902 15.9514 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C15.9514 0 19.4567 1.90982 21.6432 4.85675L20.2103 6.28966C18.4036 3.69674 15.3999 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C15.3999 22 18.4036 20.3033 20.2103 17.7103L21.6432 19.1432Z"
					fill="currentColor"
				/>
				<path
					d="M10 18.4462C7.57453 18.1651 6.06874 16.7978 6 14.7036H8.5043C8.62478 15.7398 9.69191 16.419 11.0688 16.419C12.4544 16.419 13.401 15.7485 13.401 14.8255C13.401 14.007 12.8072 13.5543 11.3098 13.2147L9.69191 12.8577C7.40275 12.3614 6.27539 11.1859 6.27539 9.34863C6.27539 7.3299 7.77904 5.90649 10 5.57422V4H12V5.56127C14.3199 5.86481 15.7383 7.27356 15.7762 9.27897H13.3408C13.2547 8.21668 12.3339 7.57234 11.0344 7.57234C9.75215 7.57234 8.89157 8.19056 8.89157 9.12224C8.89157 9.89719 9.49398 10.3326 10.9225 10.6634L12.4286 10.9856C14.9157 11.5255 16 12.6052 16 14.5208C16 16.6734 14.4771 18.1268 12 18.4377V20H10V18.4462Z"
					fill="currentColor"
				/>
				<path
					d="M16.8787 7.70712L21.1716 12L16.8787 16.2929L18.2929 17.7071L24 12L18.2929 6.29291L16.8787 7.70712Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

MoneyOutIcon.propTypes = {
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
