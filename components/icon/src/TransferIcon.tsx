import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const TransferIcon = ({
	assistiveText = 'Transfer',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TransferIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12,12 L16,12 L16,8 L24,16 L16,24 L16,20 L12,20 L12,12 Z M0,8 L8,0 L8,4 L12,4 L12,12 L8,12 L8,16 L0,8 Z"
		/>
	</Icon>
);

TransferIcon.propTypes = {
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