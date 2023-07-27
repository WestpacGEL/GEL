import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SimCardIcon = ({
	assistiveText = 'SimCard',
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
				d="M18 0H8L2 7V22C2 23.1 2.9 24 4 24H18C19.1 24 20 23.1 20 22V2C20 0.9 19.1 0 18 0ZM8 14H6V8H8V14ZM10 20H12V12H10V20ZM12 10H10V8H12V10ZM14 20H16V14H14V20ZM8 20H6V16H8V20ZM14 12H16V8H14V12Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M8 14H6V8H8V14Z" fill="currentColor" />
				<path d="M10 20H12V12H10V20Z" fill="currentColor" />
				<path d="M12 10H10V8H12V10Z" fill="currentColor" />
				<path d="M14 20H16V14H14V20Z" fill="currentColor" />
				<path d="M8 20H6V16H8V20Z" fill="currentColor" />
				<path d="M14 12H16V8H14V12Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 7L8 0H18C19.1 0 20 0.9 20 2V22C20 23.1 19.1 24 18 24H4C2.9 24 2 23.1 2 22V7ZM8.91987 2L4 7.73985V22H18V2H8.91987Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

SimCardIcon.propTypes = {
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
