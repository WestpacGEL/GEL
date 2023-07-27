import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const EftposIcon = ({
	assistiveText = 'Eftpos',
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
					d="M2 2C2 0.89543 2.89543 0 4 0H20C21.1046 0 22 0.895431 22 2V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V2ZM20 2H4V8H20V2ZM17.25 14L15 11L12.75 14H17.25Z"
					fill="currentColor"
				/>
				<path
					d="M14 19H6V23C6 23.5523 6.44771 24 7 24H17C17.5523 24 18 23.5523 18 23V19H16V22H14V19Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path d="M12.75 14L15 11L17.25 14H12.75Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4 0C2.89543 0 2 0.89543 2 2V16C2 17.1046 2.89543 18 4 18H6V23C6 23.5523 6.44771 24 7 24H17C17.5523 24 18 23.5523 18 23V18H20C21.1046 18 22 17.1046 22 16V2C22 0.895431 21.1046 0 20 0H4ZM20 2H4V8H20V2ZM16 22V18H14V22H16ZM4 10H20V16H4V10ZM12 18H8V22H12V18Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

EftposIcon.propTypes = {
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
