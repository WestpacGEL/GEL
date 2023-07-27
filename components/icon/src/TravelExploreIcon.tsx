import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const TravelExploreIcon = ({
	assistiveText = 'Travel Explore',
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
					d="M12 0C18.6274 0 24 5.37258 24 12H22C22 10.5778 21.7031 9.22493 21.1679 8H19C18.4477 8 18 7.55228 18 7V3.99927C17.1047 3.32674 16.0927 2.80101 15 2.4578V4C15 5.10457 14.1046 6 13 6H11V9C11 9.55229 10.5523 10 10 10H8V12H10V15H8L2.35385 9.35385C2.12317 10.1967 2 11.084 2 12C2 17.5228 6.47715 22 12 22V24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M19.5355 12.4645C21.246 14.1749 21.4581 16.8163 20.1719 18.7577L23.7782 22.364L22.364 23.7782L18.7577 20.1719C16.8163 21.4581 14.1749 21.246 12.4645 19.5355C10.5118 17.5829 10.5118 14.4171 12.4645 12.4645C14.4171 10.5118 17.5829 10.5118 19.5355 12.4645ZM18.1213 18.1213C19.2929 16.9497 19.2929 15.0503 18.1213 13.8787C16.9497 12.7071 15.0503 12.7071 13.8787 13.8787C12.7071 15.0503 12.7071 16.9497 13.8787 18.1213C15.0503 19.2929 16.9497 19.2929 18.1213 18.1213Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M12 0C18.6274 0 24 5.37258 24 12H22C22 10.5778 21.7031 9.22493 21.1679 8H19C18.4477 8 18 7.55228 18 7V3.99927C17.1047 3.32674 16.0927 2.80101 15 2.4578V4C15 5.10457 14.1046 6 13 6H11V9C11 9.55229 10.5523 10 10 10H8V12H10V15H8L2.35385 9.35385C2.12317 10.1967 2 11.084 2 12C2 17.5228 6.47715 22 12 22V24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M19.5355 12.4645C21.246 14.1749 21.4581 16.8163 20.1719 18.7577L23.7782 22.364L22.364 23.7782L18.7577 20.1719C16.8163 21.4581 14.1749 21.246 12.4645 19.5355C10.5118 17.5829 10.5118 14.4171 12.4645 12.4645C14.4171 10.5118 17.5829 10.5118 19.5355 12.4645ZM18.1213 18.1213C19.2929 16.9497 19.2929 15.0503 18.1213 13.8787C16.9497 12.7071 15.0503 12.7071 13.8787 13.8787C12.7071 15.0503 12.7071 16.9497 13.8787 18.1213C15.0503 19.2929 16.9497 19.2929 18.1213 18.1213Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

TravelExploreIcon.propTypes = {
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
