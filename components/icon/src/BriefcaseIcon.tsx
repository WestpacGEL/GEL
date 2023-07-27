import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BriefcaseIcon = ({
	assistiveText = 'Briefcase',
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
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V6H22C23.1046 6 24 6.89543 24 8V10H0V8C0 6.89543 0.895431 6 2 6H6V4ZM8 6H16V4H8V6Z"
					fill="currentColor"
				/>
				<path
					d="M14 12H24V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V12H10V14H14V12Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V6H22C23.1046 6 24 6.89543 24 8V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V8C0 6.89543 0.895431 6 2 6H6V4ZM22 8V10H2L2 8H22ZM2 20L2 12H10V14H14V12H22V20H2ZM8 6H16V4H8V6Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

BriefcaseIcon.propTypes = {
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
