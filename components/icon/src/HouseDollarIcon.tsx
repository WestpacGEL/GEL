import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const HouseDollarIcon = ({
	assistiveText = 'House Dollar',
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
					d="M22 8V10.2876C20.695 9.4716 19.1526 9 17.5 9C12.8056 9 9 12.8056 9 17.5C9 19.1526 9.4716 20.695 10.2876 22H2V8L12 0L22 8Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24 17.5C24 21.0899 21.0899 24 17.5 24C13.9101 24 11 21.0899 11 17.5C11 13.9101 13.9101 11 17.5 11C21.0899 11 24 13.9101 24 17.5ZM15 18.8518H16.2522C16.3124 19.3699 16.846 19.7095 17.5344 19.7095C18.2272 19.7095 18.7005 19.3742 18.7005 18.9128C18.7005 18.5035 18.4036 18.2771 17.6549 18.1073L16.846 17.9288C15.7014 17.6807 15.1377 17.0929 15.1377 16.1743C15.1377 15.1649 15.8895 14.4532 17 14.2871V13.5H18V14.2806C19.1599 14.4324 19.8691 15.1368 19.8881 16.1395H18.6704C18.6274 15.6083 18.167 15.2862 17.5172 15.2862C16.8761 15.2862 16.4458 15.5953 16.4458 16.0611C16.4458 16.4486 16.747 16.6663 17.4613 16.8317L18.2143 16.9928C19.4578 17.2627 20 17.8026 20 18.7604C20 19.8367 19.2386 20.5634 18 20.7188V21.5H17V20.7231C15.7873 20.5825 15.0344 19.8989 15 18.8518Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M20 8.96125L12 2.56125L4 8.96125V20H10L11 22H2V8L12 0L22 8V11L20 10V8.96125Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24 17.5C24 21.0899 21.0899 24 17.5 24C13.9101 24 11 21.0899 11 17.5C11 13.9101 13.9101 11 17.5 11C21.0899 11 24 13.9101 24 17.5ZM15 18.8518H16.2522C16.3124 19.3699 16.846 19.7095 17.5344 19.7095C18.2272 19.7095 18.7005 19.3742 18.7005 18.9128C18.7005 18.5035 18.4036 18.2771 17.6549 18.1073L16.846 17.9288C15.7014 17.6807 15.1377 17.0929 15.1377 16.1743C15.1377 15.1649 15.8895 14.4532 17 14.2871V13.5H18V14.2806C19.1599 14.4324 19.8691 15.1368 19.8881 16.1395H18.6704C18.6274 15.6083 18.167 15.2862 17.5172 15.2862C16.8761 15.2862 16.4458 15.5953 16.4458 16.0611C16.4458 16.4486 16.747 16.6663 17.4613 16.8317L18.2143 16.9928C19.4578 17.2627 20 17.8026 20 18.7604C20 19.8367 19.2386 20.5634 18 20.7188V21.5H17V20.7231C15.7873 20.5825 15.0344 19.8989 15 18.8518Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

HouseDollarIcon.propTypes = {
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
