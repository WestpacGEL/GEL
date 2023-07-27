import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const LightBulbIcon = ({
	assistiveText = 'Light Bulb',
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
					d="M16 18V16.0019C18.6779 14.5711 20.5 11.7483 20.5 8.5C20.5 3.80558 16.6944 0 12 0C7.30558 0 3.5 3.80558 3.5 8.5C3.5 11.7483 5.32211 14.5711 8 16.0019V18C8 19.1046 8.89543 20 10 20H14C15.1046 20 16 19.1046 16 18Z"
					fill="currentColor"
				/>
				<path
					d="M15 23V22H9V23C9 23.5523 9.44772 24 10 24H14C14.5523 24 15 23.5523 15 23Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16 16.0019V18C16 19.1046 15.1046 20 14 20H10C8.89543 20 8 19.1046 8 18V16.0019C5.32211 14.5711 3.5 11.7483 3.5 8.5C3.5 3.80558 7.30558 0 12 0C16.6944 0 20.5 3.80558 20.5 8.5C20.5 11.7483 18.6779 14.5711 16 16.0019ZM14 18V14.6865C16.6113 13.8429 18.5 11.392 18.5 8.5C18.5 4.91015 15.5899 2 12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 11.392 7.38874 13.8429 10 14.6865V18H14Z"
					fill="currentColor"
				/>
				<path
					d="M15 22V23C15 23.5523 14.5523 24 14 24H10C9.44772 24 9 23.5523 9 23V22H15Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

LightBulbIcon.propTypes = {
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
