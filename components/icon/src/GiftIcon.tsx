import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const GiftIcon = ({
	assistiveText = 'Gift',
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
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5 4C5 1.79086 6.79086 0 9 0C10.1947 0 11.2671 0.523755 12 1.35418C12.7329 0.523755 13.8053 0 15 0C17.2091 0 19 1.79086 19 4C19 4.72857 18.8052 5.41165 18.4649 6H22C23.1046 6 24 6.89543 24 8V14H0V8C0 6.89543 0.895431 6 2 6H5.53513C5.19479 5.41165 5 4.72857 5 4ZM17 4C17 5.10457 16.1046 6 15 6C13.8954 6 13 5.10457 13 4C13 2.89543 13.8954 2 15 2C16.1046 2 17 2.89543 17 4ZM11 4C11 5.10457 10.1046 6 9 6C7.89543 6 7 5.10457 7 4C7 2.89543 7.89543 2 9 2C10.1046 2 11 2.89543 11 4ZM10.2538 6.9996L6.91287 11.4765L8.51641 12.6718L12.0014 8.00171L15.4865 12.6718L17.09 11.4765L13.7491 6.9996C13.7491 6.9996 13.0592 6 12 6C10.9408 6 10.2538 6.9996 10.2538 6.9996Z"
					fill="currentColor"
				/>
				<path
					d="M1 22V16H23V22C23 23.1046 22.1046 24 21 24H3C1.89543 24 1 23.1046 1 22Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9 0C6.79086 0 5 1.79086 5 4C5 4.72857 5.19479 5.41165 5.53513 6H2C0.895431 6 0 6.89543 0 8V16H1V22C1 23.1046 1.89543 24 3 24H21C22.1046 24 23 23.1046 23 22V16H24V8C24 6.89543 23.1046 6 22 6H18.4649C18.8052 5.41165 19 4.72857 19 4C19 1.79086 17.2091 0 15 0C13.8053 0 12.7329 0.523755 12 1.35418C11.2671 0.523755 10.1947 0 9 0ZM15 6C16.1046 6 17 5.10457 17 4C17 2.89543 16.1046 2 15 2C13.8954 2 13 2.89543 13 4C13 5.10457 13.8954 6 15 6ZM9 6C10.1046 6 11 5.10457 11 4C11 2.89543 10.1046 2 9 2C7.89543 2 7 2.89543 7 4C7 5.10457 7.89543 6 9 6ZM2 8V14H22V8H14.4957L17.09 11.4765L15.4865 12.6718L12.0014 8.00171L8.51641 12.6718L6.91287 11.4765L9.50721 8H2ZM3 16L3 22H21V16H3Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

GiftIcon.propTypes = {
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
