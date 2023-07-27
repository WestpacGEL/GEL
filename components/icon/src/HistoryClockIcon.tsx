import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const HistoryClockIcon = ({
	assistiveText = 'History Clock',
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
					d="M6.7779 20.0665L8.0583 18.53C9.53262 19.76 11.4299 20.5 13.5 20.5C18.1944 20.5 22 16.6944 22 12C22 7.30558 18.1944 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12H8L4 16.5L0 12H3C3 6.20101 7.70101 1.5 13.5 1.5C19.299 1.5 24 6.20101 24 12C24 17.799 19.299 22.5 13.5 22.5C10.9428 22.5 8.59911 21.5859 6.7779 20.0665Z"
					fill="currentColor"
				/>
				<path
					d="M14 6V12.8458L18.1962 15.2684L17.1962 17.0005L12 14.0005V6H14Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M6.7779 20.0665L8.0583 18.53C9.53262 19.76 11.4299 20.5 13.5 20.5C18.1944 20.5 22 16.6944 22 12C22 7.30558 18.1944 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12H8L4 16.5L0 12H3C3 6.20101 7.70101 1.5 13.5 1.5C19.299 1.5 24 6.20101 24 12C24 17.799 19.299 22.5 13.5 22.5C10.9428 22.5 8.59911 21.5859 6.7779 20.0665Z"
					fill="currentColor"
				/>
				<path
					d="M14 6V12.8458L18.1962 15.2684L17.1962 17.0005L12 14.0005V6H14Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

HistoryClockIcon.propTypes = {
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
