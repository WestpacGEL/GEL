import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const CloseIcon = ({
	assistiveText = 'Close',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="CloseIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="5.414 4 12 10.586 18.586 4 20 5.414 13.414 12 20 18.586 18.586 20 12 13.414 5.414 20 4 18.586 10.586 12 4 5.414"
		/>
	</Icon>
);

CloseIcon.propTypes = {
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
