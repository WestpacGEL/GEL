import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PrintIcon = ({
	assistiveText = 'Print',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="PrintIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M20,18 L20,24 L4,24 L4,18 L0,18 L0,9 C-2.02906125e-16,7.34314575 1.34314575,6 3,6 L21,6 C22.6568542,6 24,7.34314575 24,9 L24,18 L20,18 Z M6,14 L18,14 L18,22 L6,22 L6,14 Z M20.5,11 C19.6715729,11 19,10.3284271 19,9.5 C19,8.67157288 19.6715729,8 20.5,8 C21.3284271,8 22,8.67157288 22,9.5 C22,10.3284271 21.3284271,11 20.5,11 Z M4,0 L20,0 L20,4 L4,4 L4,0 Z"
		/>
	</Icon>
);

PrintIcon.propTypes = {
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
