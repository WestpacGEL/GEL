import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BarbellIcon = ({
	assistiveText = 'Barbell',
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
					d="M11.2942 22.5874C11.684 22.9772 12.3161 22.9772 12.7059 22.5874C13.0957 22.1975 13.0957 21.5655 12.7059 21.1757L2.82395 11.2937C2.43412 10.9039 1.80208 10.9039 1.41225 11.2937C1.02241 11.6835 1.02241 12.3156 1.41225 12.7054L4.94058 16.2337C4.55098 16.6247 4.55139 17.2574 4.94182 17.6479L6.34987 19.0559C6.7403 19.4464 7.37305 19.4468 7.76399 19.0572L11.2942 22.5874Z"
					fill="currentColor"
				/>
				<path
					d="M22.5886 12.7062C22.1988 13.096 21.5667 13.096 21.1769 12.7062L11.2949 2.8242C10.9051 2.43437 10.9051 1.80232 11.2949 1.41249C11.6848 1.02266 12.3168 1.02266 12.7066 1.41249L16.2342 4.94006C16.6241 4.55059 17.2558 4.55071 17.6455 4.94042L19.0572 6.35213C19.447 6.74184 19.4471 7.37361 19.0576 7.76347L22.5886 11.2944C22.9784 11.6843 22.9784 12.3163 22.5886 12.7062Z"
					fill="currentColor"
				/>
				<path
					d="M18.3513 12.7052C17.9615 13.095 17.3294 13.095 16.9396 12.7052L14.8225 10.5882L10.5884 14.8223L12.7059 16.9398C13.0957 17.3296 13.0957 17.9617 12.7059 18.3515C12.3161 18.7413 11.684 18.7413 11.2942 18.3515L5.64737 12.7047C5.25754 12.3149 5.25754 11.6828 5.64737 11.293C6.0372 10.9031 6.66925 10.9031 7.05908 11.293L9.17669 13.4106L13.4108 9.17645L11.2928 7.05839C10.9029 6.66855 10.9029 6.03651 11.2928 5.64668C11.6826 5.25684 12.3146 5.25684 12.7045 5.64668L18.3513 11.2935C18.7411 11.6833 18.7411 12.3154 18.3513 12.7052Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M11.2942 22.5874C11.684 22.9772 12.3161 22.9772 12.7059 22.5874C13.0957 22.1975 13.0957 21.5655 12.7059 21.1757L2.82395 11.2937C2.43412 10.9039 1.80208 10.9039 1.41225 11.2937C1.02241 11.6835 1.02241 12.3156 1.41225 12.7054L4.94058 16.2337C4.55098 16.6247 4.55139 17.2574 4.94182 17.6479L6.34987 19.0559C6.7403 19.4464 7.37305 19.4468 7.76399 19.0572L11.2942 22.5874Z"
					fill="currentColor"
				/>
				<path
					d="M22.5886 12.7062C22.1988 13.096 21.5667 13.096 21.1769 12.7062L11.2949 2.8242C10.9051 2.43437 10.9051 1.80232 11.2949 1.41249C11.6848 1.02266 12.3168 1.02266 12.7066 1.41249L16.2342 4.94006C16.6241 4.55059 17.2558 4.55071 17.6455 4.94042L19.0572 6.35213C19.447 6.74184 19.4471 7.37361 19.0576 7.76347L22.5886 11.2944C22.9784 11.6843 22.9784 12.3163 22.5886 12.7062Z"
					fill="currentColor"
				/>
				<path
					d="M18.3513 12.7052C17.9615 13.095 17.3294 13.095 16.9396 12.7052L14.8225 10.5882L10.5884 14.8223L12.7059 16.9398C13.0957 17.3296 13.0957 17.9617 12.7059 18.3515C12.3161 18.7413 11.684 18.7413 11.2942 18.3515L5.64737 12.7047C5.25754 12.3149 5.25754 11.6828 5.64737 11.293C6.0372 10.9031 6.66925 10.9031 7.05908 11.293L9.17669 13.4106L13.4108 9.17645L11.2928 7.05839C10.9029 6.66855 10.9029 6.03651 11.2928 5.64668C11.6826 5.25684 12.3146 5.25684 12.7045 5.64668L18.3513 11.2935C18.7411 11.6833 18.7411 12.3154 18.3513 12.7052Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

BarbellIcon.propTypes = {
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
