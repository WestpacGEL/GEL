import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const IdCardIcon = ({
	assistiveText = 'Id Card',
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
				d="M2 2H22C23.1046 2 24 2.89543 24 4V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2ZM11.5 10.5C11.5 9.11667 10.3833 8 9 8C7.61667 8 6.5 9.11667 6.5 10.5C6.5 11.8833 7.61667 13 9 13C10.3833 13 11.5 11.8833 11.5 10.5ZM4 17.0854V18H14V17.0854C14 15.2561 10.6667 14.25 9 14.25C7.33333 14.25 4 15.2561 4 17.0854ZM14 8H20V10H14V8ZM15 12H20V14H15V12ZM20 16H16V18H20V16Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M11.5 10.5C11.5 9.11667 10.3833 8 9 8C7.61667 8 6.5 9.11667 6.5 10.5C6.5 11.8833 7.61667 13 9 13C10.3833 13 11.5 11.8833 11.5 10.5Z"
					fill="currentColor"
				/>
				<path
					d="M4 17.0854V18H14V17.0854C14 15.2561 10.6667 14.25 9 14.25C7.33333 14.25 4 15.2561 4 17.0854Z"
					fill="currentColor"
				/>
				<path d="M14 8H20V10H14V8Z" fill="currentColor" />
				<path d="M15 12H20V14H15V12Z" fill="currentColor" />
				<path d="M20 16H16V18H20V16Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 2H22C23.1046 2 24 2.89543 24 4V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2ZM2 4H22V20H2V4Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

IdCardIcon.propTypes = {
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
