import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PhoneIcon = ({
	assistiveText = 'Phone',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="PhoneIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,22 C19,23.1045695 18.1045695,24 17,24 L7,24 C5.8954305,24 5,23.1045695 5,22 L5,4 L5,4 C5,2.8954305 5.8954305,2 7,2 L7,2 Z M17,19 L17,5 L7,5 L7,19 L17,19 Z M12,23 C12.83,23 13.5,22.33 13.5,21.5 C13.5,20.67 12.83,20 12,20 C11.17,20 10.5,20.67 10.5,21.5 C10.5,22.33 11.17,23 12,23 Z"
		/>
	</Icon>
);

PhoneIcon.propTypes = {
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
