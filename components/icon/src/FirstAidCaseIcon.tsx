import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FirstAidCaseIcon = ({
	assistiveText = 'First Aid Case',
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
				d="M16 4H22C23.11 4 24 4.89 24 6V22C24 23.11 23.11 24 22 24H2C0.89 24 0 23.11 0 22L0.00999999 6C0.00999999 4.89 0.89 4 2 4H8V2C8 0.89 8.89 0 10 0H14C15.11 0 16 0.89 16 2V4ZM10 4H14V2H10V4ZM11 10H13V13H16V15H13V18H11V15H8V13H11V10Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M11 10H13V13H16V15H13V18H11V15H8V13H11V10Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22 4H16V2C16 0.89 15.11 0 14 0H10C8.89 0 8 0.89 8 2V4H2C0.89 4 0.00999999 4.89 0.00999999 6L0 22C0 23.11 0.89 24 2 24H22C23.11 24 24 23.11 24 22V6C24 4.89 23.11 4 22 4ZM14 4H10V2H14V4ZM2 6H22V22H2V6Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

FirstAidCaseIcon.propTypes = {
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
