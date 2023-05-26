import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const DropboxIcon = ({
	assistiveText = 'Dropbox',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="DropboxIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M7.05975881,19.0540557 L4.93952869,17.6598188 L4.93952869,19.2228042 L12.0142124,23.4992641 L19.088896,19.2228042 L19.088896,17.6598188 L16.9686659,19.0540557 L12.0142124,14.9103446 L7.05975881,19.0540557 Z M16.9403162,1 L12.0001125,5.15496105 L19.1182958,9.58591951 L24,5.64620644 L16.9403162,1 Z M12.0000375,14.016578 L16.9402412,18.172289 L23.999925,13.5268326 L19.1182208,9.58561951 L12.0000375,14.016578 Z M0,13.5265326 L4.88170423,9.58606951 L11.9998875,14.016278 L7.05968382,18.172739 L0,13.5265326 Z M7.05975881,1 L11.9999625,5.15496105 L4.88177923,9.58591951 L7.49992969e-05,5.64620644 L7.05975881,1 Z"
		/>
	</Icon>
);

DropboxIcon.propTypes = {
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
