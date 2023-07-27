import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const AlertIcon = ({
	assistiveText = 'Alert',
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
				d="M1.00041 24C0.653409 24 0.33241 23.8197 0.14941 23.5241C-0.0325905 23.2286 -0.0495905 22.8599 0.105409 22.5503L11.1054 0.509565C11.4454 -0.169692 12.5554 -0.169692 12.8944 0.509565L23.8944 22.5503C24.0504 22.8599 24.0334 23.2286 23.8504 23.5241C23.6684 23.8197 23.3474 24 23.0004 24H1.00041ZM11 20.0001H13V18.0001H11V20.0001ZM13 16.0001H11V10.0001H13V16.0001Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M11 20H13V18H11V20Z" fill="currentColor" />
				<path d="M13 16H11V10H13V16Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.14941 23.5241C0.33241 23.8197 0.653409 24 1.00041 24H23.0004C23.3474 24 23.6684 23.8197 23.8504 23.5241C24.0334 23.2286 24.0504 22.8599 23.8944 22.5503L12.8944 0.509565C12.5554 -0.169692 11.4454 -0.169692 11.1054 0.509565L0.105409 22.5503C-0.0495905 22.8599 -0.0325905 23.2286 0.14941 23.5241ZM12.0004 3.19754L21.3824 22.0001H2.61841L12.0004 3.19754Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

AlertIcon.propTypes = {
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
