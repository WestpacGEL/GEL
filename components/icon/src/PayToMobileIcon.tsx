import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PayToMobileIcon = ({
	assistiveText = 'Pay To Mobile',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="PayToMobileIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		color={color}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,17 L2,19 C4.76,19 7,21.24 7,24 L9,24 C9,20.13 5.87,17 2,17 Z M2,21 L2,24 L5,24 C5,22.34 3.66,21 2,21 Z M2,13 C8.08,13 13,17.92 13,24 L11,24 C11,19.03 6.97,15 2,15 L2,13 Z M18,24 L15,24 C15,22.6043798 14.7800789,21.260125 14.3730012,20 L18,20 L18,4 L8,4 L8,12.4644213 C7.36250073,12.1321607 6.69400958,11.8511954 6,11.6269988 L6,2 C6,0.9 6.9,0 8,0 L18,0 C19.1,0 20,0.9 20,2 L20,22 C20,23.1 19.1,24 18,24 Z"
		/>
	</Icon>
);

PayToMobileIcon.propTypes = {
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
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	color: PropTypes.string,
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
