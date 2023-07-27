import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const AndroidIcon = ({
	assistiveText = 'Android',
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
				d="M16.83 0.86L15.53 2.16C17.03 3.25 18 5.01 18 7H6C6 5.01 6.97 3.26 8.45 2.17L7.14 0.86C6.94 0.66 6.94 0.35 7.14 0.15C7.34 -0.05 7.65 -0.05 7.85 0.15L9.34 1.63C10.14 1.23 11.04 1 12 1C12.95 1 13.85 1.23 14.64 1.63L16.12 0.15C16.32 -0.05 16.63 -0.05 16.83 0.15C17.03 0.35 17.03 0.66 16.83 0.86ZM2 9.5C2 8.67 2.67 8 3.5 8C4.33 8 5 8.67 5 9.5V16.5C5 17.33 4.33 18 3.5 18C2.67 18 2 17.33 2 16.5V9.5ZM7 19C6.45 19 6 18.55 6 18V8H18V18C18 18.55 17.55 19 17 19H16V22.5C16 23.33 15.33 24 14.5 24C13.67 24 13 23.33 13 22.5V19H11V22.5C11 23.33 10.33 24 9.5 24C8.67 24 8 23.33 8 22.5V19H7ZM20.5 8C19.67 8 19 8.67 19 9.5V16.5C19 17.33 19.67 18 20.5 18C21.33 18 22 17.33 22 16.5V9.5C22 8.67 21.33 8 20.5 8ZM10 5H9V4H10V5ZM14 5H15V4H14V5Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.83 0.86L15.53 2.16C17.03 3.25 18 5.01 18 7H6C6 5.01 6.97 3.26 8.45 2.17L7.14 0.86C6.94 0.66 6.94 0.35 7.14 0.15C7.34 -0.05 7.65 -0.05 7.85 0.15L9.34 1.63C10.14 1.23 11.04 1 12 1C12.95 1 13.85 1.23 14.64 1.63L16.12 0.15C16.32 -0.05 16.63 -0.05 16.83 0.15C17.03 0.35 17.03 0.66 16.83 0.86ZM2 9.5C2 8.67 2.67 8 3.5 8C4.33 8 5 8.67 5 9.5V16.5C5 17.33 4.33 18 3.5 18C2.67 18 2 17.33 2 16.5V9.5ZM7 19C6.45 19 6 18.55 6 18V8H18V18C18 18.55 17.55 19 17 19H16V22.5C16 23.33 15.33 24 14.5 24C13.67 24 13 23.33 13 22.5V19H11V22.5C11 23.33 10.33 24 9.5 24C8.67 24 8 23.33 8 22.5V19H7ZM20.5 8C19.67 8 19 8.67 19 9.5V16.5C19 17.33 19.67 18 20.5 18C21.33 18 22 17.33 22 16.5V9.5C22 8.67 21.33 8 20.5 8ZM10 5H9V4H10V5ZM14 5H15V4H14V5Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

AndroidIcon.propTypes = {
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
