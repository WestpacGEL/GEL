import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ExitIcon = ({
	assistiveText = 'Exit',
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
					d="M0 12C0 5.373 5.37225 0 12 0V2C6.47714 2 2 6.47714 2 12C2 17.5229 6.47714 22 12 22C17.5229 22 22 17.5229 22 12H24C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12Z"
					fill="currentColor"
				/>
				<path
					d="M22.0144 8V3.41682L12.4142 13.017L11 11.6028L20.6028 2H16.0144V0H24.0144V8H22.0144Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M0 12C0 5.373 5.37225 0 12 0V2C6.47714 2 2 6.47714 2 12C2 17.5229 6.47714 22 12 22C17.5229 22 22 17.5229 22 12H24C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12Z"
					fill="currentColor"
				/>
				<path
					d="M22.0144 8V3.41682L12.4142 13.017L11 11.6028L20.6028 2H16.0144V0H24.0144V8H22.0144Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ExitIcon.propTypes = {
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
