import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const AppleIcon = ({
	assistiveText = 'Apple',
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
				d="M16.8897 0C17.0478 1.40625 16.4691 2.81625 15.6117 3.83175C14.7536 4.8465 13.3467 5.63624 11.9682 5.53049C11.7817 4.15125 12.4771 2.7165 13.2723 1.8165C14.1572 0.803999 15.6547 0.0495 16.8897 0ZM21.3386 8.19265C21.09 8.34289 18.6744 9.80249 18.7042 12.7522C18.7357 16.3027 21.8246 17.5369 21.9932 17.6042C21.9969 17.6057 22 17.607 22 17.607C21.9986 17.611 21.9962 17.6187 21.9926 17.6299C21.9227 17.8495 21.4262 19.4101 20.2991 21.0202C19.2737 22.482 18.2137 23.9377 16.5405 23.9685C15.7355 23.9831 15.198 23.7558 14.6392 23.5195C14.0547 23.2723 13.447 23.0152 12.4855 23.0152C11.4781 23.0152 10.8415 23.2802 10.2282 23.5355C9.69718 23.7565 9.18366 23.9703 8.46205 23.9985C6.84714 24.057 5.61676 22.419 4.58518 20.9617C2.47367 17.982 0.862594 12.5415 3.02784 8.86949C4.10163 7.04399 6.02433 5.88974 8.10898 5.86049C9.00865 5.84391 9.87968 6.18185 10.6419 6.47757C11.2238 6.70334 11.7423 6.90449 12.1616 6.90449C12.5389 6.90449 13.0443 6.7098 13.6335 6.48282C14.5605 6.12571 15.6949 5.68869 16.8644 5.80424C17.6649 5.83724 19.9123 6.11924 21.3553 8.18249C21.3518 8.18464 21.3463 8.18802 21.3386 8.19265Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.8897 0C17.0478 1.40625 16.4691 2.81625 15.6117 3.83175C14.7536 4.8465 13.3467 5.63624 11.9682 5.53049C11.7817 4.15125 12.4771 2.7165 13.2723 1.8165C14.1572 0.803999 15.6547 0.0495 16.8897 0ZM21.3386 8.19265C21.09 8.34289 18.6744 9.80249 18.7042 12.7522C18.7357 16.3027 21.8246 17.5369 21.9932 17.6042C21.9969 17.6057 22 17.607 22 17.607C21.9986 17.611 21.9962 17.6187 21.9926 17.6299C21.9227 17.8495 21.4262 19.4101 20.2991 21.0202C19.2737 22.482 18.2137 23.9377 16.5405 23.9685C15.7355 23.9831 15.198 23.7558 14.6392 23.5195C14.0547 23.2723 13.447 23.0152 12.4855 23.0152C11.4781 23.0152 10.8415 23.2802 10.2282 23.5355C9.69718 23.7565 9.18366 23.9703 8.46205 23.9985C6.84714 24.057 5.61676 22.419 4.58518 20.9617C2.47367 17.982 0.862594 12.5415 3.02784 8.86949C4.10163 7.04399 6.02433 5.88974 8.10898 5.86049C9.00865 5.84391 9.87968 6.18185 10.6419 6.47757C11.2238 6.70334 11.7423 6.90449 12.1616 6.90449C12.5389 6.90449 13.0443 6.7098 13.6335 6.48282C14.5605 6.12571 15.6949 5.68869 16.8644 5.80424C17.6649 5.83724 19.9123 6.11924 21.3553 8.18249C21.3518 8.18464 21.3463 8.18802 21.3386 8.19265Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

AppleIcon.propTypes = {
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
