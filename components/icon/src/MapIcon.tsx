import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const MapIcon = ({
	assistiveText = 'Map',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="MapIcon"
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
			d="M21.4444444,2 C21.7555556,2 22,2.24444444 22,2.55555556 L22,19.3555556 C22,19.6111111 21.8333333,19.8111111 21.6,19.8888889 L15,22 L9,19 L2.73333333,21.9666667 L2.55555556,22 C2.24444444,22 2,21.7555556 2,21.4444444 L2,4.64444444 C2,4.38888889 2.16666667,4.18888889 2.4,4.11111111 L9,2 L15,4 L21.2666667,2.03333333 L21.4444444,2 Z M15,20 L15,6 L9,4 L9,17 L15,20 Z"
		/>
	</Icon>
);

MapIcon.propTypes = {
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
