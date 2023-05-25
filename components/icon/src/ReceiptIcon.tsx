import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const ReceiptIcon = ({
	assistiveText = 'Receipt',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="ReceiptIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12,0 L13.25,1.5 L14.5,0 L15.75,1.5 L17,0 L18.25,1.5 L19.5,0 L20.75,1.5 L22,0 L22,24 L20.75,22.5 L19.5,24 L18.25,22.5 L17,24 L15.75,22.5 L14.5,24 L13.25,22.5 L12,24 L10.75,22.5 L9.5,24 L8.25,22.5 L7,24 L5.75,22.5 L4.5,24 L3.25,22.5 L2,24 L2,0 L3.25,1.5 L4.5,0 L5.75,1.5 L7,0 L8.25,1.5 L9.5,0 L10.75,1.5 L12,0 Z M6,12 L18,12 L18,10 L6,10 L6,12 Z M6,16 L18,16 L18,14 L6,14 L6,16 Z M6,6 L6,8 L18,8 L18,6 L6,6 Z"
		/>
	</Icon>
);

ReceiptIcon.propTypes = {
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
