import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const GlobalIcon = ({
	assistiveText = 'Global',
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
				d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM11 21.9506V19H10C8.89543 19 8 18.1046 8 17V15L2.35385 9.35385C2.12317 10.1967 2 11.084 2 12C2 17.1853 5.94668 21.4489 11 21.9506ZM15 2.4578C16.0927 2.80101 17.1047 3.32674 18 3.99927V7C18 7.55228 18.4477 8 19 8H21.1679C21.7031 9.22493 22 10.5778 22 12C22 14.7974 20.8514 17.3265 19 19.1414V19C19 17.8954 18.1046 17 17 17H15V13C15 12.4477 14.5523 12 14 12H8V10H10C10.5523 10 11 9.55229 11 9V6H13C14.1046 6 15 5.10457 15 4V2.4578Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM11 21.9506V19H10C8.89543 19 8 18.1046 8 17V15L2.35385 9.35385C2.12317 10.1967 2 11.084 2 12C2 17.1853 5.94668 21.4489 11 21.9506ZM15 2.4578C16.0927 2.80101 17.1047 3.32674 18 3.99927V7C18 7.55228 18.4477 8 19 8H21.1679C21.7031 9.22493 22 10.5778 22 12C22 14.7974 20.8514 17.3265 19 19.1414V19C19 17.8954 18.1046 17 17 17H15V13C15 12.4477 14.5523 12 14 12H8V10H10C10.5523 10 11 9.55229 11 9V6H13C14.1046 6 15 5.10457 15 4V2.4578Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

GlobalIcon.propTypes = {
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
