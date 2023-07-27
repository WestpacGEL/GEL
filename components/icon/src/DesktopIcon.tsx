import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const DesktopIcon = ({
	assistiveText = 'Desktop',
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
				d="M18 23.5L15.5 22L14.8333 20H22C23.1046 20 24 19.1046 24 18V2C24 0.89543 23.1046 0 22 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H9.16667L8.5 22L6 23.5V24H18V23.5ZM22 16H2V2H22V16Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18 23.5L15.5 22L14.8333 20H22C23.1046 20 24 19.1046 24 18V2C24 0.89543 23.1046 0 22 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H9.16667L8.5 22L6 23.5V24H18V23.5ZM22 16H2V2H22V16Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

DesktopIcon.propTypes = {
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
