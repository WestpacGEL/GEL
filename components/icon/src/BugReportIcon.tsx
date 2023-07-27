import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BugReportIcon = ({
	assistiveText = 'Bug Report',
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
				d="M17.4142 1L18.8284 2.41421L16.7094 4.53233C17.9078 5.40644 18.854 6.60554 19.4185 8.00003L23 8V10L19.9381 10C19.979 10.3276 20 10.6614 20 11V12H23V14H20V15C20 15.339 19.9789 15.6731 19.938 16.001L23 16V18L19.4181 18.001C18.2311 20.9323 15.357 23 12 23C8.64299 23 5.76892 20.9323 4.58191 18.001L1 18V16L4.06201 16.001C4.02108 15.6731 4 15.339 4 15V14H1V12H4V11L4.00381 10.7508C4.01156 10.4974 4.0311 10.247 4.06189 10L1 10V8L4.58151 8.00003C5.14597 6.60554 6.09222 5.40644 7.29063 4.53233L5.17157 2.41421L6.58579 1L9.11917 3.53439C10.013 3.18924 10.9844 3 12 3C13.0156 3 13.987 3.18924 14.8808 3.53439L17.4142 1ZM16 14H8V16H16V14ZM16 10H8V12H16V10Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M16 10H8V12H16V10Z" fill="currentColor" />
				<path d="M8 14H16V16H8V14Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.4142 1L18.8284 2.41406L16.7094 4.53223C16.9109 4.67871 17.1051 4.83496 17.2917 5C18.2152 5.81543 18.9489 6.83984 19.4185 8H23V10H19.9381C19.979 10.3271 20 10.6611 20 11V12H23V14H20V15C20 15.3389 19.979 15.6729 19.9381 16H23V18H19.4185C18.2317 20.9316 15.3574 23 12 23C8.64258 23 5.76831 20.9316 4.58154 18H1V16H4.06189C4.03748 15.8047 4.02014 15.6064 4.01013 15.4072C4.00342 15.2725 4 15.1367 4 15V14H1V12H4V11C4 10.833 4.00513 10.668 4.01514 10.5039C4.02039 10.418 4.02698 10.333 4.03491 10.248C4.0426 10.165 4.05164 10.082 4.06189 10H1V8H4.58154C5.05115 6.83984 5.78479 5.81543 6.70825 5C6.81104 4.90918 6.91614 4.82129 7.02344 4.73535C7.11096 4.66602 7.20007 4.59766 7.29065 4.53223L5.17163 2.41406L6.58582 1L9.11914 3.53418C10.0131 3.18945 10.9844 3 12 3C13.0156 3 13.9869 3.18945 14.8809 3.53418L17.4142 1ZM12 5C8.68628 5 6 7.68652 6 11V15C6 18.3135 8.68628 21 12 21C15.3137 21 18 18.3135 18 15V11C18 7.68652 15.3137 5 12 5Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

BugReportIcon.propTypes = {
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
