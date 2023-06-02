import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const TelephoneIcon = ({
	assistiveText = 'Telephone',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TelephoneIcon"
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
			d="M5.90003732,0 C5.72003732,0 5.53703732,0.0585 5.38403732,0.177 L3.66878732,1.497 L8.42303732,7.719 L10.1367873,6.40125 L10.1367873,6.39975 C10.5275373,6.099 10.5642873,5.56275 10.2897873,5.2035 L10.2912873,5.199 L6.56828732,0.33 C6.40028732,0.1125 6.15278732,0 5.90003732,0 L5.90003732,0 Z M17.7860373,15.55875 C17.6052873,15.55875 17.4230373,15.6165 17.2692873,15.73425 L15.5577873,17.05575 L20.2055373,23.1405 L21.9170373,21.82425 L21.9185373,21.82125 C22.3092873,21.51825 22.3467873,20.98425 22.0715373,20.625 L22.0715373,20.62125 L18.4505373,15.88875 C18.2862873,15.67125 18.0372873,15.55875 17.7860373,15.55875 L17.7860373,15.55875 Z M7.95578732,8.07975 C7.07303732,8.75775 7.68203732,9.97575 8.39828732,11.15175 C9.41528732,12.828 10.6445373,14.3565 11.7335373,15.51825 C12.9950373,16.86225 13.8027873,17.64075 14.4905373,17.64075 C14.7012873,17.64075 14.9015373,17.568 15.0987873,17.41575 L19.7352873,23.48625 C19.4300373,23.7315 18.7257873,24 17.6997873,24 C15.3327873,24 11.2542873,22.56675 6.43553732,16.09275 C-0.124712677,7.287 2.27153732,2.7555 3.19703732,1.85925 L7.95578732,8.07975 Z"
		/>
	</Icon>
);

TelephoneIcon.propTypes = {
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
