import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const FaceHappyIcon = ({
	assistiveText = 'Face Happy',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="FaceHappyIcon"
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
			d="M24,12 C24,18.627 18.62775,24 12,24 C5.37225,24 0,18.627 0,12 C0,5.373 5.37225,0 12,0 C18.62775,0 24,5.373 24,12 Z M12,2 C6.47714286,2 2,6.47714286 2,12 C2,17.5228571 6.47714286,22 12,22 C17.5228571,22 22,17.5228571 22,12 C22,6.47714286 17.5228571,2 12,2 Z M5,16.0142014 L5,16.0142014 L6.72414236,15 C7.767498,16.7698831 9.6933545,17.9573958 11.8965695,17.9573958 C14.0997844,17.9573958 16.0256409,16.7698831 17.0689965,15 L18.7931389,16.0142014 C17.4019981,18.3740455 14.8341894,19.9573958 11.8965695,19.9573958 C8.95894951,19.9573958 6.39114084,18.3740455 5,16.0142014 Z M15,8.25 C15,9.07875 15.67125,9.75 16.5,9.75 C17.32875,9.75 18,9.07875 18,8.25 C18,7.42125 17.32875,6.75 16.5,6.75 C15.67125,6.75 15,7.42125 15,8.25 M6,8.25 C6,7.42125 6.67125,6.75 7.5,6.75 C8.32875,6.75 9,7.42125 9,8.25 C9,9.07875 8.32875,9.75 7.5,9.75 C6.67125,9.75 6,9.07875 6,8.25"
		/>
	</Icon>
);

FaceHappyIcon.propTypes = {
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
