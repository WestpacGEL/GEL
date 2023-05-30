import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const TwitterIcon = ({
	assistiveText = 'Twitter',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TwitterIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		color={color}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,0 L22,0 L22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,2 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M21.609,5.9355 C20.9025,6.255 20.142,6.47025 19.344,6.567 C20.15775,6.0705 20.7825,5.28375 21.078,4.34775 C20.316,4.80675 19.47225,5.13975 18.57375,5.3205 C17.8545,4.54125 16.83,4.05375 15.69525,4.05375 C13.51875,4.05375 11.7525,5.85075 11.7525,8.0655 C11.7525,8.3805 11.787,8.6865 11.8545,8.9805 C8.57775,8.81325 5.673,7.21575 3.7275,4.78875 C3.38775,5.38125 3.1935,6.0705 3.1935,6.8055 C3.1935,8.1975 3.80925,9.426 4.86675,10.14525 C4.221,10.12425 3.75,9.94425 3,9.64275 L3,9.69375 C3,11.637 4.44,13.2585 6.243,13.6275 C5.913,13.719 5.60475,13.76775 5.24475,13.76775 C4.99125,13.76775 4.76475,13.743 4.52325,13.6965 C5.02575,15.29025 6.492,16.4505 8.217,16.48275 C6.86775,17.559 5.17275,18.20025 3.3255,18.20025 C3.00675,18.20025 2.6955,18.18075 2.388,18.14325 C4.1325,19.28175 6.20625,19.947 8.433,19.947 C15.6855,19.947 19.65225,13.83225 19.65225,8.5305 C19.65225,8.35725 19.6485,8.18325 19.641,8.0115 C20.41125,7.446 21.081,6.7395 21.609,5.9355 L21.609,5.9355 Z"
		/>
	</Icon>
);

TwitterIcon.propTypes = {
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
