import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const InstagramIcon = ({
	assistiveText = 'Instagram',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="InstagramIcon"
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
			d="M6,0 L18,0 C21.3137085,-6.08718376e-16 24,2.6862915 24,6 L24,18 C24,21.3137085 21.3137085,24 18,24 L6,24 C2.6862915,24 4.05812251e-16,21.3137085 0,18 L0,6 C-4.05812251e-16,2.6862915 2.6862915,6.08718376e-16 6,0 Z M6,2 C3.790861,2 2,3.790861 2,6 L2,18 C2,20.209139 3.790861,22 6,22 L18,22 C20.209139,22 22,20.209139 22,18 L22,6 C22,3.790861 20.209139,2 18,2 L6,2 Z M5.838,12 C5.838,8.5965 8.5965,5.838 12,5.838 C15.4035,5.838 18.162,8.5965 18.162,12 C18.162,15.4035 15.4035,18.162 12,18.162 C8.5965,18.162 5.838,15.4035 5.838,12 Z M8.00025,12 C8.00025,14.20875 9.79125,15.99975 12,15.99975 C14.20875,15.99975 15.99975,14.20875 15.99975,12 C15.99975,9.79125 14.20875,8.00025 12,8.00025 C9.79125,8.00025 8.00025,9.79125 8.00025,12 Z M18.405675,7.03425 C17.610675,7.03425 16.965675,6.39 16.965675,5.59425 C16.965675,4.7985 17.610675,4.15425 18.405675,4.15425 C19.201425,4.15425 19.845675,4.7985 19.845675,5.59425 C19.845675,6.39 19.201425,7.03425 18.405675,7.03425 Z"
		/>
	</Icon>
);

InstagramIcon.propTypes = {
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
