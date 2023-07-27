import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const MoreHorizIcon = ({
	assistiveText = 'MoreHoriz',
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
				d="M4.5 9.5C3.125 9.5 2 10.625 2 12C2 13.375 3.125 14.5 4.5 14.5C5.875 14.5 7 13.375 7 12C7 10.625 5.875 9.5 4.5 9.5ZM19.5 9.5C18.125 9.5 17 10.625 17 12C17 13.375 18.125 14.5 19.5 14.5C20.875 14.5 22 13.375 22 12C22 10.625 20.875 9.5 19.5 9.5ZM9.5 12C9.5 10.625 10.625 9.5 12 9.5C13.375 9.5 14.5 10.625 14.5 12C14.5 13.375 13.375 14.5 12 14.5C10.625 14.5 9.5 13.375 9.5 12Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.5 9.5C3.125 9.5 2 10.625 2 12C2 13.375 3.125 14.5 4.5 14.5C5.875 14.5 7 13.375 7 12C7 10.625 5.875 9.5 4.5 9.5ZM19.5 9.5C18.125 9.5 17 10.625 17 12C17 13.375 18.125 14.5 19.5 14.5C20.875 14.5 22 13.375 22 12C22 10.625 20.875 9.5 19.5 9.5ZM9.5 12C9.5 10.625 10.625 9.5 12 9.5C13.375 9.5 14.5 10.625 14.5 12C14.5 13.375 13.375 14.5 12 14.5C10.625 14.5 9.5 13.375 9.5 12Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

MoreHorizIcon.propTypes = {
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
