import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ZipFileIcon = ({
	assistiveText = 'Zip File',
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
				d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM16 2L20 6H16V2ZM9 4H6V2H9V4ZM9 6V4H12V6H9ZM9 8H6V6H9V8ZM9 10V8H12V10H9ZM9 12H6V10H9V12ZM9 14V12H12V14H9ZM9 14V16H6V14H9ZM12 16H10V20H8V18H6V21C6 21.5523 6.44772 22 7 22H11C11.5523 22 12 21.5523 12 21V16Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M9 6V4H6V6H9Z" fill="currentColor" />
				<path d="M9 8H12V6H9V8Z" fill="currentColor" />
				<path d="M9 10V8H6V10H9Z" fill="currentColor" />
				<path d="M9 12H12V10H9V12Z" fill="currentColor" />
				<path d="M9 12H6V14H9V12Z" fill="currentColor" />
				<path
					d="M10 14H12V19C12 19.5523 11.5523 20 11 20H7C6.44772 20 6 19.5523 6 19V16H8V18H10V14Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM9 2H4V22H20V6H16V2H12V4H9V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ZipFileIcon.propTypes = {
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
