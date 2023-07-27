import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FutureClockIcon = ({
	assistiveText = 'Future Clock',
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
					d="M20 16.5L24 12H21C21 6.20101 16.299 1.5 10.5 1.5C4.70101 1.5 0 6.20101 0 12C0 17.799 4.70101 22.5 10.5 22.5C13.0572 22.5 15.4009 21.5859 17.2221 20.0665L15.9417 18.53C14.4674 19.76 12.5701 20.5 10.5 20.5C5.80558 20.5 2 16.6944 2 12C2 7.30558 5.80558 3.5 10.5 3.5C15.1944 3.5 19 7.30558 19 12H16L20 16.5Z"
					fill="currentColor"
				/>
				<path
					d="M15.2 15.2684L11.0012 12.8458V6H9V14L14.1994 17.0005L15.2 15.2684Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M20 16.5L24 12H21C21 6.20101 16.299 1.5 10.5 1.5C4.70101 1.5 0 6.20101 0 12C0 17.799 4.70101 22.5 10.5 22.5C13.0572 22.5 15.4009 21.5859 17.2221 20.0665L15.9417 18.53C14.4674 19.76 12.5701 20.5 10.5 20.5C5.80558 20.5 2 16.6944 2 12C2 7.30558 5.80558 3.5 10.5 3.5C15.1944 3.5 19 7.30558 19 12H16L20 16.5Z"
					fill="currentColor"
				/>
				<path
					d="M15.2 15.2684L11.0012 12.8458V6H9V14L14.1994 17.0005L15.2 15.2684Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

FutureClockIcon.propTypes = {
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
