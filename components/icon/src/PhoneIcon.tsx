import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PhoneIcon = ({
	assistiveText = 'Phone',
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
				d="M5 2C5 0.89543 5.89543 0 7 0H17C18.1046 0 19 0.895431 19 2V22C19 23.1046 18.1046 24 17 24H7C5.89543 24 5 23.1046 5 22V2ZM17 19H7V3H17V19ZM10.5 21.5C10.5 22.33 11.17 23 12 23C12.83 23 13.5 22.33 13.5 21.5C13.5 20.67 12.83 20 12 20C11.17 20 10.5 20.67 10.5 21.5Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 2C5 0.89543 5.89543 0 7 0H17C18.1046 0 19 0.895431 19 2V22C19 23.1046 18.1046 24 17 24H7C5.89543 24 5 23.1046 5 22V2ZM17 19H7V3H17V19ZM10.5 21.5C10.5 22.33 11.17 23 12 23C12.83 23 13.5 22.33 13.5 21.5C13.5 20.67 12.83 20 12 20C11.17 20 10.5 20.67 10.5 21.5Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

PhoneIcon.propTypes = {
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
