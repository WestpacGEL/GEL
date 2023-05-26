import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const SettingsIcon = ({
	assistiveText = 'Settings',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="SettingsIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M24,14.25225 L20.5515,14.826 C20.41275,15.2475 20.24325,15.65475 20.04525,16.0455 L22.0785,18.89175 L18.8925,22.077 L16.04175,20.04075 C15.6525,20.2365 15.2475,20.4045 14.82825,20.54325 L14.25225,24 L9.74775,24 L9.17175,20.544 C8.7525,20.40525 8.3475,20.2365 7.9575,20.0415 L5.1075,22.07775 L1.9215,18.89175 L3.954,16.04625 C3.7575,15.6555 3.58725,15.2475 3.44775,14.82675 L0,14.25225 L0,9.74775 L3.4395,9.17325 C3.57825,8.74875 3.74925,8.33775 3.948,7.94325 L1.9215,5.10675 L5.1075,1.9215 L7.93875,3.94425 C8.33475,3.744 8.748,3.57225 9.1755,3.43125 L9.74775,0 L14.25225,0 L14.82375,3.432 C15.25125,3.573 15.6645,3.74475 16.0605,3.945 L18.89175,1.92225 L22.07775,5.10825 L20.0505,7.944 C20.25,8.3385 20.42025,8.7495 20.55975,9.17475 L24,9.74775 L24,14.25225 Z M7,12 C7,14.7614286 9.23857143,17 12,17 C14.7614286,17 17,14.7614286 17,12 C17,9.23857143 14.7614286,7 12,7 C9.23857143,7 7,9.23857143 7,12 Z"
		/>
	</Icon>
);

SettingsIcon.propTypes = {
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
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string,
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
