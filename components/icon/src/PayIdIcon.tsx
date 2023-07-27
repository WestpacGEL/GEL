import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PayIdIcon = ({
	assistiveText = 'PayId',
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
				d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6ZM10.8544 5.75669L10.1729 5.83989V14.4609H11.7238V7.26271C13.0484 7.25243 15.9333 7.52633 16.9523 9.94475L18.3816 9.34272C17.6338 7.57214 16.0791 6.3849 13.8757 5.92216C12.8825 5.71694 11.8641 5.66117 10.8544 5.75669ZM5.47033 6.17948C5.34297 6.37039 5.27508 6.59478 5.27527 6.82427C5.27552 7.1318 5.39785 7.42664 5.61539 7.644C5.83293 7.86137 6.12787 7.98347 6.4354 7.98347C6.66489 7.98347 6.88923 7.9154 7.08003 7.78788C7.27083 7.66037 7.41953 7.47912 7.50731 7.26708C7.59509 7.05504 7.61801 6.82173 7.57317 6.59666C7.52833 6.37159 7.41774 6.16488 7.2554 6.00267C7.09306 5.84046 6.88626 5.73004 6.66115 5.68539C6.43605 5.64073 6.20276 5.66384 5.99079 5.75179C5.77882 5.83974 5.5977 5.98858 5.47033 6.17948ZM18.3882 14.8536C18.5701 14.3953 18.6957 13.9165 18.7621 13.4279L20.3364 13.4298L18.1171 10.6459L15.9034 13.4251H17.1935C17.1464 13.7058 17.0696 13.9806 16.9644 14.245C16.1801 16.0866 14.2104 17.0214 11.1105 17.0214H7.16083V10.0102H5.609V18.5733H11.1068C14.8872 18.5733 17.3374 17.3215 18.3882 14.8536Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6ZM10.8544 5.75669L10.1729 5.83989V14.4609H11.7238V7.26271C13.0484 7.25243 15.9333 7.52633 16.9523 9.94475L18.3816 9.34272C17.6338 7.57214 16.0791 6.3849 13.8757 5.92216C12.8825 5.71694 11.8641 5.66117 10.8544 5.75669ZM5.47033 6.17948C5.34297 6.37039 5.27508 6.59478 5.27527 6.82427C5.27552 7.1318 5.39785 7.42664 5.61539 7.644C5.83293 7.86137 6.12787 7.98347 6.4354 7.98347C6.66489 7.98347 6.88923 7.9154 7.08003 7.78788C7.27083 7.66037 7.41953 7.47912 7.50731 7.26708C7.59509 7.05504 7.61801 6.82173 7.57317 6.59666C7.52833 6.37159 7.41774 6.16488 7.2554 6.00267C7.09306 5.84046 6.88626 5.73004 6.66115 5.68539C6.43605 5.64073 6.20276 5.66384 5.99079 5.75179C5.77882 5.83974 5.5977 5.98858 5.47033 6.17948ZM18.3882 14.8536C18.5701 14.3953 18.6957 13.9165 18.7621 13.4279L20.3364 13.4298L18.1171 10.6459L15.9034 13.4251H17.1935C17.1464 13.7058 17.0696 13.9806 16.9644 14.245C16.1801 16.0866 14.2104 17.0214 11.1105 17.0214H7.16083V10.0102H5.609V18.5733H11.1068C14.8872 18.5733 17.3374 17.3215 18.3882 14.8536Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

PayIdIcon.propTypes = {
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
