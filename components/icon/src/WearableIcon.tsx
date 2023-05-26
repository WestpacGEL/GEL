import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const WearableIcon = ({
	assistiveText = 'Wearable',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="WearableIcon"
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
			d="M14,22 L14,22 L14,19 L17,19 C19.209139,19 21,17.209139 21,15 C21,12.790861 19.209139,11 17,11 L7,11 C4.790861,11 3,12.790861 3,15 C3,17.209139 4.790861,19 7,19 L10,19 L10,22 L7,22 C3.13400675,22 0,18.8659932 0,15 C0,11.1340068 3.13400675,8 7,8 L17,8 C20.8659932,8 24,11.1340068 24,15 C24,18.8659932 20.8659932,22 17,22 L14,22 Z M7,2 L17,2 C17.5522847,2 18,2.44771525 18,3 L18,6 L6,6 L6,3 L6,3 C6,2.44771525 6.44771525,2 7,2 Z"
		/>
	</Icon>
);

WearableIcon.propTypes = {
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
