import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const LuggageIcon = ({
	assistiveText = 'Luggage',
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
				d="M8 4V2C8 0.895431 8.89543 0 10 0H14C15.1046 0 16 0.895431 16 2V4H20C21.1046 4 22 4.89543 22 6V20C22 21.1046 21.1046 22 20 22C20 23.1046 19.1046 24 18 24C16.8954 24 16 23.1046 16 22H8C8 23.1046 7.10457 24 6 24C4.89543 24 4 23.1046 4 22C2.89543 22 2 21.1046 2 20V6C2 4.89543 2.89543 4 4 4H8ZM10 2H14V4H10V2ZM7 18V8H9V18H7ZM11 8H13V18H11V8ZM17 18V8H15V18H17Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M7 18V8H9V18H7Z" fill="currentColor" />
				<path d="M13 8H11V18H13V8Z" fill="currentColor" />
				<path d="M15 18V8H17V18H15Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8 4V2C8 0.895431 8.89543 0 10 0H14C15.1046 0 16 0.895431 16 2V4H20C21.1046 4 22 4.89543 22 6V20C22 21.1046 21.1046 22 20 22C20 23.1046 19.1046 24 18 24C16.8954 24 16 23.1046 16 22H8C8 23.1046 7.10457 24 6 24C4.89543 24 4 23.1046 4 22C2.89543 22 2 21.1046 2 20V6C2 4.89543 2.89543 4 4 4H8ZM10 2H14V4H10V2ZM4 6V20H20V6H4Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

LuggageIcon.propTypes = {
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
