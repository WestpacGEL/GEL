import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const BusinessPersonIcon = ({
	assistiveText = 'Business Person',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="BusinessPersonIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12.2608696,19.6521739 L14,24 L10,24 L11.7391304,19.6521739 L9,16 L15,16 L12.2608696,19.6521739 Z M15.9967737,24 L24,24 L24,21.3333333 C24,18.7701873 19.8243469,17.1262595 15.9967737,16.4116152 L15,19 L15.9967737,24 Z M7.98543588,16.4149431 C4.162726,17.131355 0,18.7741579 0,21.3333333 L0,24 L7.98543588,24 L9,19 L7.98543588,16.4149431 Z M12,12 C15.315,12 18,9.315 18,6 C18,2.685 15.315,0 12,0 C8.685,0 6,2.685 6,6 C6,9.315 8.685,12 12,12"
		/>
	</Icon>
);

BusinessPersonIcon.propTypes = {
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
