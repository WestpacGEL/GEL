import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const MoreVerticalIcon = ({
	assistiveText = 'More Vertical',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="MoreVerticalIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12,7 C13.375,7 14.5,5.875 14.5,4.5 C14.5,3.125 13.375,2 12,2 C10.625,2 9.5,3.125 9.5,4.5 C9.5,5.875 10.625,7 12,7 Z M12,9.5 C10.625,9.5 9.5,10.625 9.5,12 C9.5,13.375 10.625,14.5 12,14.5 C13.375,14.5 14.5,13.375 14.5,12 C14.5,10.625 13.375,9.5 12,9.5 Z M12,17 C10.625,17 9.5,18.125 9.5,19.5 C9.5,20.875 10.625,22 12,22 C13.375,22 14.5,20.875 14.5,19.5 C14.5,18.125 13.375,17 12,17 Z"
		/>
	</Icon>
);

MoreVerticalIcon.propTypes = {
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
