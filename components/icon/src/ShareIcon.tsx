import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const ShareIcon = ({
	assistiveText = 'Share',
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
				d="M19.0723 16.9639C18.1566 16.9639 17.3373 17.3253 16.7108 17.8916L8.12048 12.8916C8.18072 12.6145 8.22892 12.3373 8.22892 12.0482C8.22892 11.759 8.18072 11.4819 8.12048 11.2048L16.6145 6.25301C17.2651 6.85542 18.1205 7.22892 19.0723 7.22892C21.0723 7.22892 22.6867 5.61446 22.6867 3.61446C22.6867 1.61446 21.0723 0 19.0723 0C17.0723 0 15.4578 1.61446 15.4578 3.61446C15.4578 3.90361 15.506 4.18072 15.5663 4.45783L7.07229 9.40964C6.42169 8.80723 5.56627 8.43373 4.61446 8.43373C2.61446 8.43373 1 10.0482 1 12.0482C1 14.0482 2.61446 15.6627 4.61446 15.6627C5.56627 15.6627 6.42169 15.2892 7.07229 14.6867L15.6506 19.6988C15.5904 19.9518 15.5542 20.2169 15.5542 20.4819C15.5542 22.4217 17.1325 24 19.0723 24C21.012 24 22.5904 22.4217 22.5904 20.4819C22.5904 18.5422 21.012 16.9639 19.0723 16.9639Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M19.0723 16.9639C18.1566 16.9639 17.3373 17.3253 16.7108 17.8916L8.12048 12.8916C8.18072 12.6145 8.22892 12.3373 8.22892 12.0482C8.22892 11.759 8.18072 11.4819 8.12048 11.2048L16.6145 6.25301C17.2651 6.85542 18.1205 7.22892 19.0723 7.22892C21.0723 7.22892 22.6867 5.61446 22.6867 3.61446C22.6867 1.61446 21.0723 0 19.0723 0C17.0723 0 15.4578 1.61446 15.4578 3.61446C15.4578 3.90361 15.506 4.18072 15.5663 4.45783L7.07229 9.40964C6.42169 8.80723 5.56627 8.43373 4.61446 8.43373C2.61446 8.43373 1 10.0482 1 12.0482C1 14.0482 2.61446 15.6627 4.61446 15.6627C5.56627 15.6627 6.42169 15.2892 7.07229 14.6867L15.6506 19.6988C15.5904 19.9518 15.5542 20.2169 15.5542 20.4819C15.5542 22.4217 17.1325 24 19.0723 24C21.012 24 22.5904 22.4217 22.5904 20.4819C22.5904 18.5422 21.012 16.9639 19.0723 16.9639Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

ShareIcon.propTypes = {
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
