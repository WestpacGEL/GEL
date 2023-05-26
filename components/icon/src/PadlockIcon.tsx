import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PadlockIcon = ({
	assistiveText = 'Padlock',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="PadlockIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M6,8 L6,6 C6,2.6862915 8.6862915,0 12,0 C15.3137085,0 18,2.6862915 18,6 L18,8 L20,8 C21.1045695,8 22,8.8954305 22,10 L22,22 C22,23.1045695 21.1045695,24 20,24 L4,24 C2.8954305,24 2,23.1045695 2,22 L2,10 C2,8.8954305 2.8954305,8 4,8 L6,8 Z M16,8 L16,6 C16,3.790861 14.209139,2 12,2 C9.790861,2 8,3.790861 8,6 L8,8 L16,8 Z M12,18.5 C13.3807119,18.5 14.5,17.3807119 14.5,16 C14.5,14.6192881 13.3807119,13.5 12,13.5 C10.6192881,13.5 9.5,14.6192881 9.5,16 C9.5,17.3807119 10.6192881,18.5 12,18.5 Z"
		/>
	</Icon>
);

PadlockIcon.propTypes = {
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
