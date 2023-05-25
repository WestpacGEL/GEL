import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const AlertIcon = ({
	assistiveText = 'Alert',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="AlertIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M1.0004095,24 C0.653409497,24 0.332409497,23.8196664 0.149409497,23.5241196 C-0.0325905031,23.2285729 -0.0495905031,22.8598908 0.105409497,22.5503181 L11.1054095,0.509542654 C11.4454095,-0.169713971 12.5554095,-0.169713971 12.8944095,0.509542654 L23.8944095,22.5503181 C24.0504095,22.8598908 24.0334095,23.2285729 23.8504095,23.5241196 C23.6684095,23.8196664 23.3474095,24 23.0004095,24 L1.0004095,24 Z M2.6184095,22.0001002 L21.3824095,22.0001002 L12.0004095,3.1975154 L2.6184095,22.0001002 Z M11,20 L11,18 L13,18 L13,20 L11,20 Z M11,16 L11,10 L13,10 L13,16 L11,16 Z"
		/>
	</Icon>
);

AlertIcon.propTypes = {
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
