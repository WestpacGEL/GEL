import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const FavoriteIcon = ({
	assistiveText = 'Favorite',
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
				d="M12 23L10.26 21.4174C4.08 15.8185 0 12.1259 0 7.59401C0 3.90136 2.904 1 6.6 1C8.688 1 10.692 1.97112 12 3.50572C13.308 1.97112 15.312 1 17.4 1C21.096 1 24 3.90136 24 7.59401C24 12.1259 19.92 15.8185 13.74 21.4294L12 23Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.26 21.4174L12 23L13.74 21.4294L13.7874 21.3864C19.9408 15.7996 24 12.1143 24 7.59401C24 3.90136 21.096 1 17.4 1C16.0016 1 14.6408 1.43561 13.5016 2.18436C12.9398 2.55357 12.432 2.99892 12 3.50572C11.568 2.99892 11.0602 2.55357 10.4984 2.18436C9.35919 1.43561 7.99844 1 6.6 1C2.904 1 0 3.90136 0 7.59401C0 12.1222 4.07331 15.8125 10.2448 21.4037L10.26 21.4174ZM12.3956 19.9487C12.3963 19.948 12.397 19.9474 12.3977 19.9468C15.5274 17.1053 17.9624 14.8906 19.6395 12.8407C21.2941 10.8183 22 9.20241 22 7.59401C22 5.00765 19.9931 3 17.4 3C15.9169 3 14.4627 3.69955 13.5221 4.80308L12 6.58891L10.4779 4.80308C9.5373 3.69955 8.08311 3 6.6 3C4.00686 3 2 5.00764 2 7.59401C2 9.20238 2.70594 10.8182 4.36004 12.8387C6.03705 14.8871 8.47254 17.0993 11.6028 19.9353L11.6057 19.9379L12.0051 20.3011L12.3956 19.9487Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

FavoriteIcon.propTypes = {
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
