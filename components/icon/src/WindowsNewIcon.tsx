import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const WindowsNewIcon = ({
	assistiveText = 'Windows New',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="WindowsNewIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M23.9968,0 L11.2,1.8616 L11.2,11.1992 L23.9968,11.1992 L23.9968,0 Z M0,3.3984 L0.0088,11.1992 L9.6,11.1992 L9.6,2.0944 L0,3.3984 Z M11.2,12.7992 L11.2,22.2 L23.9968,24 L24,12.7992 L11.2,12.7992 Z M0.0072,12.7992 L0.008,20.6816 L9.6,21.996 L9.6,12.7992 L0.0072,12.7992 Z"
		/>
	</Icon>
);

WindowsNewIcon.propTypes = {
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
