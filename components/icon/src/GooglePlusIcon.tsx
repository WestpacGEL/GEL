import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const GooglePlusIcon = ({
	assistiveText = 'Google Plus',
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
				d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM9.09091 13.1091H11.9782C11.8618 13.8582 11.1055 15.3055 9.09091 15.3055C7.35273 15.3055 5.93455 13.8655 5.93455 12.0909C5.93455 10.3164 7.35273 8.87636 9.09091 8.87636C10.08 8.87636 10.7418 9.29818 11.12 9.66182L12.5018 8.33091C11.6145 7.50182 10.4655 7 9.09091 7C6.27636 7 4 9.27636 4 12.0909C4 14.9055 6.27636 17.1818 9.09091 17.1818C12.0291 17.1818 13.9782 15.1164 13.9782 12.2073C13.9782 11.8727 13.9418 11.6182 13.8982 11.3636L9.09091 11.36V13.1091ZM16.8002 11.3598H15.2002V12.9598H16.8002V14.5598H18.4002V12.9598H20.0002V11.3598H18.4002V9.75977H16.8002V11.3598Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M9.09091 13.1091H11.9782C11.8618 13.8582 11.1055 15.3055 9.09091 15.3055C7.35273 15.3055 5.93455 13.8655 5.93455 12.0909C5.93455 10.3164 7.35273 8.87636 9.09091 8.87636C10.08 8.87636 10.7418 9.29818 11.12 9.66182L12.5018 8.33091C11.6145 7.50182 10.4655 7 9.09091 7C6.27636 7 4 9.27636 4 12.0909C4 14.9055 6.27636 17.1818 9.09091 17.1818C12.0291 17.1818 13.9782 15.1164 13.9782 12.2073C13.9782 11.8727 13.9418 11.6182 13.8982 11.3636L9.09091 11.36V13.1091Z"
					fill="currentColor"
				/>
				<path
					d="M16.8 11.3602H15.2V12.9602H16.8V14.5602H18.4V12.9602H20V11.3602H18.4V9.76016H16.8V11.3602Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM2 2H22V22H2V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

GooglePlusIcon.propTypes = {
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
