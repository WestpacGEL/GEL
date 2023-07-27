import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ContactIcon = ({
	assistiveText = 'Contact',
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
				d="M20 2H18V0H16V2H8V0H6V2H4C2.89543 2 2 2.89543 2 4V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V4C22 2.89543 21.1046 2 20 2ZM6 18.46C6 15.96 9.97 14.88 12 14.88C14.03 14.88 18 15.96 18 18.47V20H6V18.46ZM15 11C15 12.65 13.65 14 12 14C10.35 14 9 12.65 9 11C9 9.35 10.35 8 12 8C13.65 8 15 9.35 15 11Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6 18.46C6 15.96 9.97 14.88 12 14.88C14.03 14.88 18 15.96 18 18.47V20H6V18.46Z"
					fill="currentColor"
				/>
				<path
					d="M15 11C15 12.65 13.65 14 12 14C10.35 14 9 12.65 9 11C9 9.35 10.35 8 12 8C13.65 8 15 9.35 15 11Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18 2H20C21.1046 2 22 2.89543 22 4V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V4C2 2.89543 2.89543 2 4 2H6V0H8V2H16V0H18V2ZM4 4H20V22H4V4Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ContactIcon.propTypes = {
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
