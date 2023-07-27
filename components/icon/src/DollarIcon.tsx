import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const DollarIcon = ({
	assistiveText = 'Dollar',
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
				d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM7 14.7036C7.06874 16.7978 8.57453 18.1651 11 18.4462V20H13V18.4377C15.4771 18.1268 17 16.6734 17 14.5208C17 12.6052 15.9157 11.5255 13.4286 10.9856L11.9225 10.6634C10.494 10.3326 9.89157 9.89719 9.89157 9.12224C9.89157 8.19056 10.7522 7.57234 12.0344 7.57234C13.3339 7.57234 14.2547 8.21668 14.3408 9.27897H16.7762C16.7383 7.27356 15.3199 5.86481 13 5.56127V4H11V5.57422C8.77904 5.90649 7.27539 7.3299 7.27539 9.34863C7.27539 11.1859 8.40275 12.3614 10.6919 12.8577L12.3098 13.2147C13.8072 13.5543 14.401 14.007 14.401 14.8255C14.401 15.7485 13.4544 16.419 12.0688 16.419C10.6919 16.419 9.62478 15.7398 9.5043 14.7036H7Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24 12C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12ZM12 2C6.47714 2 2 6.47714 2 12C2 17.5229 6.47714 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47714 17.5229 2 12 2ZM7 14.7036C7.06874 16.7978 8.57453 18.1651 11 18.4462V20H13V18.4377C15.4771 18.1268 17 16.6734 17 14.5208C17 12.6052 15.9157 11.5255 13.4286 10.9856L11.9225 10.6634C10.494 10.3326 9.89157 9.89719 9.89157 9.12224C9.89157 8.19056 10.7522 7.57234 12.0344 7.57234C13.3339 7.57234 14.2547 8.21668 14.3408 9.27897H16.7762C16.7383 7.27356 15.3199 5.86481 13 5.56127V4H11V5.57422C8.77904 5.90649 7.27539 7.3299 7.27539 9.34863C7.27539 11.1859 8.40275 12.3614 10.6919 12.8577L12.3098 13.2147C13.8072 13.5543 14.401 14.007 14.401 14.8255C14.401 15.7485 13.4544 16.419 12.0688 16.419C10.6919 16.419 9.62478 15.7398 9.5043 14.7036H7Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

DollarIcon.propTypes = {
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
