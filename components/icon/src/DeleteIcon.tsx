import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const DeleteIcon = ({
	assistiveText = 'Delete',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="DeleteIcon"
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
			d="M4,6 L20,6 L20,22 C20,23.1045695 19.1045695,24 18,24 L6,24 C4.8954305,24 4,23.1045695 4,22 L4,6 Z M17,2 L7,2 L8,0 L16,0 L17,2 Z M4,2 L20,2 C20.5522847,2 21,2.44771525 21,3 L21,4 L3,4 L3,3 C3,2.44771525 3.44771525,2 4,2 L4,2 Z"
		/>
	</Icon>
);

DeleteIcon.propTypes = {
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
