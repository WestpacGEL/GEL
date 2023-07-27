import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const DeliveryTruckIcon = ({
	assistiveText = 'DeliveryTruck',
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
				d="M0 4C0 2.89543 0.895431 2 2 2H17V5H19.5554C20.2237 5 20.8478 5.33376 21.2188 5.88955L23.6634 9.55134C23.8829 9.8801 24 10.2665 24 10.6618V19H21.9646C21.7219 20.6961 20.2632 22 18.5 22C16.7368 22 15.2781 20.6961 15.0354 19H8.96456C8.72194 20.6961 7.26324 22 5.5 22C3.73676 22 2.27806 20.6961 2.03544 19H0V4ZM17 11H22V10.6618L19.5554 7H17V11ZM5.5 20C6.32843 20 7 19.3284 7 18.5C7 17.6716 6.32843 17 5.5 17C4.67157 17 4 17.6716 4 18.5C4 19.3284 4.67157 20 5.5 20ZM18.5 20C19.3284 20 20 19.3284 20 18.5C20 17.6716 19.3284 17 18.5 17C17.6716 17 17 17.6716 17 18.5C17 19.3284 17.6716 20 18.5 20Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 5V2H2C0.895431 2 0 2.89543 0 4V19H2.03544C2.27806 20.6961 3.73676 22 5.5 22C7.26324 22 8.72194 20.6961 8.96456 19H15.0354C15.2781 20.6961 16.7368 22 18.5 22C20.2632 22 21.7219 20.6961 21.9646 19H24V10.6618C24 10.2665 23.8829 9.8801 23.6634 9.55134L21.2188 5.88955C20.8478 5.33376 20.2237 5 19.5554 5H17ZM15 4H2V11H15V4ZM21.6632 17H22V13H2V17H2.33682C2.89855 15.8175 4.1038 15 5.5 15C6.8962 15 8.10145 15.8175 8.66318 17H15.3368C15.8985 15.8175 17.1038 15 18.5 15C19.8962 15 21.1015 15.8175 21.6632 17ZM17 7V11H22V10.6618L19.5554 7H17ZM5.5 20C6.32843 20 7 19.3284 7 18.5C7 17.6716 6.32843 17 5.5 17C4.67157 17 4 17.6716 4 18.5C4 19.3284 4.67157 20 5.5 20ZM18.5 20C19.3284 20 20 19.3284 20 18.5C20 17.6716 19.3284 17 18.5 17C17.6716 17 17 17.6716 17 18.5C17 19.3284 17.6716 20 18.5 20Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

DeliveryTruckIcon.propTypes = {
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
