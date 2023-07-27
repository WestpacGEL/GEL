import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MoneyBagIcon = ({
	assistiveText = 'MoneyBag',
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
					d="M7.7217 4.66577C9.07026 4.23343 10.5079 4 12 4C13.4921 4 14.9297 4.23343 16.2783 4.66577L19 0H5L7.7217 4.66577Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.241 24C21.955 24 22.627 23.6247 22.9233 22.9752C23.6147 21.4595 24 19.7747 24 18C24 11.3726 18.6274 6 12 6C5.37258 6 0 11.3726 0 18C0 19.7747 0.385266 21.4595 1.07673 22.9752C1.37304 23.6247 2.04504 24 2.75897 24H21.241ZM10.2842 17.3587H8.5625C8.60976 18.7985 9.64499 19.7385 11.3125 19.9318V21H12.6875V19.9259C14.3905 19.7122 15.4375 18.7129 15.4375 17.233C15.4375 15.916 14.692 15.1737 12.9821 14.8026L11.9468 14.5811C10.9646 14.3536 10.5505 14.0543 10.5505 13.5215C10.5505 12.881 11.1421 12.456 12.0237 12.456C12.9171 12.456 13.5501 12.899 13.6093 13.6293H15.2837C15.2576 12.2506 14.2824 11.2821 12.6875 11.0734V10H11.3125V11.0823C9.78559 11.3107 8.75183 12.2893 8.75183 13.6772C8.75183 14.9403 9.52689 15.7484 11.1007 16.0896L12.213 16.3351C13.2425 16.5685 13.6507 16.8798 13.6507 17.4425C13.6507 18.0771 12.9999 18.538 12.0473 18.538C11.1007 18.538 10.367 18.0711 10.2842 17.3587Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M14.2467 4.17931L15.5179 2H8.48207L9.75334 4.17931C9.05763 4.29153 8.37909 4.45502 7.7217 4.66577L5 0H19L16.2783 4.66577C15.6209 4.45502 14.9424 4.29153 14.2467 4.17931Z"
					fill="currentColor"
				/>
				<path
					d="M10.2842 17.3587H8.5625C8.60976 18.7985 9.64499 19.7385 11.3125 19.9318V21H12.6875V19.9259C14.3905 19.7122 15.4375 18.7129 15.4375 17.233C15.4375 15.916 14.692 15.1737 12.9821 14.8026L11.9468 14.5811C10.9646 14.3536 10.5505 14.0543 10.5505 13.5215C10.5505 12.881 11.1421 12.456 12.0237 12.456C12.9171 12.456 13.5501 12.899 13.6093 13.6293H15.2837C15.2576 12.2506 14.2824 11.2821 12.6875 11.0734V10H11.3125V11.0823C9.78559 11.3107 8.75183 12.2893 8.75183 13.6772C8.75183 14.9403 9.52689 15.7484 11.1007 16.0896L12.213 16.3351C13.2425 16.5685 13.6507 16.8798 13.6507 17.4425C13.6507 18.0771 12.9999 18.538 12.0473 18.538C11.1007 18.538 10.367 18.0711 10.2842 17.3587Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22.9233 22.9752C22.627 23.6247 21.955 24 21.241 24H2.75897C2.04504 24 1.37304 23.6247 1.07673 22.9752C0.385266 21.4595 0 19.7747 0 18C0 11.3726 5.37258 6 12 6C18.6274 6 24 11.3726 24 18C24 19.7747 23.6147 21.4595 22.9233 22.9752ZM21.1685 22C21.7027 20.7775 22 19.426 22 18C22 12.4772 17.5228 8 12 8C6.47715 8 2 12.4772 2 18C2 19.426 2.29727 20.7775 2.83153 22H21.1685Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

MoneyBagIcon.propTypes = {
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
