import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const LinkIcon = ({
	assistiveText = 'Link',
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
					d="M11 18H6C2.68629 18 0 15.3137 0 12C0 8.68629 2.68629 6 6 6H11V8H6C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16H11V18Z"
					fill="currentColor"
				/>
				<path
					d="M13 18H18C21.3137 18 24 15.3137 24 12C24 8.68629 21.3137 6 18 6H13V8H18C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H13V18Z"
					fill="currentColor"
				/>
				<path d="M16 11H8V13H16V11Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M11 18H6C2.68629 18 0 15.3137 0 12C0 8.68629 2.68629 6 6 6H11V8H6C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16H11V18Z"
					fill="currentColor"
				/>
				<path
					d="M13 18H18C21.3137 18 24 15.3137 24 12C24 8.68629 21.3137 6 18 6H13V8H18C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H13V18Z"
					fill="currentColor"
				/>
				<path d="M16 11H8V13H16V11Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);

LinkIcon.propTypes = {
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
