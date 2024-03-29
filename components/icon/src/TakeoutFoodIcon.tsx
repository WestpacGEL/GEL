import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const TakeoutFoodIcon = ({
	assistiveText = 'Takeout Food',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 2H8L3 7L3.15322 8.14916L1.41421 6.41016L0 7.82437L3.58835 11.4127L4.99996 22H19L20.4116 11.4127L24 7.82437L22.5858 6.41016L20.8468 8.14917L21 7L16 2ZM5.41771 10.0001H18.5823L18.8869 7.71535L15.1716 4H8.82843L5.11308 7.71535L5.41771 10.0001Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 2H16L21 7L20.8468 8.14917L22.5858 6.41016L24 7.82437L20.4116 11.4127L19 22H4.99996L3.58835 11.4127L0 7.82437L1.41421 6.41016L3.15322 8.14916L3 7L8 2ZM5.68437 12.0001L6.751 20H17.2489L18.3156 12.0001H5.68437ZM18.5823 10.0001H5.41771L5.11308 7.71535L8.82843 4H15.1716L18.8869 7.71535L18.5823 10.0001Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

TakeoutFoodIcon.propTypes = {
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
	 * The look of the icon.
	 *
	 * Defaults to the filled version.
	 */
	look: PropTypes.string,
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
