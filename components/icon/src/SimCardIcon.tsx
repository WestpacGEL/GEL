import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const SimCardIcon = ({
	assistiveText = 'Sim Card',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="SimCardIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M18,0 C19.1,0 20,0.9 20,2 L20,22 C20,23.1 19.1,24 18,24 L4,24 C2.9,24 2,23.1 2,22 L2,7 L8,0 L18,0 Z M8,14 L8,8 L6,8 L6,14 L8,14 Z M12,20 L12,12 L10,12 L10,20 L12,20 Z M12,10 L12,8 L10,8 L10,10 L12,10 Z M16,20 L16,14 L14,14 L14,20 L16,20 Z M8,20 L8,16 L6,16 L6,20 L8,20 Z M16,12 L16,8 L14,8 L14,12 L16,12 Z"
		/>
	</Icon>
);

SimCardIcon.propTypes = {
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
