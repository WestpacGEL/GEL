import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const WatchIcon = ({
	assistiveText = 'Watch',
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
				d="M16.96 5.73C18.81 7.19 20 9.46 20 12C20 14.54 18.81 16.81 16.96 18.27L16 24H8L7.05 18.27C5.19 16.81 4 14.55 4 12C4 9.45 5.19 7.19 7.05 5.73L8 0H16L16.96 5.73ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.712 15.3011C5.24474 16.474 6.0524 17.496 7.05243 18.2847L8 24H16L16.9591 18.2756C18.7675 16.844 19.9439 14.6481 19.998 12.1781C19.9993 12.1189 20 12.0595 20 12C20 11.9272 19.999 11.8546 19.9971 11.7822C19.9313 9.32845 18.7578 7.14834 16.9591 5.72442L16 0H8L7.05243 5.71534C6.05236 6.50405 5.24468 7.52612 4.71194 8.69901C4.25445 9.70371 4 10.8209 4 12C4 13.1792 4.25447 14.2964 4.712 15.3011ZM15.5429 7.15945C14.5496 6.43069 13.3244 6 12 6C10.7295 6 9.55036 6.39632 8.57961 7.07189L8.2849 7.30322C7.61069 7.83244 7.05515 8.49962 6.66073 9.26303C6.23845 10.084 6 11.0145 6 12C6 12.9856 6.23848 13.9161 6.66081 14.7371C7.05523 15.5005 7.61073 16.1676 8.2849 16.6968L8.5796 16.9281C9.55035 17.6037 10.7295 18 12 18C13.3244 18 14.5496 17.5693 15.5429 16.8405L15.721 16.7C17.0226 15.6728 17.8855 14.1153 17.9894 12.3584C17.9964 12.2398 18 12.1203 18 12C18 11.8811 17.9965 11.763 17.9897 11.6457C17.8869 9.8871 17.0236 8.32801 15.721 7.29998L15.5429 7.15945ZM14.722 19.524C13.8722 19.832 12.9555 20 12 20C11.0474 20 10.1334 19.833 9.28568 19.5268L9.69571 22H14.3072L14.722 19.524ZM14.722 4.47596L14.3072 2H9.69571L9.28568 4.47317C10.1334 4.16695 11.0474 4 12 4C12.9555 4 13.8722 4.16797 14.722 4.47596Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

WatchIcon.propTypes = {
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
