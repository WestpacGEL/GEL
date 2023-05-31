import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const GlobalIcon = ({
	assistiveText = 'Global',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="GlobalIcon"
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
			d="M20.486,3.51475 C22.75175,5.7805 24.0005,8.7955 24.0005,11.9995 C24.0005,15.20575 22.75175,18.2185 20.486,20.4865 C18.22025,22.75225 15.206,23.9995 12.0005,23.9995 C8.79425,23.9995 5.78225,22.75225 3.51425,20.4865 C1.2485,18.2185 0.0005,15.20575 0.0005,11.9995 C0.0005,8.7955 1.2485,5.7805 3.51425,3.51475 C5.78225,1.249 8.79425,-0.0005 12.0005,-0.0005 C15.206,-0.0005 18.22025,1.249 20.486,3.51475 M19.42475,19.426 C20.90375,17.947 21.88475,16.1065 22.2905,14.10325 C21.974,14.56825 21.67325,14.7415 21.48575,13.69975 C21.2915,12.00325 19.7345,13.08775 18.75425,12.4855 C17.723,13.18 15.40625,11.13325 15.8,13.441 C16.40825,14.482 19.08125,12.049 17.7485,14.251 C16.898,15.7885 14.639,19.19425 14.9345,20.9605 C14.9705,23.53225 12.305,21.49675 11.38625,20.64325 C10.769,18.93475 11.17625,15.94675 9.5615,15.1105 C7.808,15.034 6.3035,14.87425 5.624,12.9145 C5.21525,11.51275 6.059,9.4255 7.562,9.10225 C9.76025,7.72075 10.547,10.72075 12.6095,10.77775 C13.2515,10.1065 14.996,9.89425 15.14075,9.14275 C13.787,8.9035 16.8575,8.0035 15.01025,7.49275 C13.9925,7.612 13.33625,8.5495 13.87775,9.343 C11.90375,9.80425 11.84075,6.4855 9.94175,7.5325 C9.8945,9.18625 6.84425,8.06875 8.88575,7.7335 C9.58925,7.4275 7.742,6.53725 8.7395,6.69925 C9.2285,6.673 10.87925,6.09325 10.4345,5.70625 C11.351,5.13475 12.125,7.07125 13.02425,5.66125 C13.67375,4.57675 12.75125,4.3765 11.939,4.927 C11.4785,4.4125 12.749,3.30325 13.868,2.82325 C14.24075,2.66275 14.5955,2.57575 14.86925,2.6005 C15.434,3.25225 16.475,3.3655 16.53125,2.52325 C15.13325,1.8535 13.59425,1.4995 12.0005,1.4995 C9.71225,1.4995 7.535,2.22775 5.73575,3.57175 C6.22025,3.7945 6.494,4.06975 6.02825,4.423 C5.6645,5.50225 4.19525,6.95125 2.90525,6.7465 C2.2355,7.90225 1.79375,9.175 1.604,10.5085 C2.687,10.86625 2.936,11.5735 2.70275,11.8105 C2.15375,12.2905 1.814,12.97075 1.63925,13.717 C1.99175,15.8695 3.00275,17.8525 4.5755,19.426 C6.56,21.40825 9.19475,22.4995 12.0005,22.4995 C14.80475,22.4995 17.44025,21.40825 19.42475,19.426"
		/>
	</Icon>
);

GlobalIcon.propTypes = {
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