import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FirstAidIcon = ({
	assistiveText = 'First Aid',
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
				d="M16 6H22C23.11 6 24 6.89 24 8V20C24 21.11 23.11 22 22 22H2C0.89 22 0 21.11 0 20L0.00999999 8C0.00999999 6.89 0.89 6 2 6H8V4C8 2.89 8.89 2 10 2H14C15.11 2 16 2.89 16 4V6ZM10 6H14V4H10V6ZM11 10H13V13H16V15H13V18H11V15H8V13H11V10Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M11 10H13V13H16V15H13V18H11V15H8V13H11V10Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H2C0.89 6 0.00999999 6.89 0.00999999 8L0 20C0 21.11 0.89 22 2 22H22C23.11 22 24 21.11 24 20V8C24 6.89 23.11 6 22 6ZM14 6H10V4H14V6ZM2 8H22V20H2V8Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

FirstAidIcon.propTypes = {
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
