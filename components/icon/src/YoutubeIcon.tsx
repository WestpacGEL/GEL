import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const YoutubeIcon = ({
	assistiveText = 'Youtube',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="YoutubeIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,0 L22,0 L22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,2 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M11.9960967,6 L12.0039033,6 C12.0039033,6 15.7822946,6 18.3011516,6.1725947 C18.6529753,6.21236514 19.4202207,6.2157392 20.1046778,6.89527757 C20.6443523,7.41302826 20.8202377,8.58875342 20.8202377,8.58875342 C20.8202377,8.58875342 21,9.96944419 21,11.3501015 L21,12.6445033 C21,14.0251607 20.8202377,15.4058347 20.8202377,15.4058347 C20.8202377,15.4058347 20.6443523,16.5815766 20.1046778,17.0993273 C19.4202207,17.7788824 18.6529753,17.7822397 18.3011516,17.8220269 C15.7822946,17.9946048 12.0000088,18 12.0000088,18 C12.0000088,18 7.32010996,17.9594946 5.88007331,17.8286079 C5.47945419,17.757402 4.58004364,17.7788824 3.89532223,17.0993273 C3.35564771,16.5815766 3.18000899,15.4058347 3.18000899,15.4058347 C3.18000899,15.4058347 3,14.0251607 3,12.6445033 L3,11.3501015 C3,9.96944419 3.18000899,8.58875342 3.18000899,8.58875342 C3.18000899,8.58875342 3.35564771,7.41302826 3.89532223,6.89527757 C4.58004364,6.2157392 5.34698942,6.21236514 5.6988484,6.1725947 C8.21779355,6 11.9960967,6 11.9960967,6 Z M10,9 L10,15 L15,12 L10,9 Z"
		/>
	</Icon>
);

YoutubeIcon.propTypes = {
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
	 * Control the size of the icon.
	 *
	 * Defaults to "medium" --> 24px
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall']),
		PropTypes.arrayOf(PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall'])),
	]),
};
