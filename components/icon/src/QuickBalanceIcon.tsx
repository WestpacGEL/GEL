import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const QuickBalanceIcon = ({
	assistiveText = 'QuickBalance',
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
				d="M20.9444 22C22.8446 19.877 24 17.0734 24 14C24 7.37258 18.6274 2 12 2C5.37258 2 0 7.37258 0 14C0 17.0734 1.15541 19.877 3.05557 22H20.9444ZM5 14C5 10.134 8.13401 7 12 7C13.3679 7 14.6441 7.39234 15.7223 8.07062L17.468 6.85091C15.9523 5.6899 14.0567 5 12 5C7.02944 5 3 9.02944 3 14C3 15.6376 3.4383 17.1759 4.20465 18.5007C4.48119 18.9788 5.09292 19.1421 5.57098 18.8656C6.04904 18.5891 6.21241 17.9773 5.93586 17.4993C5.34086 16.4707 5 15.2767 5 14ZM19.1511 8.53462L17.9339 10.2849C18.6094 11.3616 19 12.6352 19 14C19 15.2767 18.6591 16.4707 18.0641 17.4993C17.7876 17.9773 17.951 18.5891 18.429 18.8656C18.9071 19.1421 19.5188 18.9788 19.7953 18.5007C20.5617 17.1759 21 15.6376 21 14C21 11.9445 20.3109 10.0499 19.1511 8.53462ZM19 7L14.235 13.8517C14.277 14.4809 14.0745 15.1132 13.5907 15.5909C12.7065 16.4639 11.2815 16.4759 10.4085 15.5909C9.53549 14.7067 9.52424 13.2817 10.4085 12.4094C10.893 11.9309 11.5492 11.7172 12.1777 11.7667L19 7Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6 14C6 10.6863 8.68629 8 12 8C13.0188 8 13.9783 8.25393 14.8187 8.70196L16.6024 7.45567C15.3008 6.53858 13.7133 6 12 6C7.58172 6 4 9.58172 4 14C4 15.0048 4.18573 15.9686 4.52561 16.8572C4.72291 17.3731 5.30102 17.6313 5.81686 17.434C6.3327 17.2367 6.59094 16.6586 6.39364 16.1428C6.13963 15.4786 6 14.7568 6 14Z"
					fill="currentColor"
				/>
				<path
					d="M18.5477 9.40229L17.3034 11.1914C17.7481 12.0294 18 12.9853 18 14C18 14.7568 17.8604 15.4786 17.6064 16.1428C17.4091 16.6586 17.6673 17.2367 18.1831 17.434C18.699 17.6313 19.2771 17.3731 19.4744 16.8572C19.8143 15.9686 20 15.0048 20 14C20 12.2888 19.4627 10.703 18.5477 9.40229Z"
					fill="currentColor"
				/>
				<path
					d="M14.235 13.8517L19 7L12.1777 11.7667C11.5492 11.7172 10.893 11.9309 10.4085 12.4094C9.52424 13.2817 9.53549 14.7067 10.4085 15.5909C11.2815 16.4759 12.7065 16.4639 13.5907 15.5909C14.0745 15.1132 14.277 14.4809 14.235 13.8517Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24 14C24 17.0734 22.8446 19.877 20.9444 22H3.05557C1.15541 19.877 0 17.0734 0 14C0 7.37258 5.37258 2 12 2C18.6274 2 24 7.37258 24 14ZM22 14C22 16.2527 21.2572 18.3282 20.0009 20H3.99908C2.74285 18.3282 2 16.2527 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

QuickBalanceIcon.propTypes = {
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
