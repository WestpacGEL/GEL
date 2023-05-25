import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const EditIcon = ({
	assistiveText = 'Edit',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="EditIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M0,19.0006943 L0,24 L4.99930565,24 L19.7439245,9.2553812 L14.7446188,4.25607555 L0,19.0006943 Z M23.6100542,5.38925149 C24.1299819,4.86932371 24.1299819,4.02944036 23.6100542,3.50951257 L20.4904874,0.389945841 C19.9705596,-0.129981947 19.1306763,-0.129981947 18.6107485,0.389945841 L16.1710873,2.829607 L21.170393,7.82891265 L23.6100542,5.38925149 Z"
		/>
	</Icon>
);

EditIcon.propTypes = {
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
