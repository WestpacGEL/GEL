import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PayIcon = ({
	assistiveText = 'Pay',
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
					d="M15 2C17.7625 2 20 4.2375 20 7C20 9.7625 17.7625 12 15 12C12.2375 12 10 9.7625 10 7C10 4.2375 12.2375 2 15 2Z"
					fill="currentColor"
				/>
				<path d="M12 14L4 6V10H0V18H4V22L12 14Z" fill="currentColor" />
				<path
					d="M14.827 14.0014C14.8857 14.0005 14.9434 14 15 14C18.0037 14 24 15.34 24 18V22H6.82843L14.827 14.0014Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M20 7C20 4.2375 17.7625 2 15 2C12.2375 2 10 4.2375 10 7C10 9.7625 12.2375 12 15 12C17.7625 12 20 9.7625 20 7ZM15 4C16.6579 4 18 5.34207 18 7C18 8.65793 16.6579 10 15 10C13.3421 10 12 8.65793 12 7C12 5.34207 13.3421 4 15 4Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23.9999 22H9V20H21.9999V18.0569C21.9734 18.0148 21.9055 17.9286 21.7475 17.799C21.3883 17.5043 20.7844 17.1818 19.9554 16.8866C18.3034 16.2984 16.281 16 15 16V14C18.0038 14 23.9999 15.34 23.9999 18V22Z"
					fill="currentColor"
				/>
				<path d="M12 14L4 6V10H0V18H4V22L12 14Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);

PayIcon.propTypes = {
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
