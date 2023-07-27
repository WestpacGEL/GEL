import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const UmbrellaIcon = ({
	assistiveText = 'Umbrella',
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
				d="M9 22C7.89543 22 7 21.1046 7 20H5C5 22.2091 6.79086 24 9 24C11.2091 24 13 22.2091 13 20V12H23.9179C23.438 6.18358 18.81 1.54336 12.999 1.04445C13 0.447715 12.5523 0 12 0C11.4477 0 11 0.447715 11 1C5.15135 1.49984 0.482097 6.15629 0 12H11V20C11 21.1046 10.1046 22 9 22Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13 1C13 1.01489 12.9997 1.02971 12.999 1.04445C18.1262 1.48463 22.3322 5.14887 23.5809 10C23.7475 10.6472 23.8615 11.3154 23.918 12H13V20C13 22.2091 11.2091 24 9 24C6.79086 24 5 22.2091 5 20H7C7 21.1046 7.89543 22 9 22C10.1046 22 11 21.1046 11 20V12H0C0.0564953 11.3154 0.170453 10.6472 0.33704 10C1.59242 5.1231 5.83656 1.44575 11.0007 1.03771C11.0002 1.0252 11 1.01262 11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1ZM21.5015 10C20.2275 5.94362 16.4363 3 11.959 3C7.48169 3 3.69045 5.94362 2.41643 10H21.5015Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

UmbrellaIcon.propTypes = {
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
