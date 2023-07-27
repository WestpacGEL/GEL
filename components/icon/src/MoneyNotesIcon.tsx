import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MoneyNotesIcon = ({
	assistiveText = 'Money Notes',
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
					d="M0 6C0 4.89543 0.895431 4 2 4H18C19.1046 4 20 4.89543 20 6V15C20 16.1046 19.1046 17 18 17H2C0.895431 17 0 16.1046 0 15V6ZM13.5 10.5C13.5 12.433 11.933 14 10 14C8.067 14 6.5 12.433 6.5 10.5C6.5 8.567 8.067 7 10 7C11.933 7 13.5 8.567 13.5 10.5Z"
					fill="currentColor"
				/>
				<path d="M2 19V21H22C23.1046 21 24 20.1046 24 19V6H22V19H2Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M10 14C11.933 14 13.5 12.433 13.5 10.5C13.5 8.567 11.933 7 10 7C8.067 7 6.5 8.567 6.5 10.5C6.5 12.433 8.067 14 10 14Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 4C0.895431 4 0 4.89543 0 6V15C0 16.1046 0.895431 17 2 17H18C19.1046 17 20 16.1046 20 15V6C20 4.89543 19.1046 4 18 4H2ZM18 6H2V15H18V6Z"
					fill="currentColor"
				/>
				<path d="M2 21V19H22V6H24V19C24 20.1046 23.1046 21 22 21H2Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);

MoneyNotesIcon.propTypes = {
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
