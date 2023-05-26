import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const KeyholeIcon = ({
	assistiveText = 'Keyhole',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="KeyholeIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M13.5661739,11.5480575 L15.00015,18.0002 L9.00025,18.0002 L10.4334761,11.5480575 C9.5762404,11.0200663 9.00025,10.081082 9.00025,9.00035 C9.00025,7.34362761 10.3434776,6.0004 12.0002,6.0004 C13.6569224,6.0004 15.00015,7.34362761 15.00015,9.00035 C15.00015,10.081082 14.4234096,11.0200663 13.5661739,11.5480575 M12.0002,0.0005 C5.37256046,0.0005 0.0004,5.37266046 0.0004,12.0003 C0.0004,18.6271896 5.37256046,24.0001 12.0002,24.0001 C18.6270895,24.0001 24,18.6271896 24,12.0003 C24,5.37266046 18.6270895,0.0005 12.0002,0.0005"
		/>
	</Icon>
);

KeyholeIcon.propTypes = {
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
