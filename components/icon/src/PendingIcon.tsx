import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PendingIcon = ({
	assistiveText = 'Pending',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="PendingIcon"
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
			d="M24,12 L20,16.5 L16,12 L19,12 C19,7.30557963 15.1944204,3.5 10.5,3.5 C5.80557963,3.5 2,7.30557963 2,12 C2,16.6944204 5.80557963,20.5 10.5,20.5 C12.5701131,20.5 14.4673847,19.7599774 15.9417031,18.5300437 L17.2221038,20.0665245 C15.4008869,21.5858544 13.0571985,22.5 10.5,22.5 C4.70101013,22.5 0,17.7989899 0,12 C0,6.20101013 4.70101013,1.5 10.5,1.5 C16.2989899,1.5 21,6.20101013 21,12 L24,12 Z M10.5,14.5 C9.11928813,14.5 8,13.3807119 8,12 C8,10.6192881 9.11928813,9.5 10.5,9.5 C11.8807119,9.5 13,10.6192881 13,12 C13,13.3807119 11.8807119,14.5 10.5,14.5 Z"
		/>
	</Icon>
);

PendingIcon.propTypes = {
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
